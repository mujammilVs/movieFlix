// src/App.js
import React, { Suspense } from "react";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TvShows";
import Sports from "./pages/sports";
import Live from "./pages/Live";
import Settings from "./components/settings/languageSetting";
import "./App.css";
function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <div className="app">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">{t("Home")}</Link>
            </li>
            <li>
              <Link to="/movies">{t("Movies")}</Link>
            </li>
            <li>
              <Link to="/tvshows">{t("TVShows")}</Link>
            </li>
            <li>
              <Link to="/sports">{t("Sports")}</Link>
            </li>
            <li>
              <Link to="/live">{t("Live")}</Link>
            </li>
            <li>
              <Link to="/settings">{t("Settings")}</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<Live />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
