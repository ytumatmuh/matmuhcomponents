import React from 'react'
import './departmentSegment.css'
import { useTranslation } from 'react-i18next'


const DepartmentSegment = () => {
  const { t } = useTranslation();
    

  return (
    <div className='department-segment-container'>
      <div className='department-segment-mobile-bck'><div className='department-mobile-title'><h1>{t('mtmdesctitle')}</h1></div></div>
      <div className="image-frame">
        <img src="/images/ytukmf.webp" alt="Matmuh_image" />
      </div>
        <div className='department-segment-text'>
          <div className='department-title'><h1>{t('mtmdesctitle')}</h1></div>
            
            <p>{t('mtmdesc')}</p>
            <p>{t('mtmworkar')}</p>
            <p>{t('mtmworkarlist')}</p>
        </div>
    </div>
  )
}

export default DepartmentSegment