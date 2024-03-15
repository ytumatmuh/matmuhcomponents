import React from "react";
import Lectures from "../../Services/lectureservice";
import './lecturePage.css'

const LecturePage = () => {
  return (
    <div className="lecture-main-page">
      <Lectures />
    </div>
  );
};

export default LecturePage;
