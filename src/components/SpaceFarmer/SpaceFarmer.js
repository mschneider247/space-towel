import React from 'react';
import './SpaceFarmer.css';
import sf1 from '../../images/SF1.jpg';
import sf2 from '../../images/SF2.jpg';
import sf3 from '../../images/SF3.jpg';
import sf4 from '../../images/SF4.jpg';
import sf5 from '../../images/SF5.jpg';

const SpaceFarmer = () => {

  return (
    <section className="project_section">
      <h1 className="project_title">Space Farmer</h1>
      <div className="project_tech">
        <ul>
          <h3>
            Areas of Focus:
          </h3>
          <li>
            Solo Project utlizing React, CSS3 and RESTful API
          </li>
          <li>
            Fetches rocket and payload data from an unofficial SpaceX API
          </li>
          <li>
            Gameplay like design allows user to choose farming payload to take to space
          </li>
          <li>
            Created robust testing suite using Jest/Enzyme
          </li>
        </ul>
      </div>
      <div className="btn_div">
        <a href="https://space-farmer.herokuapp.com/">
          <button className="project_btn">
            Live Site
          </button>
        </a>
        <a href="https://github.com/mschneider247/space-farmer">
          <button className="project_btn">
            Github
          </button>
        </a>
        <p>
          You are the Space Farmer! Login and start new proposals
          for your space endevours. Choose between a myriad of different farming supplies to takewith you on your adventure. Once you 've decided what supplies to take you are offered arange of destinations around the solar system. Deppending on the destination you will have different rockets at your disposal. The application will take your choices and determine the total weights and costs for the trip and display these all in a final proposal overview. Too expensive? Create as many proposals as you like!
        </p>
      </div>
      <div className="project_images">
        <img className="tRow" src={sf1} alt="img1"/>
        <img className="tRow" src={sf2} alt="img2"/>
        <img className="bRow" src={sf3} alt="img3"/>
        <img className="bRow" src={sf4} alt="img4"/>
        <img className="bRow" src={sf5} alt="img5"/>
      </div>
    </section>
  )
}

export default SpaceFarmer;