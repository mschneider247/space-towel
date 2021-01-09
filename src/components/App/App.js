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
import Resume from '../Resume/Resume'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentTopic: '',
    }
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
            <Route path='/resume' render={() => <Resume />} />
            <Header />
          </section>
          <section>
            <Nav />
          </section>
          <section>
            <Route exact path='/space-towel/' render={() => <Bio />} />
          </section>
          <section>
            <Route path='/space-towel/bio' render={() => <Bio />} />
            <Route path='/space-towel/spaceFarmer' render={() => <SpaceFarmer />} />
            <Route path='/space-towel/gutenReader' render={() => <GutenReader />} />
            <Route path='/space-towel/starWars' render={() => <StarWars />} />
            <Route path='/space-towel/maps' render={() => <Maps />} />
          </section>
        </main>
      </section>
    );
  }
}

export default App;
