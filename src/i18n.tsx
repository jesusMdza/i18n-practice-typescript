import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      home: {
        title: "This is the freaking title",
        paragraph: "This is the freaking paragraph",
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});
