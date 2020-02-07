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

  render() {
    let selected = "btn"
    return (
      <section className="nav_section">
        <button id="btn1" className={selected}>
          Bio
        </button>
        <button className={selected}>
          Space Farmer
        </button>
        <button className={selected}>
          Color Picker
        </button>
        <button className={selected}>
          Star Wars API
        </button>
        <button className={selected}>
          Maps
        </button>
        <button id="btn7" className={selected}>
          Illustrations/Paintings
        </button>
      </section>
    )
  }
};

export default Nav;