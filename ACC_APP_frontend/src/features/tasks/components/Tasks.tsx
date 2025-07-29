import React from 'react';
import './Tasks.css';

export default function Tasks() {
  return (
     <>
      {/* 👇 هذا هو الصندوق الأبيض الذي سيظهر داخل منطقة المحتوى */}
      <div className="page-wrapper">
        <h1 className="page-title">صفحة المهام</h1>
        <p className="page-subtitle">هنا محتوى المهام الديناميكي</p>
        
        <div className="tasks-list">
          <div className="task-item">مهمة 1: إرسال تقرير</div>
          <div className="task-item">مهمة 2: متابعة القضايا</div>
          <div className="task-item">مهمة 3: أرشفة المستندات</div>
        </div>
      </div>
    </>
  );
}
