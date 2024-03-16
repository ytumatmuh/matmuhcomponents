import React from "react";
import "./LectureComp.css";
import { FiBook } from "react-icons/fi";

const LectureComp = ({ name, content }) => {
  return (
    <div className="container">
      <div className="lecture">
        <div className="lecture-content">
          <h2 className="lecture-title">{name}</h2>

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
    </div>
  );
};

export default LectureComp;
