import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AnnouncementService from '../../Services/announcementService';

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

  // Render loading state if announcements are still loading
  if (announcements.length === 0) {
    return <div>Loading...</div>;
  }

  // Render announcement detail if announcement with the provided id exists
  if (announcement) {
    return (
      <div>
        <img>{announcement.imageUrl}</img>
        <p>{announcement.publishDate}</p>
        <h2>{announcement.title}</h2>
        <p>{announcement.content}</p>
        <p>{announcement.content}</p>
        <p>{announcement.links}</p>
        
      </div>
    );
  } else {
    // Render not found message if announcement with the provided id does not exist
    return <div>Announcement not found!</div>;
  }
};

export default AnnouncementDetail;
