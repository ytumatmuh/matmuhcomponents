import React, { useState, useEffect } from "react";
import { getLectures } from "../../Services/lectureservice";
import "./lectureSegment.css";

const LectureCard = ({ lecture }) => {
  return (
    <div className="lecture-card">
      <h3 className="lecture-name">{lecture.name}</h3>
      <p className="lecture-code">Kod: {lecture.code}</p>
      <p className="lecture-credit">Kredi: {lecture.credit}</p>
      {lecture.syllabusLink && (
        <a href={lecture.syllabusLink} className="lecture-link" target="_blank" rel="noopener noreferrer">
          Ders Programı
        </a>
      )}
      {lecture.notesLink && (
        <a href={lecture.notesLink} className="lecture-link" target="_blank" rel="noopener noreferrer">
          Notlar
        </a>
      )}
    </div>
  );
};

const LectureSegment = () => {
  const [groupedLectures, setGroupedLectures] = useState({});

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const data = await getLectures();
        const grouped = data.reduce((acc, lecture) => {
          const term = lecture.term || "Dönem Bilinmiyor";
          if (!acc[term]) {
            acc[term] = [];
          }
          acc[term].push(lecture);
          return acc;
        }, {});
        setGroupedLectures(grouped);
      } catch (error) {
        console.error("Error fetching lectures:", error);
      }
    };

    fetchLectures();
  }, []);

  return (
    <div className="lecture-segment">
      {Object.entries(groupedLectures).map(([term, lectures]) => (
        <div key={term} className="term-section">
          <h2 className="term-title">{term}. Dönem</h2>
          <div className="lecture-list">
            {lectures.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LectureSegment;
