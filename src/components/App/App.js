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
            <Nav />
          </section>
          <section>
            <Route exact path='/' render={() => <Bio />} />
          </section>
          <section>
            <Route path='/resume' render={() => <Resume />} />
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
