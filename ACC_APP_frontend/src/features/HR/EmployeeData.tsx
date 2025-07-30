import React, { useState, ReactNode } from 'react';
import {
  Box,
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  AppBar,
  Toolbar,
  type SelectChangeEvent,
} from '@mui/material';

// مكونات الشجرة من MUI v8
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

// أيقونات
import SaveIcon from '@mui/icons-material/Save';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

import './EmployeeData.css';
import { DepartmentDialog } from './DepartmentDialog';
// نوع بيانات الشجرة
type TreeNode = {
  id: string;
  label: string;
  icon?: ReactNode;
  children?: TreeNode[];
};

// بيانات الشجرة
const treeData: TreeNode[] = [
  {
    id: "1",
    label: "مدينة نصر",
    icon: <CorporateFareIcon color="action" />,
    children: [
      {
        id: "2",
        label: "السكرتارية",
        children: [
          { id: "3", label: "khaled", icon: <AccountCircleIcon color="primary" /> },
          { id: "4", label: "Ahmed", icon: <AccountCircleIcon color="primary" /> }
        ]
      }
    ]
  },
  {
    id: "5",
    label: "مجلس الادارة",
    icon: <CorporateFareIcon color="action" />,
    children: [
      { id: "6", label: "Mohamed H", icon: <AccountCircleIcon color="primary" /> }
    ]
  }
];

// كومبوننت عرض الشجرة
const EmployeeTree = () => {
  const renderTree = (node: TreeNode) => (
    <TreeItem
      key={node.id}
      itemId={node.id}
      label={
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          {node.icon}
          {node.label}
        </span>
      }
    >
      {node.children && node.children.map((child) => renderTree(child))}
    </TreeItem>
  );

  return (
    <SimpleTreeView
      aria-label="employee tree"
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        direction: 'rtl',
        '& .MuiTreeItem-label': { fontSize: '0.9rem' },
      }}
    >
      {treeData.map((node) => renderTree(node))}
    </SimpleTreeView>
  );
};

const EmployeeData: React.FC = () => {
   const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [profileImg, setProfileImg] = useState<string | null>(null);
const genderRef = React.useRef<HTMLDivElement>(null);
  const handleProgImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfileImg(URL.createObjectURL(file));
    }
  };

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted!");
    // هنا تقدر تضيف حفظ البيانات أو أي أكشن آخر
  };
  const moveToNextElement = (form: HTMLFormElement, current: HTMLElement) => {
  const elements = Array.from(form.elements).filter(
    (el) =>
      el instanceof HTMLElement &&
      !el.hasAttribute("disabled") &&
      ["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(el.tagName)
  ) as HTMLElement[];

  const index = elements.indexOf(current);
  if (index > -1 && index + 1 < elements.length) {
    elements[index + 1].focus();
  }
};

const handleFormEnterNavigation = (e: React.KeyboardEvent<HTMLFormElement>) => {
  if (e.key === "Enter") {
    const target = e.target as HTMLElement;

    // لو Select (MUI) → افتح القائمة فقط
    if (
      target.getAttribute("role") === "button" &&


      target.classList.contains("MuiSelect-select")
    ) {
      return;
    }

if (target.tagName === "BUTTON") {
  const btn = target as HTMLButtonElement;
  if (btn.type === "submit") {
    return; // يسمح بالـ submit
  }
  e.preventDefault();
  btn.click(); // ينفذ المهمة
  moveToNextElement(e.currentTarget as HTMLFormElement, target);
  return;
}

    // باقي الحقول → انتقل للعنصر التالي
    e.preventDefault();
    moveToNextElement(e.currentTarget as HTMLFormElement, target);
  }
};

  return (
    <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh', direction: 'rtl' }}>
      {/* الشريط العلوي */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            إدارة الموظفين
          </Typography>
          <Button color="inherit" startIcon={<AddIcon />}>جديد</Button>
          <Button color="inherit" startIcon={<EditIcon />}>تعديل</Button>
          <Button color="inherit" startIcon={<DeleteIcon />}>حذف</Button>
          <Button color="inherit" startIcon={<SearchIcon />}>بحث</Button>
        </Toolbar>
      </AppBar>

      {/* المحتوى الرئيسي */}
      <div className="page-container">
        {/* العمود الأيمن */}
      

        {/* العمود الأيسر */}
        <div className="left-column">
          <Card variant="outlined">
            <CardHeader title="بيانات الموظف" />
            <Divider />
          <form onKeyDown={handleFormEnterNavigation}
  onSubmit={handleSubmit}
>

              <CardContent>
                <div className="form-container">
                  <div className="form-row">
                    <TextField variant="outlined" label="كود الموظف" required className="grow" />
                    <TextField variant="outlined" label="اسم الموظف" required className="grow" />
                  </div>
                  <div className="form-row">
                    <TextField variant="outlined" label="الرقم القومي" className="grow" />
                    <TextField variant="outlined" label="العنوان" className="grow" />
                  </div>
                  <div className="form-row">
                    <TextField variant="outlined" label="موبايل ١" className="grow" />
                    <TextField variant="outlined" label="موبايل ٢" className="grow" />
                    <TextField variant="outlined" label="تاريخ الميلاد" type="date" InputLabelProps={{ shrink: true }} className="grow" />
                  </div>
                  <div className="form-row">
                    <FormControl variant="outlined" className="grow">
                      <InputLabel>الحالة الاجتماعية</InputLabel>
                      <Select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} label="الحالة الاجتماعية">
                        <MenuItem value="single">أعزب</MenuItem>
                        <MenuItem value="married">متزوج</MenuItem>
                      </Select>
                    </FormControl>
           <FormControl className="grow">
  <InputLabel>النوع</InputLabel>
  <Select
    value={gender}
    onChange={(e) => {
      setGender(e.target.value);
      // // بعد الاختيار روح للعنصر اللي بعده
      // const form = document.querySelector("form") as HTMLFormElement;
      // const elements = Array.from(form.elements) as HTMLElement[];
      // const index = elements.indexOf(e.target as HTMLElement);
      // if (index > -1 && index + 1 < elements.length) {
      //   elements[index + 1].focus();
      // }
    }}
  >
    <MenuItem value="male">ذكر</MenuItem>
    <MenuItem value="female">أنثى</MenuItem>
  </Select>
</FormControl>



                    <TextField variant="outlined" label="المؤهل" className="grow" />
                  </div>
                  <div className="form-row">
                    <TextField variant='outlined' label="الرقم التاميني" className='grow' />
                    <TextField variant='outlined' label="الوظيفة" className='grow' />
                    <FormControl variant="outlined" className="grow">
                      <InputLabel>الوصف الوظيفي</InputLabel>
                      <Select value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} label="الوصف الوظيفي">
                        <MenuItem value="manager">مدير</MenuItem>
                        <MenuItem value="accountant">محاسب</MenuItem>
                      </Select>
                    </FormControl>
                    <Button variant="contained" color="secondary"
                     onClick={() => setIsDialogOpen(true)}
                    >Add</Button>
                    <TextField variant='outlined' label="تاريخ بداية العمل" type='date'
                      InputLabelProps={{ shrink: true }} className='grow' />
                  </div>
                  <div className="form-row">
                    <TextField variant='outlined' label="ملاحظات" className='grow' multiline maxRows={3} />
                    <Box
                      component="img"
                      src={profileImg || ''}
                      alt="صورة الموظف"
                      sx={{
                        mt: 1,
                        width: 120,
                        height: 120,
                        borderRadius: '8px',
                        objectFit: 'cover',
                        border: '1px solid #ccc',
                        backgroundColor: '#f9f9f9'
                      }}
                    />
                    <Button
                          variant="contained"
                          type="button"
                          onClick={() => document.getElementById("profileUpload")?.click()}
                        >
                          إختر الصورة الشخصية
                        </Button>

                        <input
                          id="profileUpload"
                          type="file"
                          hidden
                          accept="image/*"
                          onChange={handleProgImgChange}
                        />
                  </div>
                </div>
              </CardContent>
              <Divider />
            <CardActions sx={{ p: 2, justifyContent: 'center' }}>
  <Button
    type="submit"
    variant="contained"
    size="large"
    startIcon={<SaveIcon />}
    className="save-button"
  >
    حفظ البيانات
  </Button>
</CardActions>

            </form>
          </Card>
        </div> 
         <div className="right-column">
          <Card variant="outlined" className='rigth-card'>
            <CardHeader title="أسماء الموظفين" />
            <Divider />
            <CardContent>
              <EmployeeTree />
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ mt: 2 }}>
            <CardContent>
              <Button variant="contained" fullWidth size="large">التقارير</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <DepartmentDialog  open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSelect={(department) => {
          if (department) {
            console.log("تم اختيار القسم:", department.name);
            // تحديث قيمة حقل الوصف الوظيفي
            setJobDescription(department.name);
          }
          setIsDialogOpen(false);
        }} />
    </Box>
  );
};

export default EmployeeData;
