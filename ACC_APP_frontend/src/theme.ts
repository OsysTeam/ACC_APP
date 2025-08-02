// src/theme.ts

import { createTheme } from '@mui/material/styles';
import { arEG } from '@mui/material/locale'; // لاستيراد حزمة اللغة العربية لمكونات MUI

// إنشاء الثيم مع تفعيل خاصية من اليمين لليسار (RTL)
const theme = createTheme({
  direction: 'rtl',
  typography: {
    // استخدام خط مناسب للغة العربية (تأكد من إضافته في public/index.html)
    fontFamily: [
      'Cairo',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  // يمكنك تخصيص الألوان هنا إذا أردت
  // palette: {
  //   primary: {
  //     main: '#556cd6',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  // },
}, arEG); // تمرير حزمة اللغة العربية للثيم

export default theme;