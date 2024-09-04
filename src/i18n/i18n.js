// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: "Home",
      Movies: "Movies",
      TVShows: "TV Shows",
      Sports: "Sports",
      Live: "Live",
      language: "Language",
    }
  },
  fr: {
    translation: {
      Home: "Accueil",
      Movies: "Films",
      TVShows: "Émissions de télévision",
      Sports: "Des sports",
      Live: "En direct",
      language: "Langue",
    }
  },
  de: {
    translation: {
      Home: "Startseite",
      Movies: "Filme",
      TVShows: "Fernsehsendungen",
      Sports: "Sport",
      Live: "Leben",
      language: "Sprache",
    }
  },
  ru: {
    translation: {
      Home: "Домой",
      Movies: "Фильмы",
      TVShows: "ТВ шоу",
      Sports: "Спорт",
      Live: "Жить",
      language: "Язык",
    }
  },
  es: {
    translation: {
      Home: "Inicio",
      Movies: "Películas",
      TVShows: "Programas de televisión",
      Sports: "Deportes",
      Live: "En vivo",
      language: "Idioma",
    }
  },
  zh: {
    translation: {
      Home: "主页",
      Movies: "电影",
      TVShows: "电视剧",
      Sports: "体育",
      Live: "直播",
      language: "语言",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
