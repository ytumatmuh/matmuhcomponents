import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnnouncementById } from "../../Services/announcementService";
import "./singleAnnouncement.css";

const AnnouncementDetail = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    const fetchAnnouncementDetail = async () => {
      try {
        const response = await getAnnouncementById(id);
        setAnnouncement(response.data); // API'den dönen `data`yı ayıklıyoruz
      } catch (error) {
        console.error("Error fetching announcement detail:", error);
      }
    };

    fetchAnnouncementDetail();
  }, [id]);

  if (!announcement) {
    return <p>Loading...</p>;
  }

  return (
    <div className="announcement-detail">
      {announcement.coverImageUrl && (
        <img
          src={announcement.coverImageUrl}
          alt={announcement.title}
          className="announcement-detail-photo"
        />
      )}
      <h2 className="announcement-detail-title">{announcement.title}</h2>
      <div
        className="announcement-detail-content"
        dangerouslySetInnerHTML={{ __html: announcement.content }}
      ></div>
    </div>
  );
};

export default AnnouncementDetail;
