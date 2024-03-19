import React from "react";
import "./headerFrame.css";
import { useTranslation } from "react-i18next";

const HeaderFrame = () => {
  const {t, i18n} = useTranslation();

  return (
    <div className="header-frame">
      <div className="image-frame">
        <img src="/images/ytu_dp2.jpg" alt="Matmuh_image" />
      </div>

      <div className="header-text">
        <p className="header-school">{t('ytu')}</p>
        <p className="header-title">{t('matmuh')}</p>
      </div>
    </div>
  );
};

export default HeaderFrame;
