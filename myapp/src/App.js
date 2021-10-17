import React, { Component } from 'react';
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas : [
      { name: "Seun", age: 22, belt: "black", id: 1 },
      { name: "Trust", age: 21, belt: "purple", id: 2 },
      { name: "Emmanuel", age: 22, belt: "blue", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>React App!</h1>
        <p>Shall We :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }    
}

export default App;
