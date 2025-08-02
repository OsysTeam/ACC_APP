// src/components/AddCompanyOrClient.tsx (الإصدار النهائي بالمحتوى الكامل والتخطيط الرأسي)

import { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Typography,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  FormControlLabel,
  IconButton,
  Button,
  InputLabel,
  AppBar,
  Toolbar,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // استخدام Grid v2
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import {
  Add,
  Delete,
  Edit,
  Save,
  Search,
  Print,
  Close,
} from "@mui/icons-material";
import { ar } from "date-fns/locale";

// --- 1. تعريف الثيم والألوان ---
const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#673ab7",
    },
    secondary: {
      main: "#2196f3",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  typography: {
    fontFamily: '"Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    button: { textTransform: "none" },
  },
});

// --- 2. البيانات والمكونات المساعدة ---
const clientRows = [
  { id: 1, name: "Ahmad Daoud" },
  { id: 2, name: "payTest Co" },
  { id: 3, name: "Withholding Test Co" },
  { id: 4, name: "RM Co" },
  { id: 5, name: "Withholding Test Co ACA" },
  { id: 6, name: "FlowLogic" },
];
const clientColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
  },
];

// مكون رأس القسم
const SectionHeader = ({ title }: { title: string }) => (
  <Box
    sx={{
      bgcolor: "#e3f2fd",
      p: 1,
      mb: 2,
      borderRight: "4px solid",
      borderColor: "primary.main",
    }}
  >
    <Typography variant="subtitle2" fontWeight="bold" color="primary.dark">
      {title}
    </Typography>
  </Box>
);
interface DatepickerWCProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
}

const DatePickerWithClear: React.FC<DatepickerWCProps> = ({
  value,
  onChange,
  label,
}) => (
  <Box sx={{ display: "felx", alignItems: "center", gap: 0.5 }}>
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      sx={{
        width: "100%",
        direction: " rtl",
      }}
      slotProps={{
        textField: {
          size: "small",
          placeholder: "DD/MM/YYYY",
        },
      }}
    />

    {/* <IconButton
      size="small"
      sx={{ color: "error.main" }}
      onClick={() => onChange(null)}
    >
      <Close />
    </IconButton> */}
  </Box>
);

// --- 3. المكون الرئيسي للتطبيق ---
const AddCompanyOrClient: React.FC = () => {
  const [selectedTreeItems, setSelectedTreeItems] = useState<string[]>([
    "bookkeeping",
    "quarterly",
    "auditing",
    "accounts",
  ]);

  const handleTreeSelectToggle = (itemId: string) => {
    setSelectedTreeItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderTreeItem = (
    label: string,
    itemId: string,
    children?: React.ReactNode
  ) => {
    const isChecked = selectedTreeItems.includes(itemId);
    return (
      <TreeItem
        itemId={itemId}
        label={
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={() => handleTreeSelectToggle(itemId)}
                size="small"
              />
            }
            label={<Typography variant="body2">{label}</Typography>}
            sx={{ m: 0, width: "100%" }}
          />
        }
      >
        {children}
      </TreeItem>
    );
  };

  const renderParentTreeItem = (
    label: string,
    itemId: string,
    children?: React.ReactNode
  ) => {
    const isChecked = selectedTreeItems.includes(itemId);
    return (
      <TreeItem
        itemId={itemId}
        label={
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={() => handleTreeSelectToggle(itemId)}
                size="small"
              />
            }
            label={
              <Typography variant="body2" fontWeight="bold">
                {label}
              </Typography>
            }
            sx={{ m: 0, width: "100%" }}
          />
        }
      >
        {children}
      </TreeItem>
    );
  };
  const [activityStartDate, setActivityStartDate] = useState<Date | null>(null);
  const [taxCardStartDate, setTaxCardStartDate] = useState<Date | null>(null);
  const [taxCardEndDate, setTaxCardEndDate] = useState<Date | null>(null);
  const [vatCertEndDate, setVatCertEndDate] = useState<Date | null>(null);
  const [commercialRegEndDate, setCommercialRegEndDate] = useState<Date | null>(
    null
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ar}>
        <Box>
          <AppBar
            position="static"
            color="default"
            elevation={2}
            sx={{ mb: 2 }}
          >
            <Toolbar variant="dense">
              <Button startIcon={<Add />}>جديد</Button>
              <Button startIcon={<Save />}>حفظ</Button>
              <Button startIcon={<Edit />}>تعديل</Button>
              <Button startIcon={<Delete />}>حذف</Button>
              <Box sx={{ flexGrow: 1 }} />
              <Button startIcon={<Search />}>بحث</Button>
              <Button startIcon={<Print />}>طباعة</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* --- ✅ الصندوق الأول: بيانات العملاء --- */}

          <Paper sx={{ p: 2, mb: 2 }} variant="outlined">
            <SectionHeader title=" بيانات العملاء" />
            {/* ✅ رأس القسم بالتصميم الجديد */}

            <Grid container spacing={3}>
              {/* --- صفوف علوية بعرض كامل --- */}
              <Grid size={{ xs: 12 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <TextField label="كود الشركة" size="small" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <TextField select label="التصنيف" size="small" fullWidth>
                      <MenuItem value="استشارات"> استشارات</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <TextField
                      select
                      label="الحالة"
                      defaultValue="active"
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="active">Active</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <TextField
                      select
                      label="سنه"
                      defaultValue="2025"
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="2025">2025</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField label="اسم الشركة" size="small" fullWidth />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="عنوان الشركة والفروع"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      label="السمة التجارية / نشاط الشركة"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField label="كود النشاط" size="small" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      select
                      label="الكيان القانوني"
                      defaultValue=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="فردي">فردي</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      select
                      label="الشركة تابعه لقانون"
                      defaultValue=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="">-</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      select
                      label="مأمورية الضرائب"
                      defaultValue=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="">-</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      label="رقم التسجيل الضريبي"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      label="رقم السجل التجاري"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      label="رقم الملف الضريبي"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    size={{ xs: 6, sm: 4 }}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant="body1" color="initial" noWrap>
                      تاريخ بداية البطاقة الضريبية
                    </Typography>
                    <DatePickerWithClear
                      value={taxCardStartDate}
                      onChange={setTaxCardStartDate}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* --- ✅ بداية التخطيط من عمودين --- */}

              {/* --- العمود الأيمن --- */}
              <Grid size={{ xs: 12 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 8 }}>
                    <Grid size={{ xs: 6, sm: 6 }}>
                      <FormControlLabel
                        labelPlacement="start"
                        control={<Checkbox />}
                        label="مشترك ضريبة القيمة المضافة"
                        sx={{ mr: 10 }}
                      />
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body1" color="initial" noWrap>
                        تاريخ انتهاء شهادة ف.م
                      </Typography>
                      <DatePickerWithClear
                        value={taxCardStartDate}
                        onChange={setTaxCardStartDate}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* --- العمود الأيسر --- */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2} rowSpacing={3}>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <DatePickerWithClear
                      label="تاريخ بدء النشاط *"
                      value={activityStartDate}
                      onChange={setActivityStartDate}
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <DatePickerWithClear
                      label="تاريخ نهاية البطاقة الضريبية *"
                      value={taxCardEndDate}
                      onChange={setTaxCardEndDate}
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <DatePickerWithClear
                      label="تاريخ انتهاء السجل التجاري *"
                      value={commercialRegEndDate}
                      onChange={setCommercialRegEndDate}
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      select
                      label="الشركة تابعة لمجموعة شركات"
                      defaultValue=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="">...</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>

              {/* --- حقول سفلية بعرض كامل --- */}
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="من له حق التوقيع في الشركة"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  label="ملاحظات / تفاصيل أخرى"
                  multiline
                  rows={3}
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
          </Paper>

          {/* --- ✅ الصندوق الثاني: طبيعة الأعمال --- */}
          <Paper sx={{ p: 2, mb: 2, width: "70rem" }} variant="outlined">
            <SectionHeader title="طبيعة الأعمال" />
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              fullWidth
              sx={{ mb: 2 }}
            >
              ADD OR REMOVE
            </Button>
            <SimpleTreeView multiSelect>
              {renderParentTreeItem(
                "خدمات المكتب",
                "services-root",
                renderParentTreeItem(
                  "المراجعة",
                  "auditing",
                  <>
                    {renderTreeItem("قوائم ربع سنوية", "quarterly")}
                    {renderTreeItem("قوائم مالية ومراجعة سنوية", "annual")}
                    {renderTreeItem("مراجعة دورية", "periodic")}
                    {renderTreeItem("مراجعة شهرية", "monthly")}
                  </>
                )
              )}
              {renderParentTreeItem(
                "الحسابات",
                "accounts-root",
                renderTreeItem("إمساك الدفاتر اليومية", "bookkeeping")
              )}
            </SimpleTreeView>
          </Paper>
          {/* --- ✅ الصندوق الثالث: عرض العملاء --- */}
          {/* <Paper
            sx={{ display: "flex", flexDirection: "column" }}
            variant="outlined"></Paper> */}
          <Paper sx={{ p: 2, mb: 2, width: "85rem" }} variant="outlined">
            <SectionHeader title="عرض العملاء " />
            <Box sx={{ p: 1, borderBottom: 1, borderColor: "divider" }}>
              <Grid container spacing={1} alignItems="center">
                <Grid size={{ xs: 2 }}>
                  <Typography variant="body2">عرض</Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Select defaultValue="active" size="small" fullWidth>
                    <MenuItem value="active">عرض عملاء الـ Active</MenuItem>
                  </Select>
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                  >
                    بحث
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <DataGrid
                rows={clientRows}
                columns={clientColumns}
                hideFooter
                density="compact"
              />
            </Box>
          </Paper>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default AddCompanyOrClient;
