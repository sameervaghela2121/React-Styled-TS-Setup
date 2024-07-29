import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './assets/i18n/en.json';
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
  },
  lng: localStorage.getItem('selectedLang') || 'en',
});
