import React from 'react';
import './AnnouncementsContainer.css';

const Announcements = () => {
  return (
    <div>
      <div className="title-container">
        <h2>Duyurular</h2>
      </div>
      <div className="list-container">
        <div className="announcement-list">
          <h3>Announcement 1</h3>
        </div>
        <div className="announcement-list">
          <h3>Announcement 2</h3>
        </div>
        <div className="announcement-list">
          <h3>Announcement 3</h3>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
