import React from 'react'
import './languageSelector.css'
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const{i18n} = useTranslation()

    const clickHandle = async lang => {
        await i18n.changeLanguage(lang)
    }

  return (
    <div className='selector-container'>
        <button onClick={() => clickHandle('tr')} className='flag-button-tr'>
        </button>
        <button onClick={() => clickHandle('en')}
        className='flag-button-en'>
        </button>
    </div>
  )
}

export default LanguageSelector