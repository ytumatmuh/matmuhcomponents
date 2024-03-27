import React from "react";
import "./singleAnnouncement.css";
import ButtonCustom from "../CustomButton/button";
import { useTranslation } from 'react-i18next'
import AnnouncementService from '../../Services/announcementService'
import { useParams } from 'react-router-dom';

const AnnouncementDetailComp = ({ announcement }) => {
  const { t } = useTranslation();

  return (
    <div className="announcement-detail">
      {announcement.photoUrl && (
        <img src={announcement.photoUrl} alt="Announcement" className="announcement-detail-photo" />
      )}
      <div className="announcement-detail-content">
        <div className="announcement-detail-date">{announcement.date}</div>
        <div className="announcement-detail-header">
          <div className="announcement-detail-text">
            <h2 className="announcement-detail-title">{announcement.title}</h2>
          </div>
        </div>
        <p className="announcement-detail-subtitle">{announcement.subtitle}</p>
        <p className="announcement-detail-description">{announcement.content}</p>
      </div>
      
    </div>
  );
};

const AnnouncementDetail = () => {
  const { id } = useParams();
  const announcements = AnnouncementService.getAnnouncement();
  const announcement = announcements.find(announcement => announcement.id === parseInt(id));

  if (!announcement) {
    return <div>No announcements found for ID: {id}</div>;
  }

  return (
    <div>
      <AnnouncementDetailComp
        key={announcement.id}
        announcement={announcement}
      />
    </div>
  );
};


export default AnnouncementDetail;

