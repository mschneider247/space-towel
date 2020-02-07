import React, { Component } from 'react';
import  { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content'
import Bio from '../Bio/Bio'
import Nav from '../Nav/Nav';


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
            <Route path='/bio' render={() => <Bio />} />
          </section>
        </main>
      </section>
    );
  }
}

export default App;
