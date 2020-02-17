import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Resume.css'
import resume from '../../images/MichaelSchneider.jpg'

class Resume extends Component {

  render () {
    return (
      <section className="resume_section">
        <div>
          <Link to="/">
            <p id="resume_close">X</p>
          </Link>
        </div>
        <img id="resume" src={resume} alt="Michael Schneider Resume"/>
      </section>
    )
  }
}

export default Resume;