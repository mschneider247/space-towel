import React, { Component } from 'react';
import  { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import SpaceFarmer from '../SpaceFarmer/SpaceFarmer';
import Bio from '../Bio/Bio'
import Nav from '../Nav/Nav';
import GutenReader from '../GutenReader/GutenReader';
import StarWars from '../StarWars/StarWars';
import Maps from '../Maps/Maps';


class App extends Component {
  constructor() {
    super();
    this.state = {
      topic: 'Bio'
    }
  }

  updateTopic = (topic) => {
    console.log("Update topic! ", topic)
    this.setState({ topic: topic})
  }

  render () {
    return (
      <section>
        <section id="background">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </section>
        <main>
          <section>
            <Header />
          </section>
          <section>
            <Nav updateTopic={this.updateTopic}/>
          </section>
          <section>
            <Route exact path='/' render={() => <Bio />} />
          </section>
          <section>
            <Route path='/bio' render={() => <Bio />} />
            <Route path='/spaceFarmer' render={() => <SpaceFarmer />} />
            <Route path='/gutenReader' render={() => <GutenReader />} />
            <Route path='/starWars' render={() => <StarWars />} />
            <Route path='/maps' render={() => <Maps />} />
          </section>
        </main>
      </section>
    );
  }
}

export default App;
