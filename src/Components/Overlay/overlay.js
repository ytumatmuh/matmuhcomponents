// Overlay.js
import React from 'react';
import './overlay.css';

const Overlay = ({ isOpen, toggleMenu }) => {
  return isOpen ? <div className="overlay" onClick={toggleMenu}></div> : null;
};

export default Overlay;
