import React from "react";
import "./navbar.css";
import NightToggle from "../NightModeToggle/nightToggle";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/languageSelector";

function NavBar({
  onHomeTap,
  onProjectTap,
  onDepTap,
  onResearchTap,
  onAboutTap,
}) {
  const {t, i18n} = useTranslation();
  return (
    <div className="bar">
      <div className="ytu-logo-divider">
        <img alt="ytu-logo" src="/images/ytu-logo.webp" className="ytu-logo"/>
      </div>
      <div className="socialIcons">
      
        <div className="drawerItem">
          
          <span className="text" onClick={onHomeTap}>
            {t('home')}
          </span>
          <span className="text" onClick={onDepTap}>
            {t('depart')}
          </span>
          <span className="text" onClick={onResearchTap}>
            {t('research')}
          </span>
          <span className="text" onClick={onProjectTap}>
            {t('project')}
          </span>
          <span className="text" onClick={onAboutTap}>
            {t('about')}
          </span>
          <div className="underline"></div>
        </div>
      </div>
      <div className="bar-toggle"><NightToggle /></div>
      <div className="bar-toggle"><LanguageSelector/></div>
    </div>
  );
}

export default NavBar;