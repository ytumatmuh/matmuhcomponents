import React from "react";
import "./singleAnnouncement.css";
import ButtonCustom from "../CustomButton/button";
import { useTranslation } from 'react-i18next'
import AnnouncementService from '../../Services/announcementService'
import { useParams } from 'react-router-dom';

const AnnouncementDetailComp = ({ announcement }) => {
  const { t } = useTranslation();

  return (
    <div className="announcement">
      <div className="announcement-content">
        <div className="announcement-date">{announcement.date}</div>
        <div className="announcement-header">
          <div className="announcement-text">
            <h2 className="announcement-title">{announcement.title}</h2>
          </div>
        </div>
        <p className="announcement-description">{announcement.subtitle}</p>
        <ButtonCustom title={t('rmore')} />
      </div>
      {announcement.photoUrl && (
        <img src={announcement.photoUrl} alt="Announcement" className="announcement-photo" />
      )}
    </div>
  );
};

const AnnouncementDetail = () => {
    const { id } = useParams();  // Access the ID from route parameter
    const announcements = AnnouncementService.getAnnouncementById(id);
  return (
    <div>
      {announcements.map((announcement) => (
        <AnnouncementDetailComp
          key={announcement.id}
          announcement={announcement}
        />
      ))}
    </div>
  );
};

  export default AnnouncementDetail;
