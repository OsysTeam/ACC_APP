import React, { useState ,ReactNode} from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaCog, FaUsers, FaBuilding, FaArchive, FaEnvelope, FaTasks, 
  FaFileInvoiceDollar, FaCalculator, FaUserTie, FaPlusCircle, FaHome,FaExchangeAlt,FaChevronDown,
  FaUserShield, FaIdBadge, FaHandshake, FaUserPlus, FaListAlt, 
  FaClipboardCheck, FaFileAlt, FaMoneyBillWave, FaFileUpload, FaFolderOpen 
} from "react-icons/fa";

import "./Sidebar.css";

// واجهة لنوع بيانات عناصر القائمة
interface MenuItem {
  path: string;
  name: string;
  icon: ReactNode;
  subItems?: MenuItem[]; // العناصر الفرعية اختيارية
}

// تعريف بنية القائمة مع العناصر الفرعية
const menuItems: MenuItem[] = [
  { path: "/homeDashboard", name: "لوحة التحكم", icon: <FaHome /> },
  // { path: "/reports", name: "التقارير", icon: <FaChartBar /> },
  // {
  //   path: "", // المسار الرئيسي للمهام
  //   name: "المهام",
  //   icon: <FaTasks />,
  //   subItems: [
  //     { path: "/tasks", name: "مهمة 1", icon: <></> }, // أزل الأيقونة أو أضف أيقونة نقطية
  //     { path: "/tasks", name: "مهمة 2", icon: <></> },
  //   ],
  // },
    // { path: "/notifications", name: "التنبيهات", icon: <FaBell /> },
  {
  path: "",
  name: "الإعدادات و الصلاحيات",
  icon: <FaCog />,
  subItems: [
    { path: "/officeDefinition", name: "تعريف المكتب", icon: <FaBuilding /> },
    { path: "/addbranchoff", name: "اضافة فرع للمكتب", icon: <FaPlusCircle /> },
    { path: "/userpermission", name: "صلاحيات المستخدم", icon: <FaUserShield /> },
  ]
},
{
  path: "",
  name: "الموارد البشرية",
  icon: <FaUsers />,
  subItems: [
    { path: "/employeeData", name: "بيانات الموظفين", icon: <FaIdBadge /> },
    { path: "/renewContracts", name: "تجديد عقود العمل", icon: <FaHandshake /> },
    { path: "/transferMovement", name: "حركة النقل بين الإدارات", icon: <FaExchangeAlt /> },
    { path: "/employeeAttachments", name: "جهات الحاق الموظف", icon: <FaUserTie /> },
  ]
},
{
  path: "",
  name: "بيانات الشركات",
  icon: <FaBuilding />,
  subItems: [
    { path: "/addCompanyOrClient", name: "إضافة شركة/عميل", icon: <FaPlusCircle /> },
    { path: "/addBoardMembers", name: "إضافة أعضاء مجلس إدارة", icon: <FaUsers /> },
    { path: "/addShareholders", name: "إضافة المساهمين", icon: <FaUserPlus /> },
    { path: "/addGeneralAssembly", name: "إضافة جمعية عمومية", icon: <FaListAlt /> },
    { path: "/addCompanyCapital", name: "إضافة رأس مال للشركة", icon: <FaMoneyBillWave /> },
    { path: "/addCompanyEmployees", name: "إضافة موظفين لدى الشركة", icon: <FaUserTie /> },
  ]
},
{
  path: "",
  name: "الأرشيف",
  icon: <FaArchive />,
  subItems: [
    { path: "/clientsArchive", name: "أرشيف العملاء", icon: <FaFolderOpen /> },
    { path: "/agentsArchive", name: "أرشيف الوكلاء", icon: <FaFolderOpen /> },
    { path: "/productsArchive", name: "أرشيف منتج", icon: <FaFolderOpen /> },
  ]
},
{
  path: "",
  name: "البريد (الوسيطه)",
  icon: <FaEnvelope />,
  subItems: [
    { path: "/adminMailbox", name: "بريد الوسيطه Admin", icon: <FaEnvelope /> },
    { path: "/ahmedMailbox", name: "بريد Ahmed Daoud", icon: <FaEnvelope /> },
  ]
},
{
  path: "",
  name: "المتابعة والمهام",
  icon: <FaTasks />,
  subItems: [
    { path: "/tasksAdmin", name: "توزيع المهام Admin", icon: <FaClipboardCheck /> },
    { path: "/periodicTasks", name: "المهام الدورية Admin", icon: <FaClipboardCheck /> },
    { path: "/ahmedTasks", name: "مهام: Ahmed Daoud", icon: <FaClipboardCheck /> },
  ]
},
{
  path: "",
  name: "الضرائب",
  icon: <FaFileInvoiceDollar />,
  subItems: [
    { path: "/addTaxFile", name: "إضافة الموقف الضريبي", icon: <FaFileUpload /> },
    { path: "/viewTaxFile", name: "عرض الموقف الضريبي", icon: <FaFileAlt /> },
  ]
},
{
  path: "",
  name: "الحسابات",
  icon: <FaCalculator />,
  subItems: [
    { path: "/revenues", name: "الإيرادات", icon: <FaMoneyBillWave /> },
    { path: "/expenses", name: "المصروفات", icon: <FaMoneyBillWave /> },
    { path: "/companyClaims", name: "مطالبات الشركات", icon: <FaFileAlt /> },
    { path: "/companyAccounts", name: "حسابات الشركات", icon: <FaCalculator /> },
  ]
}

];

const Sidebar: React.FC = () => {
  // تتبع العنصر المفتوح حاليًا، يمكن أن يكون سلسلة نصية (اسم العنصر) أو null
  const [openItem, setOpenItem] = useState<string | null>("المهام");
  const location = useLocation(); // لتحديد الرابط النشط

  // دالة لتبديل القائمة المفتوحة
  const handleItemClick = (itemName: string) => {
    // إذا كان العنصر المفتوح هو نفسه الذي تم النقر عليه، أغلقه
    // وإلا، افتح العنصر الجديد
    setOpenItem(openItem === itemName ? null : itemName);
  };

  return (
    <div className="sidebar">
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>القائمة</h3>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className={item.subItems ? "has-submenu" : ""}>
            {item.subItems ? (
              // إذا كان هناك قائمة فرعية، اجعل العنصر قابلاً للنقر لفتحها
              <div
                className={`menu-item ${openItem === item.name ? "open" : ""}`}
                onClick={() => handleItemClick(item.name)}
              >
                <div className="menu-item-content">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <FaChevronDown className="chevron-icon" />
              </div>
            ) : (
              // إذا لم يكن هناك قائمة فرعية، استخدم Link مباشرة
              <Link to={item.path} className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}>
                 <div className="menu-item-content">
                    {item.icon}
                    <span>{item.name}</span>
                 </div>
              </Link>
            )}

            {/* عرض القائمة الفرعية إذا كانت موجودة والعنصر الرئيسي مفتوح */}
            {item.subItems && openItem === item.name && (
              <ul className="submenu">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subItem.path} className={location.pathname === subItem.path ? 'active' : ''}>
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;