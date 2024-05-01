import "../../Segments/ResearchSegment/researchComp.css"
import "../../Segments/ResearchSegment/researchSegment.css"
import ResearchService from "../../Services/researchService";
import React, { useState, useEffect } from "react";

const ResearchComp = ({research}) => {
  return (
    <div className='research-card' key={research.id}>
      <div className='research-card-title '> {research.title}</div>
      <div className='research-card-description'>{research.description}</div>
    </div>
  );
};

const Researchs = () => {

  const [researches, setResearches] = useState([]);
    useEffect(() => {
    const fetchResearches = async () => {
      try {
        const data = await ResearchService();
        setResearches(data);
      } catch (error) {
        console.error('Error fetching aesearches:', error);
      }
    };

    fetchResearches();
  }, []);
  return (
    <div className='research-service'>
      {researches.map((research) => (
        <ResearchComp key={research.id} research={research} />
      ))}
    </div>
  );
};

export default Researchs;
