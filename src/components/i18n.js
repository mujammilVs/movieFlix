import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hello Welcome",
        },
      },
      fr: {
        translation: {
          greeting: "Hello Welcome",
        },
      },
      ru: {
        translation: {
          greeting: "Hello Welcome",
        },
      },
      Ger: {
        translation: {
          greeting: "Hello Welcome",
        },
      },
      sp: {
        translation: {
          greeting: "Hello Welcome",
        },
        ch: {
          translation: {
            greeting: "Hello Welcome",
          },
        },
      },
    },
  });
