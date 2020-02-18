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
          <a className="resume_link" href="https://resume.creddle.io/embed/9ea9sgy60xm">
            HTML link
          </a>
        </div>
        <iframe id="resume" title="MichaelSchneiderResume" src="https://resume.creddle.io/embed/9ea9sgy60xm"
        width="850" height="1100" seamless></iframe>
      </section>
    )
  }
}

export default Resume;