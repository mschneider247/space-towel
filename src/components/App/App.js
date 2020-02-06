import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Bio from '../Bio/Bio';
import Nav from '../Nav/Nav';
import Content from '../Content/Content';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
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
          </div>
        </section>
        <main>
          <section>
            <Header />
          </section>
          <section>
            <Bio />
          </section>
          <section>
            <Nav />
          </section>
          <section>
            <Content />
          </section>
        </main>
      </section>
    );
  }
}

export default App;
