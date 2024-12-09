import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../../Components/CustomButton/button";
import { getAnnouncements } from "../../Services/announcementService";
import { useTranslation } from "react-i18next";
import "./homePage.css";

const Homepage = () => {
  const [latestAnnouncements, setLatestAnnouncements] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const announcementsData = await getAnnouncements();
      setLatestAnnouncements(announcementsData.slice(0, 3)); 
    };

    fetchAnnouncements();
  }, []);

  const truncateHTML = (html, maxLength) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const textContent = tempElement.textContent || tempElement.innerText || ""; 
    return textContent.length > maxLength
      ? `${textContent.slice(0, maxLength)}...`
      : textContent;
  };

  return (
    <div className="homepage-cover">
      <h1>{t("announ")}</h1>
      <div className="homepage-announcements">
        {latestAnnouncements.map((announcement) => (
          <div key={announcement.id} className="homepage-announcement-card">
            <div className="homepage-announcement-image-wrapper">
              {announcement.coverImageUrl ? (
                <img
                  src={announcement.coverImageUrl}
                  alt={announcement.title}
                  className="homepage-announcement-image"
                />
              ) : (
                <div className="homepage-announcement-image-placeholder"></div> // Kapak fotoğrafı olmayanlar için boş alan
              )}
            </div>
            <h3 className="homepage-announcement-title">{announcement.title}</h3>
            <p className="homepage-announcement-content">
              {truncateHTML(announcement.content, 100)}
            </p>
            <Link to={`/announcement/${announcement.id}`}>
              <ButtonCustom title={t("smore")} />
            </Link>
          </div>
        ))}
      </div>
      <div className="homepage-button">
        <Link to={"/announcements"}>
          <ButtonCustom title={t("smore")} />
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
