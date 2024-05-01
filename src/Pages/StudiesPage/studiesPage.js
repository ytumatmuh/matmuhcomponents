
import React from 'react'
import './studiesPage.css';
import ResearchSegment from '../../Segments/ResearchSegment/researchSegment'
import Project from '../../Services/projectService';
import ButtonCustom from '../../Components/CustomButton/button';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
const StudiesPage = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className='studies-page-padding'>
      <div className='studies-page-title'>{t('research')}</div>
      <div className='research-comp'><ResearchSegment /></div>
      <div className='studies-seeMoreButton'>
        <Link to={'/research'}>
        <ButtonCustom title={t('smore')} />
        </Link>
      </div>
      <div className='studies-page-title'>{t('project')}</div>
      <div className='project-comp'><Project /></div>
      <div className='studies-seeMoreButton'>
        <Link to={'/projects'}>
        <ButtonCustom title={t('smore')} />
        </Link>
      </div>
    </div>
  )
}


export default StudiesPage;
