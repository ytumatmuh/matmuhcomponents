import React from "react";
import "./navbar.css";

function NavBar({
  onHomeTap,
  onStudiesTap,
  onDepTap,
  onResearchTap,
  onAboutTap,
}) {
  return (
    <div className="bar">
      <div className="drawerItem">
        <span className="textBold">Yıldız Teknik Üniversitesi</span>
      </div>
      <div className="socialIcons">
        <div className="drawerItem">
          <span className="text" onClick={onHomeTap}>
            Home
          </span>
          <span className="text" onClick={onStudiesTap}>
            Studies
          </span>
          <span className="text" onClick={onDepTap}>
            Department
          </span>
          <span className="text" onClick={onResearchTap}>
            Research
          </span>
          <span className="text" onClick={onAboutTap}>
            About
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
