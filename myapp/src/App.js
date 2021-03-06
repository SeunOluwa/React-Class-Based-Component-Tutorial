import React, { Component } from 'react';
import Ninjas from "./Ninjas";
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: "Seun", age: 22, belt: "black", id: 1 },
      { name: "Trust", age: 21, belt: "purple", id: 2 },
      { name: "Emmanuel", age: 22, belt: "blue", id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas
    });
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas
    });
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>React App!</h1>
        <p>Shall We :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }    
}

export default App;
