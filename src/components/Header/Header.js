import React from 'react';
import './Header.css'
import gitHub from '../../images/github.svg'

const Header = () => {

  return (
    <section className="bio_section">
      <div className="bio_div">
        <h1>Michael Schneider</h1>
        <h3>Front End Developer</h3>
        <img alt='Bio Pic'/>
        <p>mschneider247@gmail.com</p>
        <a href="https://github.com/mschneider247">
          <img src={gitHub} alt="GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/mschneider247/">
          <img alt="LinkedIn"/>
        </a>
        <h3>About Me</h3>
        <p>Ready to dive into new technologies, I enjoy code challenges and am excellent at time blocking and changing strategies when stuck. I bring optimism and a big picture view to groups, but am also confident working alone. Comfortable entering situations with little or no guidance, finding solutions and implementing them.</p>
      </div>
      <div className="bio_div">
        <ul> Looking For
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <ul> Best At
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <ul> Preferred locations
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </section>
  )
};

export default Header;