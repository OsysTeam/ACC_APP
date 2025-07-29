// import React from "react";
// import "./Navbar.css";
// import { FaBell, FaBuilding } from "react-icons/fa";
// import { IoMdInformationCircle } from "react-icons/io";

// const Navbar: React.FC = () => {
//   return (
//     <div className="navbar">
//       {/* اليسار */}
//       <div className="navbar-left">
//         <div className="notification">
//           <FaBell />
//           <span className="badge">3</span>
//         </div>
//         <div className="user-info">
//           <IoMdInformationCircle className="status-icon" />
//           <span>أحمد محمد</span>
//         </div>
//       </div>

//       {/* الوسط - عنوان النظام */}
//       <div className="navbar-center">
//         <FaBuilding style={{ marginBottom: 4 }} />
//         <div className="system-title">نظام إدارة المكاتب الخدمية</div>
//         <span className="system-subtitle">محاماة - معاملات - استشارات</span>
//       </div>

//       {/* مسافة يمين لعمل التوازن */}
//       <div className="navbar-right" />
//     </div>
//   );
// };

// export default Navbar;
// Navbar.tsx

// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar">
//       {/* القسم الأيمن: يظهر على اليمين بسبب direction: rtl */}
//       <div className="navbar-right">
//         <FaBuilding size={24} />
//         <div className="system-title">
//           <h1>نظام إدارة المكاتب الخدمية</h1>
//           <span>محاماة - معاملات - استشارات</span>
//         </div>
//       <div className="navbar-left">
//         <div className="notification">
//           <FaBell />
//           <span className="badge">3</span>
//         </div>
//         <div className="user-info">
//           <span>أحمد محمد</span>
//         </div>
//       </div>
//     </nav>
  
//   );
// };



// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar">
//       {/* القسم الأيسر يوضع أولاً في الكود */}
//       <div className="navbar-left">
//         <div className="user-info">
//           <span>أحمد محمد</span>
//         </div>
//         <div className="notification">
//           <FaBell />
//           <span className="badge">3</span>
//         </div>
//       </div>

//       {/* القسم الأيمن يوضع ثانياً */}
//       <div className="navbar-right">
//         <div className="system-title">
//           <h1>نظام إدارة المكاتب الخدمية</h1>
//           <span>محاماة - معاملات - استشارات</span>
//         </div>
//         <FaBuilding size={28} />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.tsx (الإصدار النهائي والصحيح)
// Navbar.tsx (تأكد من هذا الهيكل)

// import React from "react";
// import "./Navbar.css";
// import { FaBell, FaBuilding } from "react-icons/fa";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar">
//       {/* القسم الأيمن (العنوان) يأتي أولاً في الكود */}
//       <div className="navbar-right">
//         <FaBuilding size={28} />
//         <div className="system-title">
//           <h1>نظام إدارة المكاتب الخدمية</h1>
//           <span>محاماة - معاملات - استشارات</span>
//         </div>
//       </div>

//       {/* القسم الأيسر (المستخدم) يأتي ثانياً، وسيتم دفعه لليسار بالـ CSS */}
//       <div className="navbar-left">
//         <div className="notification">
//           <FaBell />
//           <span className="badge">3</span>
//         </div>
//         <div className="user-info">
//           <span>أحمد محمد</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import "./Navbar.css";
import { FaBell, FaBuilding } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
  <nav className="navbar">
  <div className="navbar-right">
    <FaBuilding size={28} />
    <div className="system-title">
      <h1>نظام إدارة المكاتب الخدمية</h1>
      <span>محاماة - معاملات - استشارات</span>
    </div>
  </div>

  <div className="navbar-left">
    <div className="notification">
      <FaBell />
      <span className="badge">3</span>
    </div>
    <div className="user-info">
      <span>أحمد محمد</span>
    </div>
  </div>
</nav>

  );
};

export default Navbar;