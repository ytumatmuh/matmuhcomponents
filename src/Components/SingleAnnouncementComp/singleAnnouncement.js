import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AnnouncementService from '../../Services/announcementService';

const AnnouncementDetail = () => {
  const { id } = useParams();
  const [announcements, setAnnouncements] = useState([]);
  
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

  // Render null if announcements are still loading
  if (announcements.length === 0) {
    return null;
  }

  // Find the announcement with the provided id
  const announcement = announcements.find(announcement => announcement.id === parseInt(id));

  // Render null if announcement with the provided id is not found
  if (!announcement) {
    return null;
  }
    return (
      <div>
        <img>{announcement.imageUrl}</img>
        <p>{announcement.publishDate}</p>
        <h2>{announcement.title}</h2>
        <p>{announcement.content}</p>
        <p>{announcement.content}</p>
        <a>{announcement.links}</a>
        
      </div>
    );
};

export default AnnouncementDetail;
