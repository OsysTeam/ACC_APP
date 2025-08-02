import React, { useEffect, useRef, useState } from "react";
import * as xlsx from "xlsx";
import { saveAs } from "file-saver";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Autocomplete,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

// jQuery + DataTables + Buttons
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.min.js";
import "datatables.net-buttons/js/buttons.html5.min.js";
import "datatables.net-buttons/js/buttons.print.min.js";
import "datatables.net-buttons-dt/css/buttons.dataTables.min.css";
import "datatables.net";
import "datatables.net-buttons";

// pdfmake + Arabic font
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
import amiriFont from "../../assets/fonts/Amiri-Regular.base64";

pdfMake.vfs = {
  ...pdfFonts.vfs,
  "Amiri-Regular.ttf": amiriFont,
};

pdfMake.fonts = {
  ...pdfMake.fonts,
  Amiri: {
    normal: "Amiri-Regular.ttf",
    bold: "Amiri-Regular.ttf",
    italics: "Amiri-Regular.ttf",
    bolditalics: "Amiri-Regular.ttf",
  },
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).pdfMake = pdfMake;

const employee = [
  { label: "1", value: "ahmed ali" },
  { label: "2", value: "ali" },
  { label: "3", value: "mohamed" },
];

const rowsData = [
  { id: 1, lastName: "Snow", firstName: "علي", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "محمد", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "السيد", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ContractForm: React.FC = () => {
  const [contractStatus, setContractStatus] = useState("");
  const tableRef = useRef<HTMLTableElement | null>(null);

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (($.fn.DataTable as any).isDataTable(table)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ($(table) as any).DataTable().clear().destroy(true);
      }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ($(table) as any).DataTable({
        dom: "Bfrtip",
        buttons: [
          {
            extend: "excelHtml5",
            text: "📊 تصدير إلى Excel",
            className: "btn btn-success",
          },
          {
            extend: "pdfHtml5",
            text: "📄 تصدير إلى PDF",
            className: "btn btn-danger",
            customize: function (doc: TDocumentDefinitions) {
              if (!doc.defaultStyle) doc.defaultStyle = {};
              if (!doc.styles) doc.styles = {};

              doc.defaultStyle.font = "Amiri";
              doc.defaultStyle.alignment = "right";

              doc.styles.tableHeader = doc.styles.tableHeader || {};
              doc.styles.tableBodyOdd = doc.styles.tableBodyOdd || {};
              doc.styles.tableBodyEven = doc.styles.tableBodyEven || {};

              doc.styles.tableHeader.alignment = "right";
              doc.styles.tableBodyOdd.alignment = "right";
              doc.styles.tableBodyEven.alignment = "right";
            },
          },
        ],
        language: {
          url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/ar.json",
        },
      });
    } catch (err) {
      console.error("Error initializing DataTable", err);
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (($.fn.DataTable as any).isDataTable(table)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ($(table) as any).DataTable().destroy(true);
      }
    };
  }, []);

  const handleExportExcel = () => {
    const worksheet = xlsx.utils.json_to_sheet(rowsData);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "employees");
    const excelBuffer = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, "employees.xlsx");
  };

  return (
    <Box sx={{ p: 3, direction: "rtl", background: "#f9f9f9" }}>
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            بيانات عقود العمل مع الموظف
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Autocomplete
              fullWidth
              options={employee}
              getOptionLabel={(option) => option.value}
              renderInput={(params) => (
                <TextField {...params} label="اختر موظف" />
              )}
            />
            <FormControl fullWidth>
              <InputLabel>حاله العقد</InputLabel>
              <Select
                value={contractStatus}
                onChange={(e) => setContractStatus(e.target.value)}
              >
                <MenuItem value="ساري">ساري</MenuItem>
                <MenuItem value="منتهي">منتهي</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>

      <Button variant="contained" fullWidth sx={{ mb: 2 }}>
        عرض البيانات
      </Button>
      <Button variant="contained" sx={{ mb: 2 }} onClick={handleExportExcel}>
        تصدير إلى Excel (يدوي)
      </Button>

      <table
        ref={tableRef}
        id="contractsTable"
        className="display"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Full name</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
              <td>{`${row.firstName || ""} ${row.lastName || ""}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default ContractForm;
