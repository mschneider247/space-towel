import React from 'react';
import './StarWars.css';
import sf1 from '../../images/SF1.jpg';
import sf2 from '../../images/SF2.jpg';
import sf3 from '../../images/SF3.jpg';
import sf4 from '../../images/SF4.jpg';
import sf5 from '../../images/SF5.jpg';

const StarWars = () => {

  return (
    <section className="project_section">
      <h1 className="project_title">SWAPI</h1>
      <div className="project_tech">
        <ul>
          <h3>
            Areas of Focus:
          </h3>
          <li>
            Paired Project utlizing React, ES6, propTypes, CSS3 and RESTful API
          </li>
          <li>
            Resolved Fetches, Promise Objects for movie and character data
          </li>
          <li>
            CSS allows scrolling text to appear just like in the movies
          </li>
          <li>
            Tested using Jest/Enzyme
          </li>
        </ul>
      </div>
      <div className="btn_div">
        <a href="https://mschneider247.github.io/swapi-trivia/#/">
          <button className="project_btn">
            Live Site
          </button>
        </a>
        <a href="https://github.com/mschneider247/swapi-trivia">
          <button className="project_btn">
            Github
          </button>
        </a>
        <p>
          SWAPI is a React App based around the Star Wars API that displays different categories of Star Wars data, starting with movies, then diving deeper into 10 characters
          for each movie. Users can see important information like characters' species and homeworld. Each movie displays its own introductory scrolling text in the unique Star Wars fasion. Plus user's can save their favorite characters and view then all on one page!
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

export default StarWars;