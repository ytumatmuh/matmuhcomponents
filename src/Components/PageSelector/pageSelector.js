import React, { useState } from "react";
import Homepage from "../../Pages/HomePage/homePage";
import StudiesPage from "../../Pages/StudiesPage/studiesPage";
import LecturePage from "../../Pages/LecturePage/lecturePage";
import "./pageSelector.css";

const PageSelector = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handleClick = (pageId) => {
    setSelectedPage(pageId);
  };

  return (
    <div className="page-cover">
      <div className="btn-cover">
        <button
          onClick={() => handleClick(1)}
          className={selectedPage === 1 ? "btn selected" : "btn"}
        >
          Home
        </button>
        <button
          onClick={() => handleClick(2)}
          className={selectedPage === 2 ? "btn selected" : "btn"}
        >
          Studies
        </button>
        <button
          onClick={() => handleClick(3)}
          className={selectedPage === 3 ? "btn selected" : "btn"}
        >
          Lectures
        </button>
      </div>
      {selectedPage === 1 && <Homepage />}
      {selectedPage === 2 && <StudiesPage />}
      {selectedPage === 3 && <LecturePage />}
    </div>
  );
};

export default PageSelector;
