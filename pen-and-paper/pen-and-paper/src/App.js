import React, { Component } from 'react';
import './App.css';
import BoxGrid from './BoxGrid';

class App extends Component {
  //creat state that starts with a counter of 1
  constructor(){
    super()
    this.state = ({
      counter: 0
    })
  }
  //onClick will add 1 to counter every time line button is clicked
  turn=(index, side)=>{
    let play = this.state.counter+1;
    this.setState({
      counter: play
    })
    console.log(this.state.counter);
    console.log(side);
  }
  //function if current counter is either Even or Odd, players choosen color will be that border color
  render() {
    return (
      <div className="container">
        <BoxGrid turn = {this.turn}/>
      </div>
    );
  }
}

export default App;
