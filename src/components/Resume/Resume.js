import React, { Component } from 'react';

class Resume extends Component {

  componentDidMount = () => {
    this.props.updateTopic('turd')
  }

  render () {
    return (
      <section>
        <p>Resume Yo</p>
      </section>
    )
  }
}

export default Resume;