import React, { useState, useRef } from 'react';
import { FaImage } from 'react-icons/fa'; // استيراد أيقونة الصورة
import './OfficeDefinition.css'; // استيراد ملف التنسيق المخصص

const OfficeDefinition: React.FC = () => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // دالة لمعالجة اختيار ملف اللوجو
  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  // دالة لتفعيل نافذة اختيار الملف
  const handleChooseLogoClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="page-background" dir="rtl">
      <main className="container my-5">
        <div className="card shadow-sm office-card">
          <div className="card-header bg-light py-3">
            <h5 className="mb-0">بيانات المكتب</h5>
          </div>
          <div className="card-body p-4">
            <div className="row">
              {/* ====== قسم حقول الإدخال ====== */}
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="officeNameAr" className="form-label">اسم المكتب (AR)</label>
                    <input type="text" className="form-control" id="officeNameAr" placeholder="اسم المكتب" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="officeNameEn" className="form-label">اسم المكتب (EN)</label>
                    <input type="text" className="form-control" id="officeNameEn" placeholder="Office Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="addressAr" className="form-label">العنوان (AR)</label>
                    <input type="text" className="form-control" id="addressAr" defaultValue="Cairo" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="addressEn" className="form-label">العنوان (EN)</label>
                    <input type="text" className="form-control" id="addressEn" placeholder="Address" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="website" className="form-label">الايميل</label>
                    <input type="text" className="form-control" id="website" placeholder="Website / Email" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">التليفون</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                  </div>
                </div>
              </div>

              {/* ====== قسم اختيار اللوجو ====== */}
              <div className="col-lg-3 d-flex flex-column">
                <div className="logo-placeholder mb-3 flex-grow-1">
                  {logoPreview ? (
                    <img src={logoPreview} alt="Logo Preview" className="logo-preview-img" />
                  ) : (
                    <div className="logo-default-text">
                      <FaImage className="mb-2" />
                      <span>logo</span>
                    </div>
                  )}
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={handleChooseLogoClick}>
                  اختر لوجو المكتب
                </button>
                <input type="file" ref={fileInputRef} onChange={handleLogoChange} accept="image/*" style={{ display: 'none' }} />
              </div>
            </div>
            
            {/* ====== زر الحفظ في أقصى اليسار ====== */}
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary px-4">حفظ البيانات</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfficeDefinition;