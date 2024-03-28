import React, { useState } from "react";
import Homepage from "../../Pages/HomePage/homePage";
import StudiesPage from "../../Pages/StudiesPage/studiesPage";
import LecturePage from "../../Pages/LecturePage/lecturePage";
import "./pageSelector.css";
import { useTranslation } from "react-i18next";

const PageSelector = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleClick = (pageId) => {
    setSelectedPage(pageId);
  };

  const {t, i18n} = useTranslation();

  return (
    <div className="page-cover">
      <div className="btn-cover">
        <button
          onClick={() => handleClick(1)}
          className={selectedPage === 1 ? "btn selected" : "btn"}
        >
          {t('home')}
        </button>
        <button
          onClick={() => handleClick(2)}
          className={selectedPage === 2 ? "btn selected" : "btn"}
        >
          {t('studies')}
        </button>
        <button
          onClick={() => handleClick(3)}
          className={selectedPage === 3 ? "btn selected" : "btn"}
        >
          {t('lectures')}
        </button>
      </div>
      {selectedPage === 1 && <Homepage />}
      {selectedPage === 2 && <StudiesPage />}
      {selectedPage === 3 && <LecturePage />}
    </div>
  );
};

export default PageSelector;
