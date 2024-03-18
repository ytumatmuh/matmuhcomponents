import React from "react";
import "./announcements.css";
import ButtonCustom from "../CustomButton/button";

const AnnouncementComp = ({ date, title, content, photoUrl }) => {
  return (
    <div className="announcement">
      <div className="announcement-content">
        <div className="announcement-date">{date}</div>
        <div className="announcement-header">
          <div className="announcement-text">
            <h2 className="announcement-title">{title}</h2>
          </div>
        </div>
        <p className="announcement-description">{content}</p>
        <ButtonCustom title={"Read More"} />
      </div>
      {photoUrl && (
        <img src={photoUrl} alt="Announcement" className="announcement-photo" />
      )}
    </div>
  );
};

export default AnnouncementComp;
