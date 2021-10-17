import React, { Component } from 'react';
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App!</h1>
        <p>Shall We :)</p>
        <Ninjas name="Seun" age="22" belt="black" />
        <Ninjas name="Seyi" age="20" belt="pink" />
      </div>
    );
  }    
}

export default App;
