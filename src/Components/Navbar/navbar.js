import React from "react";
import "./navbar.css";
import NightToggle from "../NightModeToggle/nightToggle";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/languageSelector";
import { Link } from 'react-router-dom';

function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bar">
      <div className="ytu-logo-divider">
        <img alt="ytu-logo" src="/images/ytu-logo.webp" className="ytu-logo" />
      </div>
      <div className="socialIcons">
        <div className="drawerItem">
          <Link to={`/`}>
            <span className="text">{t("home")}</span>
          </Link>

          <Link to={`/announcements`}>
            <span className="text">{t("announ")}</span>
          </Link>

          <Link to={`/department`}>
            <span className="text">{t("depart")}</span>
          </Link>

          <Link to={`/research`}>
            <span className="text">{t("research")}</span>
          </Link>

          <Link to={`/projects`}>
            <span className="text">{t("project")}</span>
          </Link>

          <Link to={`/about`}>
            <span className="text">{t("about")}</span>
          </Link>

          <div className="underline"></div>
        </div>
      </div>
      <div className="bar-toggle">
        <NightToggle />
      </div>
      <div className="bar-toggle">
        <LanguageSelector />
      </div>
    </div>
  );
}

export default NavBar;
