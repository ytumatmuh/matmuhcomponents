import React, { useState } from "react";
import HomeSegment from "../../Segments/HomeSegment/homeSegment";
import StudiesSegment from "../../Segments/StudiesSegment/studiesSegment";
import LectureSegment from "../../Segments/LectureSegment/lectureSegment";
import "./segmentSelector.css";

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
          Lecture
        </button>
      </div>
      {selectedPage === 1 && <HomeSegment />}
      {selectedPage === 2 && <StudiesSegment />}
      {selectedPage === 3 && <LectureSegment />}
    </div>
  );
};

export default PageSelector;
