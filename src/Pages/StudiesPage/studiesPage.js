
import React from 'react'
import './studiesPage.css';
import Research from '../../Services/researchService';
import Project from '../../Services/projectService';
import ButtonCustom from '../../Components/CustomButton/button';
const StudiesPage = () => {
  return (
    <div className='studies-page-padding'>
      <div className='studies-page-title'>Research</div>
      <div className='research-comp'><Research /></div>
      <div className='studies-seeMoreButton'>
        <ButtonCustom title={"See More"} />
      </div>
      <div className='studies-page-title'>Project</div>
      <div className='project-comp'><Project /></div>
      <div className='studies-seeMoreButton'>
        <ButtonCustom title={"See More"} />
      </div>
    </div>
  )
}


export default StudiesPage;
