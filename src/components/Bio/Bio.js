import React from 'react';
import './Bio.css'
import bioPic from '../../images/MSchneiderPic.jpg'

const Bio = () => {

  return (
    <section className="bio_section">
      <div className="bio_div">
        <div className="bio_div-pic">
          <img className="bio_pic" src={bioPic} alt='Bio Pic'/>
        </div>
        <div className="about_div">
          <h3 id="about_me_header">About Me</h3>
          <p id="about_me_text">Ready to dive into new technologies, I enjoy code challenges and am excellent at time blocking and changing strategies when stuck. I bring optimism and a big picture view to groups, but am also confident working alone. Comfortable entering situations with little or no guidance, finding solutions and implementing them.</p>
        </div>
      </div>
      <div className="bio_lists">
        <ul className="list">
          <h3>Looking For:</h3>
          <li>Front End Web/Mobile/AR Development</li>
          <li>Continued learning</li>
          <li>Diverse, skilled team of individuals</li>
          <li>Embrace of story telling</li>
        </ul>
        <ul className="list">
          <h3>Best At:</h3>
          <li>ES6, React, React-Native, Redux</li>
          <li>CSS3, Semantic HTML</li>
          <li>Site Design and Mockups</li>
          <li>Testing FE applications</li>
        </ul>
        <ul className="list"> 
          <h3>Preferred locations:</h3>
          <li>Denver, CO</li>
          <li>Boulder, CO</li>
          <li>Colorado Springs, CO</li>
          <li>Remote</li>
        </ul>
      </div>
    </section>
  )
};

export default Bio;