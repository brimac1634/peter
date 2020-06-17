
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
// import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from "./en/translation.js";
import translationZh from "./zh/translation.js";

i18n.use(XHR).use(initReactI18next).init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: ".",
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translations: translationEn
      },
      zh: {
        translations: translationZh
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    // react: {
    //   wait: true,
    //   bindI18n: 'languageChanged loaded',
    //   bindStore: 'added removed',
    //   nsMode: 'default'
    // }
  });

export default i18n;