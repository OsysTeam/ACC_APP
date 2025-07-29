import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaTasks, FaUsers, FaCog, FaBell } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>القائمة</h3>
      <ul className="sidebar-menu">
        <li><Link to="/homeDashboard"><FaHome /> لوحة التحكم</Link></li>
        <li><Link to="/reports"><FaChartBar /> التقارير</Link></li>
        <li><Link to="/tasks"><FaTasks /> المهام</Link></li>
        <li><Link to="/users"><FaUsers /> الموظفين</Link></li>
        <li><Link to="/notifications"><FaBell /> التنبيهات</Link></li>
        <li><Link to="/settings"><FaCog /> الإعدادات</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
