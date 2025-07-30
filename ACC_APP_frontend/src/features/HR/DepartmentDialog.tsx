import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// نوع البيانات للعرض في الجدول
type Department = {
  id: number;
  name: string;
};

// بيانات افتراضية (يمكنك جلبها من API لاحقاً)
const departments: Department[] = [
  { id: 1, name: "مجلس الادارة" },
  { id: 2, name: "الادارة المالية" },
  { id: 3, name: "الموارد البشرية" },
  { id: 4, name: "السكرتارية" },
  { id: 5, name: "المراجعة" },
  { id: 6, name: "الضرائب" },
  { id: 7, name: "الشئون القانونية" },
  { id: 8, name: "تكنولوجيا المعلومات IT" },
  { id: 9, name: "الخدمات" },
];

// الخصائص التي سيستقبلها المكون
interface DepartmentDialogProps {
  open: boolean;
  onClose: () => void;
  onSelect: (department: Department | null) => void;
}

export const DepartmentDialog: React.FC<DepartmentDialogProps> = ({ open, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // فلترة البيانات بناءً على البحث
  const filteredDepartments = useMemo(() => {
    if (!searchTerm) return departments;
    return departments.filter(dep =>
      dep.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  
  const handleSelectAndClose = () => {
    const selectedDepartment = departments.find(dep => dep.id === selectedId);
    onSelect(selectedDepartment || null);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" dir="rtl">
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        القسم / الادارة
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
                label="بحث..."
                variant="outlined"
                size="small"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* يمكنك إضافة أزرار جديد/تعديل/حذف هنا */}
        </Box>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="departments table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>الكود</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>الاسم</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredDepartments.map((row) => (
                <TableRow
                  hover
                  key={row.id}
                  onClick={() => setSelectedId(row.id)}
                  selected={selectedId === row.id}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions sx={{ p: '16px' }}>
        <Button onClick={onClose}>إلغاء</Button>
        <Button onClick={handleSelectAndClose} variant="contained" disabled={!selectedId}>
          اختيار
        </Button>
      </DialogActions>
    </Dialog>
  );
};