import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AnnouncementService from '../../Services/announcementService';

const AnnouncementDetail = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);
  
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const data = await AnnouncementService(id); // Call AnnouncementService with id parameter
        setAnnouncement(data);
      } catch (error) {
        console.error('Error fetching announcement:', error);
      }
    };

    fetchAnnouncement();
  }, [id]); // Include id in the dependency array

  // Render null if announcement is still loading
  if (!announcement) {
    return null;
  }

  return (
    <div>
      <img src={announcement.imageUrl} alt={announcement.title} />
      <p>{announcement.publishDate}</p>
      <h2>{announcement.title}</h2>
      <p>{announcement.content}</p>
      <ul>
        {announcement.links.map(link => (
          <li key={link.id}><a href={link.link}>{link.link}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementDetail;
