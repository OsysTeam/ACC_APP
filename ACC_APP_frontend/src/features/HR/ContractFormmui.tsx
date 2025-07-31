import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
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

const employee = [
  { label: "1", value: "ahmed ali" },
  { label: "2", value: "ali" },
  { label: "3", value: "mohamed" },
];
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ContractForm: React.FC = () => {
  const [contractStatus, setContractStatus] = useState("");
  const handleExportExcel = () => {
    const worksheet = xlsx.utils.json_to_sheet(rows);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "employees");
    const excelBuffer = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
    saveAs(file, "employees.xlsx");
  };
  return (
    <Box
      sx={{ p: 3, direction: "rtl", background: "#f9f9f9", minHeight: "auto" }}
    >
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            بيانات عقود العمل مع الموظف
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Autocomplete
              // sx={{ width: "20rem" }}
              fullWidth
              options={employee}
              getOptionLabel={(option) => option.value}
              renderInput={(params) => (
                <TextField {...params} label="اختر موظف" />
              )}
              onChange={(event, newValue) => {
                console.log("d", newValue);
              }}
            />
            <FormControl fullWidth>
              <InputLabel>حاله العقد</InputLabel>
              <Select
                label="حاله العقد"
                value={contractStatus}
                onChange={(e) => setContractStatus(e.target.value)}
              >
                <MenuItem value="ساري">ساري</MenuItem>
                <MenuItem value="متهي">منتهي</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",

              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ whiteSpace: "nowrap" }} color="initial">
              فترة العقد
            </Typography>
            <TextField
              label="من"
              type="date"
              className="grow"
              variant="outlined"
              sx={{
                width: "14rem",
              }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="الى"
              type="date"
              className="grow"
              variant="outlined"
              sx={{
                width: "14rem",
              }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="ملاحظات"
              multiline
              maxRows={2}
              className="grow"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </CardContent>
      </Card>
      <Button variant="contained" fullWidth sx={{ mb: 2 }}>
        عرض البيانات
      </Button>
      <Button variant="contained" sx={{ mb: 2 }} onClick={handleExportExcel}>
        تصدير إلى Excel
      </Button>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default ContractForm;
