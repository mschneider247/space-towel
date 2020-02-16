import React from 'react';
import './StarWars.css';
import sw1 from '../../images/swapi_characters.png';
import sw2 from '../../images/swapi_favorites.png';
import sw3 from '../../images/swapi_form.png';
import sw4 from '../../images/swapi_movies-loading.png';

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
        <img className="tRow" src={sw1} alt="img1"/>
        <img className="bRow" src={sw2} alt="img2"/>
        <img className="bRow" src={sw3} alt="img3"/>
        <img className="bRow" src={sw4} alt="img4"/>
      </div>
    </section>
  )
}

export default StarWars;