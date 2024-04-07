import "./researchComp.css";
import "./researchSegment.css"
import ResearchService from "../../Services/researchService";

const ResearchComp = ({research}) => {
  return (
    <div className='research-card' key={research.id}>
      <div className='research-card-title '> {research.title}</div>
      <div className='research-card-description'>{research.subtitle}</div>
    </div>
  );
};

const ResearchSegment = () => {

const researches = ResearchService.getResearch();
  return (
    <div className='research-service'>
      {researches.map((research) => (
        <ResearchComp key={research.id} research={research} />
      ))}
    </div>
  );
};

export default ResearchSegment;
