import React, { useState, useEffect } from "react";
import { getAnnouncements } from "../../Services/announcementService";
import ButtonCustom from "../../Components/CustomButton/button";
import "./announcementSegment.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AnnouncementSegment = () => {
  const [announcements, setAnnouncements] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const announcementsData = await getAnnouncements();
      setAnnouncements(announcementsData);
    };

    fetchAnnouncements();
  }, []);

  const truncateHTML = (html, maxLength) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html; // HTML içeriğini işler
    const textContent = tempElement.textContent || tempElement.innerText || ""; // HTML içeriğinden düz metni çıkar
    return textContent.length > maxLength
      ? `${textContent.slice(0, maxLength)}...`
      : textContent;
  };

  return (
    <div className="announcement-map-container">
      <h1>{t("announ")}</h1>
      <div className="announcement-list">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement-card">
            <div className="announcement-image-wrapper">
              {announcement.coverImageUrl ? (
                <img
                  src={announcement.coverImageUrl}
                  alt={announcement.title}
                  className="announcement-image"
                />
              ) : (
                <div className="announcement-image-placeholder"></div>
              )}
            </div>
            <h3 className="announcement-title">{announcement.title}</h3>
            <p className="announcement-content">
              {truncateHTML(announcement.content, 100)}
            </p>
            <Link to={`/announcement/${announcement.id}`}>
              <ButtonCustom title={t("smore")} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementSegment;
