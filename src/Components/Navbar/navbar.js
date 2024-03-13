import React from "react";
import "./navbar.css";

function NavBar({
  onHomeTap,
  onProjectTap,
  onDepTap,
  onResearchTap,
  onAboutTap,
}) {
  return (
    <div className="bar">
      <div className="ytu-logo-divider">
        <img alt="ytu-logo" src="/images/ytu-logo.webp" className="ytu-logo"/>
      </div>
      <div className="socialIcons">
        <div className="drawerItem">
          <span className="text" onClick={onHomeTap}>
            Home
          </span>
          <span className="text" onClick={onDepTap}>
            Department
          </span>
          <span className="text" onClick={onResearchTap}>
            Research
          </span>
          <span className="text" onClick={onProjectTap}>
            Project
          </span>
          <span className="text" onClick={onAboutTap}>
            About
          </span>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
