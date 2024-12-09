import React, { useState, useEffect } from "react";
import { getResearches } from "../../Services/researchService";
import "./researchesAll.css";
import { useTranslation } from "react-i18next";

const ResearchComp = ({ research }) => {
  const stripHTML = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <div className="research-card">
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
        {stripHTML(research.description)}
      </p>
    </div>
  );
};

const Researchs = () => {
  const [researches, setResearches] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchResearches = async () => {
      try {
        const data = await getResearches();
        setResearches(data);
      } catch (error) {
        console.error("Error fetching researches:", error);
      }
    };

    fetchResearches();
  }, []);

  return (
    <div className="researchesall-cont">
      <h1>{t("research")}</h1>
      <div className="research-service">
      {researches.map((research) => (
        <ResearchComp key={research.id} research={research} />
      ))}
    </div>
    </div>
    
  );
};

export default Researchs;
