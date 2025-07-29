import React from 'react';

// الخطوة 1: تعريف "عقد" أو واجهة للـ props
// هذا يخبر TypeScript بالضبط ما هي البيانات التي يتوقعها المكون
interface DataCardProps {
  icon: React.ReactNode; // React.ReactNode يمكنه قبول أي شيء يمكن عرضه (أيقونة، نص، إلخ)
  title: string;
  value: string | number; // القيمة يمكن أن تكون نصًا أو رقمًا
  gradientClass: string;
}

// الخطوة 2: استخدام الواجهة مع React.FC (Functional Component)
const DataCard: React.FC<DataCardProps> = ({ icon, title, value, gradientClass }) => {
  // الآن، TypeScript يعرف أن `title` هو string, `value` هو string أو number, وهكذا.
  // إذا حاولت استخدامها بطريقة خاطئة، سيظهر لك خطأ أثناء التطوير.
  return (
    <div className={`data-card ${gradientClass}`}>
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default DataCard;