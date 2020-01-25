import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
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
      <main>
        <section>
          <Header />
        </section>
        <section>
          <Nav />
        </section>
        <section>
          <Content />
        </section>
      </main>
    );
  }
}

export default App;
