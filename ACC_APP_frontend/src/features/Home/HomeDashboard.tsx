import React from "react";
import StatCard from "../../components/common/StatCard";
import { FaUsers, FaTasks, FaCheckCircle, FaBell } from "react-icons/fa";
import "./HomeDashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-wrapper">
      <h1>لوحة التحكم</h1>
     <div className="stat-card-grid">
  <StatCard
    icon={<FaUsers />}
    label="عدد المستخدمين"
    value="1200"
    color="#28a745"
  />
  <StatCard
    icon={<FaTasks />}
    label="عدد المهام"
    value="76"
    color="#fd7e14"
  />
  <StatCard
    icon={<FaCheckCircle />}
    label="المهام المنجزة"
    value="127"
    color="#e83e8c"
  />
  <StatCard
    icon={<FaBell />}
    label="التنبيهات"
    value="9"
    color="#3399ff"
  />
</div>

    </div>
  );
};

export default Dashboard;
