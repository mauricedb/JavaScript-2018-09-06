import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Greeter from './components/Greeter';
import Person from './components/Person';
import Jokes from './components/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>De demo app</h1>
        </header>
        <Greeter firstName="Maurice" />
        <Person />
        <Jokes />
        {/* <Greeter firstName={new Date()} /> */}
        {/* <Greeter /> */}
      </div>
    );
  }
}

export default App;
