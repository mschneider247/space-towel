import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

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
          name: 'SWAPI',
          value: 'starWars',
          isChosen: false,
        },
        {
          id: 5,
          name: 'Maps',
          value: 'maps',
          isChosen: false,
        },
      ]
    }
  }

  handleClick = async (id) => {
    let setTopics = this.state.topics.map(topic => {
      if (topic.id === id) {
        topic.isChosen = true;
      } else {
        topic.isChosen = false
      }
      return topic;
    });
    await this.setState({ topics: setTopics })
  }

  createButtons = () => {
    return this.state.topics.map((topic, index) => {
      let selected = 'btn'
      if (topic.isChosen) {
        selected = 'selected'
      }
      let btnId = `btn${index + 1}`
      let route = "/space-towel/" + topic.value
      return (
        <Link to={route} key={index + 1}>
          <button  
            id={btnId} 
            className={selected} 
            value={topic.value}
            onClick={() => this.handleClick(index + 1)}
          >
            {topic.name}
          </button>
        </Link>
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