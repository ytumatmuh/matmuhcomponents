import React, { useState, useEffect } from "react";
import "./lectureSegment.css";
import { FiBook } from "react-icons/fi";
import LectureService from "../../Services/lectureservice";

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
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const data = await LectureService();
        setLectures(data);
      } catch (error) {
        console.error('Error fetching lectures:', error);
      }
    };

    fetchLectures();
  }, []);

  // Term ID'lerine göre dersleri grupla
  const groupedLectures = lectures.reduce((groups, lecture) => {
    const termID = lecture.term;
    if (!groups[termID]) {
      groups[termID] = [];
    }
    groups[termID].push(lecture);
    return groups;
  }, {});

  const getTermExpression = (termID) => {
    switch (termID) {
      case '1':
        return '1. Yıl - Güz';
      case '2':
        return '1. Yıl - Bahar';
      case '3':
        return '2. Yıl - Güz';
      case '4':
        return '2. Yıl - Bahar';
      case '5':
        return '3. Yıl - Güz';
      case '6':
        return '3. Yıl - Bahar';
      case '7':
        return '4. Yıl - Güz';
      case '8':
        return '4. Yıl - Bahar';

      // Diğer durumlar için buraya ekleyebilirsiniz
      default:
        return `Term ID: ${termID}`;
    }
  };

  return (
    <div className="lecture-wrapper">
      {Object.keys(groupedLectures).map((termID, index) => (
        <div key={index}>
          <h2>{getTermExpression(termID)}</h2>
          <table className="lecture-table">
            <thead>
              <tr>
                <th>Ders Adı</th>
                <th>Kodu</th>
                <th>Dönem</th>
                <th>Kredi</th>
                <th>Program Linki</th>
                <th>Notlar Linki</th>
              </tr>
            </thead>
            <tbody>
            <tr className="spacer-row"></tr>
              {groupedLectures[termID].map((lecture, index) => (
                <tr key={index}>
                  <td>{lecture.name}</td>
                  <td>{lecture.lectureCode}</td>
                  <td>{lecture.term}</td>
                  <td>{lecture.credit}</td>
                  <td>{lecture.syllabusLink}</td>
                  <td>{lecture.notesLink}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default LectureSegment;
