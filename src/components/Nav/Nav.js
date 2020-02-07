import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      topics: [
        {
          id: 1,
          name: 'Bio',
          value: 'bio',
          isChosen: true,
        },
        {
          id: 2,
          name: 'Space Farmer',
          value: 'spaceFarmer',
          isChosen: false,
        },
        {
          id: 3,
          name: 'Guten Reader',
          value: 'gutenReader',
          isChosen: false,
        },
        {
          id: 4,
          name: 'Maps',
          value: 'maps',
          isChosen: false,
        },
        {
          id: 5,
          name: 'Color_Picker',
          value: 'colorPicker',
          isChosen: false,
        },
        {
          id: 6,
          name: 'Star Wars Trivia',
          value: 'starWars',
          isChosen: false,
        },
        {
          id: 7,
          name: 'Illustrations/Paintings',
          value: 'illustrationsPaintings',
          isChosen: false,
        }
      ]
    }
  }

  handleClick = () => {
    console.log("button clicked")
  }

  createButtons = () => {
    return this.state.topics.map((topic, index) => {
      let selected = 'btn'
      if (topic.isChosen) {
        selected = 'selected'
      }
      let btnId = `btn${index + 1}`
      return (
        <button key={index + 1} 
                id={btnId} 
                className={selected} 
                value={topic.value}
                onClick={this.handleClick}>
                {topic.name}
        </button>
      )
    })
  }

  render() {
    return (
      <section className="nav_section">
        {this.createButtons()}
      </section>
    )
  }
};

export default Nav;