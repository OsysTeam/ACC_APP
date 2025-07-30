import React, { useState, ReactNode } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  FaCog,
  FaUsers,
  FaBuilding,
  FaArchive,
  FaEnvelope,
  FaTasks,
  FaFileInvoiceDollar,
  FaCalculator,
  FaUserTie,
  FaPlusCircle,
  FaHome,
  FaExchangeAlt,
  FaUserShield,
  FaIdBadge,
  FaHandshake,
  FaUserPlus,
  FaListAlt,
  FaClipboardCheck,
  FaFileAlt,
  FaMoneyBillWave,
  FaFileUpload,
  FaFolderOpen,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  name: string;
  icon: ReactNode;
  path?: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { name: "لوحة التحكم", icon: <FaHome />, path: "/homeDashboard" },
  {
    name: "الإعدادات و الصلاحيات",
    icon: <FaCog />,
    subItems: [
      { name: "تعريف المكتب", icon: <FaBuilding />, path: "/officeDefinition" },
      {
        name: "اضافة فرع للمكتب",
        icon: <FaPlusCircle />,
        path: "/addbranchoff",
      },
      {
        name: "صلاحيات المستخدم",
        icon: <FaUserShield />,
        path: "/userpermission",
      },
    ],
  },
  {
    name: "الموارد البشرية",
    icon: <FaUsers />,
    subItems: [
      { name: "بيانات الموظفين", icon: <FaIdBadge />, path: "/employeeData" },
      {
        name: "تجديد عقود العمل",
        icon: <FaHandshake />,
        path: "/renewContracts",
      },
      {
        name: "حركة النقل بين الإدارات",
        icon: <FaExchangeAlt />,
        path: "/transferMovement",
      },
      {
        name: "جهات الحاق الموظف",
        icon: <FaUserTie />,
        path: "/employeeAttachments",
      },
    ],
  },
  {
    name: "بيانات الشركات",
    icon: <FaBuilding />,
    subItems: [
      {
        name: "إضافة شركة/عميل",
        icon: <FaPlusCircle />,
        path: "/addCompanyOrClient",
      },
      {
        name: "إضافة أعضاء مجلس إدارة",
        icon: <FaUsers />,
        path: "/addBoardMembers",
      },
      {
        name: "إضافة المساهمين",
        icon: <FaUserPlus />,
        path: "/addShareholders",
      },
      {
        name: "إضافة جمعية عمومية",
        icon: <FaListAlt />,
        path: "/addGeneralAssembly",
      },
      {
        name: "إضافة رأس مال للشركة",
        icon: <FaMoneyBillWave />,
        path: "/addCompanyCapital",
      },
      {
        name: "إضافة موظفين لدى الشركة",
        icon: <FaUserTie />,
        path: "/addCompanyEmployees",
      },
    ],
  },
  {
    name: "الأرشيف",
    icon: <FaArchive />,
    subItems: [
      {
        name: "أرشيف العملاء",
        icon: <FaFolderOpen />,
        path: "/clientsArchive",
      },
      { name: "أرشيف الوكلاء", icon: <FaFolderOpen />, path: "/agentsArchive" },
      { name: "أرشيف منتج", icon: <FaFolderOpen />, path: "/productsArchive" },
    ],
  },
  {
    name: "البريد (الوسيطه)",
    icon: <FaEnvelope />,
    subItems: [
      {
        name: "بريد الوسيطه Admin",
        icon: <FaEnvelope />,
        path: "/adminMailbox",
      },
      { name: "بريد Ahmed Daoud", icon: <FaEnvelope />, path: "/ahmedMailbox" },
    ],
  },
  {
    name: "المتابعة والمهام",
    icon: <FaTasks />,
    subItems: [
      {
        name: "توزيع المهام Admin",
        icon: <FaClipboardCheck />,
        path: "/tasksAdmin",
      },
      {
        name: "المهام الدورية Admin",
        icon: <FaClipboardCheck />,
        path: "/periodicTasks",
      },
      {
        name: "مهام: Ahmed Daoud",
        icon: <FaClipboardCheck />,
        path: "/ahmedTasks",
      },
    ],
  },
  {
    name: "الضرائب",
    icon: <FaFileInvoiceDollar />,
    subItems: [
      {
        name: "إضافة الموقف الضريبي",
        icon: <FaFileUpload />,
        path: "/addTaxFile",
      },
      { name: "عرض الموقف الضريبي", icon: <FaFileAlt />, path: "/viewTaxFile" },
    ],
  },
  {
    name: "الحسابات",
    icon: <FaCalculator />,
    subItems: [
      { name: "الإيرادات", icon: <FaMoneyBillWave />, path: "/revenues" },
      { name: "المصروفات", icon: <FaMoneyBillWave />, path: "/expenses" },
      { name: "مطالبات الشركات", icon: <FaFileAlt />, path: "/companyClaims" },
      {
        name: "حسابات الشركات",
        icon: <FaCalculator />,
        path: "/companyAccounts",
      },
    ],
  },
];

export default function SidebarMUI() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const location = useLocation();

  const handleToggle = (name: string) => {
    setOpenItem(openItem === name ? null : name);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        "& .MuiDrawer-paper": {
          width: 260,
          background: "linear-gradient(to bottom, #6a11cb, #2575fc)",
          color: "#fff",

          border: "none",
        },
      }}
    >
      <h3 style={{ textAlign: "center", padding: "1rem 0" }}>القائمة</h3>
      <List>
        {menuItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <ListItemButton
              onClick={() => item.subItems && handleToggle(item.name)}
              component={item.path ? Link : "div"}
              to={item.path || ""}
              selected={location.pathname === item.path}
              sx={{ color: "#fff" }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
              {item.subItems &&
                (openItem === item.name ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {item.subItems && (
              <Collapse
                in={openItem === item.name}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.subItems.map((sub, i) => (
                    <ListItemButton
                      key={i}
                      component={Link}
                      to={sub.path || ""}
                      selected={location.pathname === sub.path}
                      sx={{
                        pl: 4,
                        color: "#fff",
                        "&.Mui-selected": {
                          backgroundColor: "rgba(255,255,255,0.2)",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: "#fff" }}>
                        {sub.icon}
                      </ListItemIcon>
                      <ListItemText primary={sub.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
