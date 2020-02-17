import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Resume.css'

class Resume extends Component {

  render () {
    return (
      <section className="resume_section">
        <div>
          <Link to="/">
            X
          </Link>
        </div>
        <p>Resume Yo</p>
      </section>
    )
  }
}

export default Resume;