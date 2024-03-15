// MobileNavbar.js
import React, { useState } from 'react';
import './mobileNavbar.css';
import Overlay from '../Overlay/overlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-container">
        <div className="mobile-navbar-logo">
          <img alt='yildiz-logo' src='/images/ytu-logo.webp' />
        </div>
        <Overlay isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className={`mobile-navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="mobile-navbar-list">
            <li className="mobile-navbar-item"><a href="">Home</a></li>
            <li className="mobile-navbar-item"><a href="#">Department</a></li>
            <li className="mobile-navbar-item"><a href="#">Research</a></li>
            <li className="mobile-navbar-item"><a href="#">Project</a></li>
            <li className="mobile-navbar-item"><a href="#">About</a></li>
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
