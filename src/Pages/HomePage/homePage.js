import React from "react";
import Announcement from "../../Components/Announcements/announcements";
import { Link } from "react-router-dom";
import ButtonCustom from "../../Components/CustomButton/button";
import { useTranslation } from 'react-i18next'
import './homePage.css'

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div className="homepage-cover">
      <Announcement />
      <div className="homepage-button">
      <Link to={"/announcements"}>
        <ButtonCustom title={t('smore')}/>
      </Link>
      </div>
      
    </div>
  );
};

export default Homepage;
