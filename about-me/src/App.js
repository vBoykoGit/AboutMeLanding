import React, { Component } from 'react';
import './css/style.scss';
import Header from './components/Header';
import About from './components/About';
import TimeLine from './components/TimeLine';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <TimeLine />
        <Portfolio />
      </div>
    );
  }
}

export default App;
