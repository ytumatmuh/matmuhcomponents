// MobileNavbar.js
import React, { useState } from "react";
import "./mobileNavbar.css";
import Overlay from "../Overlay/overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NightToggle from "../NightModeToggle/nightToggle";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/languageSelector";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const {t, i18n} = useTranslation();

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-container">
        <div className="mobile-navbar-logo">
          <img alt="yildiz-logo" src="/images/ytu-logo.webp" />
        </div>
        <Overlay isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className={`mobile-navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="mobile-navbar-list">
            <li className="mobile-navbar-item">
              <a href="/">{t('home')}</a>
            </li>
            <li className="mobile-navbar-item">
              <a href="/announcements">{t('announ')}</a>
            </li>
            <li className="mobile-navbar-item">
              <a href="/department">{t('depart')}</a>
            </li>
            <li className="mobile-navbar-item">
              <a href="/researches">{t('research')}</a>
            </li>
            <li className="mobile-navbar-item">
              <a href="/projects">{t('project')}</a>
            </li>
            <li className="mobile-navbar-item">
              <a href="/about">{t('about')}</a>
            </li>
            <li className="mobile-navbar-addons">
              <NightToggle />
            </li>
            <li className="mobile-navbar-addons">
              <LanguageSelector />
            </li>
          </ul>
        </div>
        <div className="mobile-navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
