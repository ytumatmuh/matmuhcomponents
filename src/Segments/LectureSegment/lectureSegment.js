import React from "react";
import "./lectureSegment.css";
import { FiBook } from "react-icons/fi";
import LectureService from "../../Services/lectureService";

const LectureComp = ({lecture}) => {
  return (
    <div className="lecture">
        <div className="lecture-content">
          <h2 className="lecture-title">{lecture.name}</h2>

          {lecture.content.map((file, index) => (
            <div className="content" key={index}>
              <div className="icon-box">
                <FiBook />
              </div>
              <p>{file.desc}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

const LectureSegment = () => {
  const lectures = LectureService.getLecture();

  return(
    <div className="lecture-wrapper">
      <div className="lecture-container">
        {lectures.map((lecture, index)=>(<LectureComp key={index} lecture={lecture} />))}
      </div>
    </div>
  )
}

export default LectureSegment;
