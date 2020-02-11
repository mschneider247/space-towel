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
      <section className="spaceFarmer_images">
        <h1 className="project_title">Space Farmer</h1>
        <div>
          <h2>
            Live Site
          </h2>
          <h2>
            Github
          </h2>
        </div>
        <img className="tRow" src={sf1} alt="img1"/>
        <img className="tRow" src={sf2} alt="img2"/>
        <img className="bRow" src={sf3} alt="img3"/>
        <img className="bRow" src={sf4} alt="img4"/>
        <img className="bRow" src={sf5} alt="img5"/>
      </section>
      <section className="spaceFarmer_info">
        <div>
          <ul>
            <h3>
              Tech Used:
            </h3>
            <li>
              tech 1
            </li>
            <li>
              tech 2
            </li>
            <li>
              tech 3
            </li>
            <li>
              tech 4
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              yeaaah!
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default SpaceFarmer;