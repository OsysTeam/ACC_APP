import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import type { ColumnDef } from "@tanstack/react-table";

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
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
} from "@mui/material";

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

const columnsDef: ColumnDef<any>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "age", header: "Age" },
  {
    id: "fullName",
    header: "Full Name",
    cell: (info) =>
      `${info.row.original.firstName || ""} ${
        info.row.original.lastName || ""
      }`,
  },
];

const ContractForm: React.FC = () => {
  const [contractStatus, setContractStatus] = useState("");

  const table = useReactTable({
    data: rowsData,
    columns: columnsDef,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

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
        تصدير إلى Excel
      </Button>

      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            count={rowsData.length}
            rowsPerPage={table.getState().pagination.pageSize}
            page={table.getState().pagination.pageIndex}
            onPageChange={(e, newPage) => table.setPageIndex(newPage)}
            onRowsPerPageChange={(e) =>
              table.setPageSize(Number(e.target.value))
            }
          />
        </TableRow>
      </TableFooter>
    </Box>
  );
};

export default ContractForm;
