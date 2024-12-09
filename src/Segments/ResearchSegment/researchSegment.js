import React, { useState, useEffect } from "react";
import { getResearches } from "../../Services/researchService";
import "./researchSegment.css";

const ResearchSegment = () => {
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    const fetchResearches = async () => {
      const data = await getResearches();
      setResearches(data.slice(0, 3)); // Sadece en son 3 araştırmayı göster
    };

    fetchResearches();
  }, []);

  const truncateText = (html, maxLength) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const textContent = tempElement.textContent || tempElement.innerText || "";
    return textContent.length > maxLength
      ? `${textContent.slice(0, maxLength)}...`
      : textContent;
  };

  return (
    <div className="researches-section">
      {researches.map((research) => (
        <div key={research.id} className="research-card">
          <div className="research-image-wrapper">
            {research.coverImageUrl ? (
              <img
                src={research.coverImageUrl}
                alt={research.title}
                className="research-image"
              />
            ) : (
              <div className="research-image-placeholder"></div>
            )}
          </div>
          <h3 className="research-card-title">{research.title}</h3>
          <p className="research-card-description">
            {truncateText(research.description, 100)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResearchSegment;
