import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index copy.css";
// import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import Router from "./app/router/router.tsx";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
