// const PublicLayout: React.FC = () => {
//    return (
//     <div className="app-layout">
//       <Sidebar />
//       <div className="main-wrapper">
//         <Navbar />

//         {/* 👇 هنا تحط المكون اللي فيه الـ Dashboard وغيره */}
//       <div className="main-content-area">
//           {/* محتوى الصفحة ديناميكي */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// const PublicLayout: React.FC = () => {
//   return (
//     // لا يوجد كلاس هنا، الـ body سيحمل الاتجاه
//     <>
//       <Sidebar />
//       <Navbar />
//       {/* <main> هو المكان الذي سيعرض فيه المحتوى القابل للتمرير */}
//       <main className="content-area">
//         <Outlet />
//       </main>
//     </>
//   );
// };
// export default PublicLayout;

// const PublicLayout: React.FC = () => {
//   return (
//     // لا يوجد كلاس هنا، الـ body سيحمل الاتجاه
//     <>
//    <div className="app-layout">
//   <Navbar />
//   <Sidebar />
//   <div className="main-wrapper">
//     <div className="main-content-area">
//       <Outlet />
//     </div>
//   </div>
// </div>

//     </>
//   );
// };

// export default PublicLayout;

// import React from 'react';
// import Navbar from '../components/common/Navbar';
// import Sidebar from '../components/common/sidebar';
// import { Outlet } from 'react-router-dom';
// import './PublicLayout.css';

// const PublicLayout: React.FC = () => {
//   return (
//    <>
//   <Navbar />  {/* فوق لوحده */}
//   <div className="app-layout">
//     <Sidebar />
//     <main className="main-wrapper">
//       <Outlet />
//     </main>
//   </div>
// </>

//   );
// };

// export default PublicLayout;

import React from "react";
// import Navbar from "../components/common/Navbar";
// import Sidebar from "../components/common/sidebar";
import { Outlet } from "react-router-dom";
import "./PublicLayout.css"; // استيراد ملف التنسيق
import SidebarMUI from "../components/common/SidebarMUI";
import NavbarMUI from "../components/common/NavbarMUI";

const PublicLayout: React.FC = () => {
  return (
    // لا نحتاج لـ app-layout أو main-wrapper بعد الآن
    <>
      <SidebarMUI />
      {/* <Sidebar /> */}
      <NavbarMUI />
      {/* <Navbar /> */}
      <main className="content-area">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;

// import React from 'react';
// import Navbar from '../components/common/Navbar';
//  import Sidebar from '../components/common/sidebar';
//  import { Outlet } from 'react-router-dom';
// import './PublicLayout.css';

// const PublicLayout: React.FC = () => {
//   return (
//     <>
//       {/* الهيدر */}
//       <Navbar />

//       <div className="flex">
//         {/* القائمة الجانبية */}
//         <aside className="sidebar-area">
//           <Sidebar />
//         </aside>

//         {/* منطقة المحتوى */}
//         <main className="content-area">
//           <Outlet />
//         </main>
//       </div>
//     </>
//   );
// };

// export default PublicLayout;
