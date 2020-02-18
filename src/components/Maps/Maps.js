import React from 'react';
import './Maps.css';
import m2 from '../../images/PlaneOfWater.jpg'
import m3 from '../../images/PirateCove.jpg'
import m5 from '../../images/BayIgh.jpg'
import m6 from '../../images/TuringQuest.jpg'
import m7 from '../../images/GartPrison.jpg'

const Maps = () => {

  return (
    <section className="project_section">
      <h1 className="project_title">Maps</h1>
      <div className="map_tech">
        <ul>
          <h3>
            Areas of Focus:
          </h3>
          <li>
            Solo Projects designed to provide a story-telling foundation
          </li>
          <li>
            Sketched by hand and inked/colored with PhotoShop
          </li>
          <li>
            Bright Colors and comic like approach encourage the audience to engage with the different elements
          </li>
        </ul>
      </div>
      <div className="description_div">
        <p>
          Maps make excellent starting places for games. Maps give stories foundations to build on. Simply giving places names and physical locations begins to tell the story of their relationships. This encourages the audience to question what adventures and characters they might find and in the same way drives the story teller to fill in details. Many of the best stories begin with a map.
        </p>
      </div>
      <div className="project_images">
        <img className="screenshots2" src={m6} alt="TuringQuest"/>
        <img className="screenshots2" src={m2} alt="PlaneOfWater"/>
        <img className="screenshots3" src={m3} alt="PirateCove"/>
        <img className="screenshots3" src={m5} alt="BayIgh"/>
        <img className="screenshots3" src={m7} alt="OrcMap"/>
      </div>
    </section>
  )
}

export default Maps;