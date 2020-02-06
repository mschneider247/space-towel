import React from 'react';
import './Header.css'
import gitHub from '../../images/github.svg'
import linkedIn from '../../images/linkedin.png'

const Header = () => {

  return (
    <section className="bio_section">
      <div className="bio_div">
        <h1 id="name">Michael Schneider</h1>
        <h1 id="title">Front End Developer</h1>
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
    </section>
  )
};

export default Header;