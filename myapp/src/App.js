import React, { Component } from 'react';
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App!</h1>
        <p>Shall We :)</p>
        <Ninjas />
      </div>
    );
  }    
}

export default App;
