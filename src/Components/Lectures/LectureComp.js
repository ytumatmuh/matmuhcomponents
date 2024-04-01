import React from "react";
import "./LectureComp.css";
import { FiBook } from "react-icons/fi";
import LectureService from "../../Services/lectureService";

const LectureComp = ({lecture}) => {
  return (
    <div className="lecture" onKeyUp={lecture.key}>
        <div className="lecture-content">
          <h2 className="lecture-title">{lecture.name}</h2>

          {content.map((file) => (
            <div className="content">
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

const Lecture = () => {
  const lectures = LectureService.getLecture();

  return(
    <div className="lecture-container">
      {lectures.map((lecture)=>(<LectureComp key={lecture.id} lecture={lecture} />))}
    </div>

  )
}

export default Lecture;
