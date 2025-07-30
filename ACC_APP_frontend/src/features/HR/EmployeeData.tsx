import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// --- التغيير هنا: استيراد الأيقونات من react-icons/fa ---
import { FaPlus, FaEdit, FaTrash, FaSearch, FaSave } from 'react-icons/fa';


const EmployeeData: React.FC = () => {
  // إدارة القيم للحفاظ على الـ Select و TextField
  const [maritalStatus, setMaritalStatus] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* الشريط العلوي */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            إدارة الموظفين
          </Typography>
          <Button color="inherit" startIcon={<FaPlus />}>جديد</Button>
          <Button color="inherit" startIcon={<FaEdit />}>تعديل</Button>
          <Button color="inherit" startIcon={<FaTrash />}>حذف</Button>
          <Button color="inherit" startIcon={<FaSearch />}>بحث</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{ p: 2 }}>
        {/* القائمة اليمنى */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>أسماء الموظفين</Typography>
              <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <nav aria-label="employee list">
                  <List>
                    <ListItemButton selected>
                      <ListItemText primary="الموظفين فى فروع المكتب" />
                    </ListItemButton>
                    <Divider />
                  </List>
                </nav>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Button variant="contained" color="primary" fullWidth>التقارير</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* البيانات اليسرى */}
        <Grid item xs={12} md={9}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>بيانات الموظف</Typography>
              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField required label="كود الموظف" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField required label="اسم الموظف" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="الرقم القومي" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="رقم الجواز" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="موبايل ١" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="موبايل ٢" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="تاريخ الميلاد" type="date" fullWidth InputLabelProps={{ shrink: true }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>الحالة الاجتماعية</InputLabel>
                      <Select
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                        label="الحالة الاجتماعية"
                      >
                        <MenuItem value=""><em>-- اختر --</em></MenuItem>
                        <MenuItem value="single">أعزب</MenuItem>
                        <MenuItem value="married">متزوج</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="المؤهل" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button variant="outlined" fullWidth sx={{ height: '100%' }}>عرض بيانات النقل</Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button variant="outlined" fullWidth sx={{ height: '100%' }}>عرض بيانات التعاقد</Button>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <FormControl fullWidth>
                      <InputLabel>الوصف الوظيفي</InputLabel>
                      <Select
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        label="الوصف الوظيفي"
                      >
                        <MenuItem value=""><em>-- اختر --</em></MenuItem>
                        <MenuItem value="manager">مدير</MenuItem>
                        <MenuItem value="accountant">محاسب</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button variant="contained" color="secondary" fullWidth sx={{ height: '100%' }}>ADD</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" component="label">
                      إختر الصورة الشخصية
                      <input type="file" hidden />
                    </Button>
                  </Grid>
                </Grid>

                {/* زر الحفظ */}
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="contained" color="primary" size="large" startIcon={<FaSave />}>
                    حفظ البيانات
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeData;