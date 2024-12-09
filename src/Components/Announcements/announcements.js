import React from "react";
import "./announcements.css";

const AnnouncementComp = ({ htmlContent }) => {
  return (
    <div
      className="announcement"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  );
};

export default AnnouncementComp;
