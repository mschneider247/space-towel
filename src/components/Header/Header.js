import React from 'react';
import './Header.css'
import gitHub from '../../images/github.png'
import linkedIn from '../../images/linkedin.png'

const Header = () => {

  return (
    <section className="header_section">
      <section className="title_section">
        <div className="title_div-titles">
          <h1 id="name">Michael Schneider</h1>
          <h1 id="title">Front End Developer</h1>
        </div>
        <div className="title_div-social">
          <p>mschneider247@gmail.com</p>
          <a href="https://github.com/mschneider247">
            <img id="github" className="social_icon" src={gitHub} alt="GitHub"/>
          </a>
          <a href="https://www.linkedin.com/in/mschneider247/">
            <img id="linkedin" className="social_icon" src={linkedIn} alt="LinkedIn"/>
          </a>
        </div>
      </section>
    </section>
  )
};

export default Header;