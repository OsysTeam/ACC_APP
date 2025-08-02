import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index copy.css";
// import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import Router from "./app/router/router.tsx";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

import ReactDOM from "react-dom/client";

// --- استيراد المكونات المطلوبة ---
// 1. مزود الثيم من Material-UI ومكون توحيد الـ CSS
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.ts"; // تأكد من أن لديك ملف theme.ts

// 2. مزود اللغة والتقويم لمكونات التاريخ
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ar } from "date-fns/locale"; // لاستخدام اللغة العربية في التقويم

// 3. المكون الرئيسي الذي يحتوي على مسارات تطبيقك

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    {/* الخطوة 1: تغليف كل شيء بالـ ThemeProvider الخاص بـ MUI */}
    <ThemeProvider theme={theme}>
      {/* الخطوة 2: تغليف كل شيء بالـ LocalizationProvider الخاص بمكونات التاريخ */}
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ar}>
        {/* CssBaseline يوحد الستايل الأساسي للمتصفحات المختلفة */}
        <CssBaseline />

        {/* BrowserRouter الخاص بـ React Router يبقى كما هو */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);
