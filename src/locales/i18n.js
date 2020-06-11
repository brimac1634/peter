
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";

import translationEng from "./eng/translation.js";
import translationTag from "./tag/translation.js";

i18n.use(XHR).use(initReactI18next).init({
    debug: true,
    lng: "eng",
    fallbackLng: "eng",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      eng: {
        translations: translationEng
      },
      tag: {
        translations: translationTag
      },
    },
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;