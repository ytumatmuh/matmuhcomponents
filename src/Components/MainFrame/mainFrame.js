import React from "react";
import HeaderFrame from "../HeaderFrame/headerFrame";
import PageSelector from "../PageSelector/pageSelector";
import "./mainFrame.css";

const MainFrame = () => {
  return (
    <div className="main-cover">
      <HeaderFrame />
      <PageSelector />
    </div>
  );
};

export default MainFrame;
