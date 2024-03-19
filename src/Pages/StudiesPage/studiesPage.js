
import React from 'react'
import './studiesPage.css';
import Research from '../../Services/researchService';
import Project from '../../Services/projectService';
import ButtonCustom from '../../Components/CustomButton/button';
import { useTranslation } from "react-i18next";
const StudiesPage = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className='studies-page-padding'>
      <div className='studies-page-title'>{t('research')}</div>
      <div className='research-comp'><Research /></div>
      <div className='studies-seeMoreButton'>
        <ButtonCustom title={t('smore')} />
      </div>
      <div className='studies-page-title'>{t('project')}</div>
      <div className='project-comp'><Project /></div>
      <div className='studies-seeMoreButton'>
        <ButtonCustom title={t('smore')} />
      </div>
    </div>
  )
}


export default StudiesPage;
