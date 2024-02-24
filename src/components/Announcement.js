import React from 'react';
import './announcements.css';

const Announcement = ({ date, title, content, photoUrl }) => {
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
        <button className="read-more-button">Read More</button>
      </div>
      {photoUrl && <img src={photoUrl} alt="Announcement" className="announcement-photo" />}
    </div>
  );
};

export default Announcement;
