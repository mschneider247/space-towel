import React from 'react';
import './GutenReader.css';

const GutenReader = () => {

  return (
    <section className="project_section">
      <h1 className="project_title">Guten Reader</h1>
      <div className="project_tech">
        <ul>
          <h3>
            Areas of Focus:
          </h3>
          <li>
            Group Project, Front-End Team
          </li>
          <li>
            Learn and test a new framework, React Native
          </li>
          <li>
            Utilize different network requests like GET, POST, DELETE & PATCH
          </li>
          <li>
            Learn how to team up and work efficiently with another team and their specialties
          </li>
          <li>
            Follow a professional GitHub workflow.
          </li>
        </ul>
      </div>
      <div className="btn_div">
        <a href="https://github.com/mschneider247/space-farmer">
          <button className="project_btn">
            Github
          </button>
        </a>
        <p>
          Living in a small, paper-thin walled apartment in Denver, Fenton was reading a book late one night. As the story is intensifying, so is Fenton's heart rate, and also the plot in neighbor's TV show in the apartment next door. Fenton turns the page to read something astonishing as the show reaches its peak plot and music volume!!
          Guten Reader is an eReader that performs sentiment analysis of the text on the page and plays a song as you read that matches the mood of text!
        </p>
      </div>
      <div className="project_images">
        <img className="screenshots" src="https://user-images.githubusercontent.com/50784336/72082772-ee832000-32bd-11ea-9c92-22acc3bef580.png" alt="splashscreen"/>
        <img className="screenshots" src="https://user-images.githubusercontent.com/50784336/72039160-39bb1580-3261-11ea-997c-d5f0b74d824d.png" alt="screenshot1"/>
        <img className="screenshots" src="https://user-images.githubusercontent.com/50784336/72039163-3b84d900-3261-11ea-8650-35270fb716c9.png" alt="screenshot2"/>
        <img className="screenshots" src="https://user-images.githubusercontent.com/50784336/72038922-61f64480-3260-11ea-97be-17cf3fae60a3.png" alt="screenshot3"/>
      </div>
    </section>
  )
}

export default GutenReader;