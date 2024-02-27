import React from 'react'
import './detailPageStyle.css';

const DetailPage = ({ date, title, content, photoUrl }) => {
  return (
    <div className='detailContainer'>
      <div className='detailContent'>

          <img src={photoUrl} alt='DetailImage' className='detailImage'/>
        <h5 className='date'>{date}</h5>

        <div className='contentContainer'>
          <h2 className='contentHeader'>{title.toUpperCase()}</h2>
          {content.map((paragraph) => (
            <p className='contentText' key={content.indexOf(paragraph)}> {paragraph}</p>
          ))}
        </div>

      </div>
    </div>
  );
};


export default DetailPage;