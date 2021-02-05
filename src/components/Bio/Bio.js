import React from 'react';
import './Bio.css'
import bioPic from '../../images/profile3.jpg'

const Bio = () => {

  return (
    <section className="bio_section">
      <div className="bio_div">
        <div className="bio_div-pic">
          <img className="bio_pic" src={bioPic} alt='Bio Pic'/>
        </div>
        <div className="about_div">
          <h3 id="about_me_header">About Me</h3>
          <p id="about_me_text">My passion for games, graphic-design and client relationships pair directly with software development, where the user’s experience is paramount. I became interested in coding as a means to amplify the reach of my artwork through website design and deployment. I’m excited to continue this work, reaching larger audiences and leaving a meaningful impact on their lives, whether through classic web apps, mobile or artificial and virtual realities.</p>
        </div>
      </div>
      <div className="bio_lists">
        <ul className="list">
          <h3>Looking For:</h3>
          <li>Web/Mobile/AR/VR Development</li>
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