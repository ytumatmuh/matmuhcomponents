import React, { useState, useEffect } from "react";
import "./announcementSegment.css";
import ButtonCustom from "../../Components/CustomButton/button";
import { useTranslation } from 'react-i18next'
import AnnouncementService from '../../Services/announcementService'
import axios from 'axios'; // Import Axios

const AnnouncementComp = ({ announcement }) => {
  const { t } = useTranslation();

  return (
    <div className="announcement">
      <div className="announcement-content" key={announcement.id}>
        <div className="announcement-date">{announcement.publishDate}</div>
        <div className="announcement-header">
          <div className="announcement-text">
            <h2 className="announcement-title">{announcement.title}</h2>
          </div>
        </div>
        <p className="announcement-description">{announcement.content}</p>
        {/* Pass ID as parameter */}
        <a href={`/announcements/${announcement.id}`}>
          <ButtonCustom title={t('rmore')} />
        </a>
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
    const fetchData = async () => {
      try {
        // Fetch data from the first API endpoint
        const data1 = await AnnouncementService();

        // Fetch data from the second API endpoint
        const response = await axios.get('https://matmuhbackend.onrender.com/api/announcements/getAnnouncements/2');
        const data2 = response.data.data || [];

        // Merge the two arrays of announcements
        const mergedData = [...data1, ...data2];

        // Set the merged data in the state
        setAnnouncements(mergedData);
      } catch (error) {
        console.error('Error fetching announcements:', error);
        // Handle error if needed
      }
    };

    fetchData();
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
