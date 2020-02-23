import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Resume.css'
import resume from '../../images/MichaelSchneider.jpg'

class Resume extends Component {

  render () {
    return (
      <section className="resume_section">
        <div>
          <Link to="/space-towel/bio">
            <p id="resume_close">X</p>
          </Link>
          <a className="resume_link" href="https://resume.creddle.io/embed/9ea9sgy60xm" target="_blank" rel="noopener noreferrer">
            HTML link
          </a>
        </div>
        <iframe id="resume" title="MichaelSchneiderResume" src="https://resume.creddle.io/embed/9ea9sgy60xm" seamless></iframe>
      </section>
    )
  }
}

export default Resume;