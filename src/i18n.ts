import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './i18n/en.json';
import cn from './i18n/cn.json';

i18n.languages = ['en', 'cn'];
i18n.use(initReactI18next)
.init({
  fallbackNS: 'common',
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false
  },
  resources: { en, cn }
});

export default i18n;