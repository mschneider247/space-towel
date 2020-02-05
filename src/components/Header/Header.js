import React from 'react';
import './Header.css'
import gitHub from '../../images/github.svg'
import linkedIn from '../../images/linkedin.png'
import bioPic from '../../images/MSchneiderPic.jpg'

const Header = () => {

  return (
    <section className="bio_section">
      <div className="bio_div">
        <h1 id="name">Michael Schneider</h1>
        <h1 id="title">Front End Developer</h1>
        <div className="bio_div-content">
          <div className="bio_div-pic">
            <img className="bio_pic" src={bioPic} alt='Bio Pic'/>
          </div>
          <div className="bio_div-social">
            <p>mschneider247@gmail.com</p>
            <a href="https://github.com/mschneider247">
              <img className="social_icon" src={gitHub} alt="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/mschneider247/">
              <img className="social_icon" src={linkedIn} alt="LinkedIn"/>
            </a>
          </div>
        </div>
        <h3>About Me:</h3>
        <p id="about_me">Ready to dive into new technologies, I enjoy code challenges and am excellent at time blocking and changing strategies when stuck. I bring optimism and a big picture view to groups, but am also confident working alone. Comfortable entering situations with little or no guidance, finding solutions and implementing them.</p>
      </div>
      <div className="bio_lists">
        <ul className="list">
          <h3>Looking For:</h3>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <ul className="list">
          <h3>Best At:</h3>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
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

export default Header;