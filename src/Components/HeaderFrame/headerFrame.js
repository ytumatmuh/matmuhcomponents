import React from "react";
import "./headerFrame.css";

const HeaderFrame = () => {
  return (
    <div className="header-frame">
      <div className="image-frame">
        <img src="/images/ytu_dp2.jpg" alt="Matmuh_image" />
      </div>

      <div className="header-text">
        <p className="header-school">Yıldız Teknik Üniversitesi</p>
        <p className="header-title">Matematik Mühendisliği</p>
      </div>
    </div>
  );
};

export default HeaderFrame;
