// Overlay.js
import React from "react";
import "./overlay.css";

const Overlay = ({ isOpen, toggleMenu }) => {
  return isOpen ? <div className="overlay"></div> : null;
};

export default Overlay;
