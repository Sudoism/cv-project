import React, { Component } from 'react';
import General from './components/General';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      //exampple: [] example state
    };
  }

  render() {
    // const { example } = this.state; example state

  return (
    <div>
        <Header/>
        <General/>
    </div>
  );
  }
};

export default App;
