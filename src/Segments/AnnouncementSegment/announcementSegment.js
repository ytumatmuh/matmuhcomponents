import React, { useState, useEffect } from "react";
import "./announcementSegment.css";
import ButtonCustom from "../../Components/CustomButton/button";
import { useTranslation } from 'react-i18next'
import AnnouncementService from '../../Services/announcementService'
import { Link } from 'react-router-dom'

const AnnouncementComp = ({ announcement }) => {
  const { t } = useTranslation();

  return (
    <div className="announcement">
      <div className="announcement-content" key={announcement.id}>
        <div className="announcement-date">{announcement.publishDate}</div> {/* Assuming publishDate is the date field */}
        <div className="announcement-header">
          <div className="announcement-text">
            <h2 className="announcement-title">{announcement.title}</h2>
          </div>
        </div>
        <p className="announcement-description">{announcement.content}</p> {/* Assuming content is the subtitle */}
        <Link to={`/announcements/${announcement.id}`}>  {/* Pass ID as parameter */}
          <ButtonCustom title={t('rmore')} />
        </Link>
      </div>
      {announcement.imageUrl && (
        <img src={announcement.imageUrl} alt="Announcement" className="announcement-photo" />
      )}
    </div>
  );
};

const AnnouncementSegment = () => {
  const { t } = useTranslation();
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const data = await AnnouncementService.getAnnouncements();
      setAnnouncements(data);
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="announcement-map-container">
      <h1>{t('announ')}</h1>
      {announcements.map((announcement) => (
        <AnnouncementComp key={announcement.id} announcement={announcement} />
      ))}
    </div>
  );
};

export default AnnouncementSegment;
