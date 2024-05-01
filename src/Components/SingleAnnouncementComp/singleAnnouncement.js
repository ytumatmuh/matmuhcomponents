import React from "react";

const AnnouncementDetailComp = ({ announcement }) => {
  const { imageUrl, publishDate, title, content, links } = announcement;

  return (
    <div className="announcement-detail">
      {imageUrl && (
        <img src={imageUrl} alt="Announcement" className="announcement-detail-photo" />
      )}
      <div className="announcement-detail-content">
        <div className="announcement-detail-date">{publishDate}</div>
        <div className="announcement-detail-header">
          <div className="announcement-detail-text">
            <h2 className="announcement-detail-title">{title}</h2>
          </div>
        </div>
        <p className="announcement-detail-description">{content}</p>
        
        {/* Linkleri göstermek için bir map fonksiyonu kullanın */}
        {links && links.length > 0 && (
          <div className="announcement-detail-links">
            <ul>
              {links.map((link, index) => (
                <li key={link.id}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementDetailComp;
