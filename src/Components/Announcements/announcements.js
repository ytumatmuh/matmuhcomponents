// Announcement.js
import React, { useState, useEffect } from "react";
import "./announcements.css";
import ButtonCustom from "../CustomButton/button";
import { useTranslation } from 'react-i18next';
import AnnouncementSegmentService from '../../Services/announcementSegmentService'; // Correct import statement
import { Link } from 'react-router-dom';

const AnnouncementComp = ({ announcement }) => {
  const { t } = useTranslation();

  return (
    <div className="announcement">
      <div className="announcement-content" key={announcement.id}>
        <div className="announcement-date">{announcement.date}</div>
        <div className="announcement-header">
          <div className="announcement-text">
            <h2 className="announcement-title">{announcement.title}</h2>
          </div>
        </div>
        <Link to={`/announcements/${announcement.id}`}>
          <ButtonCustom title={t('rmore')} />
        </Link>
      </div>
      {announcement.imageUrl && (
        <img src={announcement.imageUrl} alt="Announcement" className="announcement-photo" />
      )}
    </div>
  );
};

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await AnnouncementSegmentService();
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="announcement-map-container-1">
      {announcements.map((announcement) => (
        <AnnouncementComp key={announcement.id} announcement={announcement} />
      ))}
    </div>
  );
};

export default Announcement;
