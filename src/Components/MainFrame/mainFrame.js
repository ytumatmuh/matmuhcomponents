import React from "react";
import NavBar from "../Navbar/navbar";
import HeaderFrame from "../HeaderFrame/headerFrame";
import PageSelector from "../PageSelector/pageSelector";
import './mainFrame.css';


const MainFrame = () => {
  return (
    <div className="main-cover">
      <NavBar />
      <HeaderFrame />
      <PageSelector />
    </div>
  );
};

export default MainFrame;
