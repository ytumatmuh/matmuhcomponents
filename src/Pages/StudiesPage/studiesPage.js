import React from 'react'
import './studiesPage.css';
import Research from '../../Services/researchService';
import Project from '../../Services/projectService';
import ButtonCustom from '../../Components/CustomButton/button';
const StudiesPage = () => {
  return (
    <div className='page-padding'>
      <div className='page-title'>Research</div>
      <Research />
      <div className='seeMoreButton'>
        <ButtonCustom title={"See More"} />
      </div>
      <div className='page-title'>Project</div>
      <Project />
      <div className='seeMoreButton'>
        <ButtonCustom title={"See More"} />
      </div>
    </div>
  )
}

export default StudiesPage