import React, { useState, useEffect } from "react";
import "./singleAnnouncement.css";
import ButtonCustom from "../CustomButton/button";
import { useTranslation } from 'react-i18next'
import AnnouncementService from '../../Services/announcementService'
import { useParams } from 'react-router-dom';

const AnnouncementDetailComp = ({ announcement }) => {
  const { t } = useTranslation();

  return (
    <div className="announcement-detail">
      {announcement.imageUrl && (
        <img src={announcement.imageUrl} alt="Announcement" className="announcement-detail-photo" />
      )}
      <div className="announcement-detail-content">
        <div className="announcement-detail-date">{announcement.publishDate}</div>
        <div className="announcement-detail-header">
          <div className="announcement-detail-text">
            <h2 className="announcement-detail-title">{announcement.title}</h2>
          </div>
        </div>
        <p className="announcement-detail-description">{announcement.content}</p>
        
      </div>
      
    </div>
  );
};

const AnnouncementDetail = () => {
  const { id } = useParams();
  const [announcements, setAnnouncements] = useState([]);
  const announcement = announcements.find(announcement => announcement.id === parseInt(id));

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await AnnouncementService();
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  // Add a check to ensure announcement is defined before rendering
  return (
    <div>
      {announcement && (
        <AnnouncementDetailComp
          key={announcement.id}
          announcement={announcement}
        />
      )}
    </div>
  );
};


export default AnnouncementDetail;