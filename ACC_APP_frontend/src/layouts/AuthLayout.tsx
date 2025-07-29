import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/sidebar"; // هنعمله كمان شوية
import { Outlet } from "react-router-dom";
import "./AuthLayout.css";

const AuthLayout: React.FC = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-wrapper">
        <Navbar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;