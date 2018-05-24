import React, { Component } from 'react';
import './App.css';
import BoxGrid from './BoxGrid';
const axios = require('axios');

class App extends Component {
  //creat state that starts with a counter of 1
  constructor(){
    super()
    this.state = ({
      player: localStorage.getItem('player1'),
      player2c: localStorage.getItem('player2'),
      player1c: localStorage.getItem('player1'),
      box: [
        {
          class: ''
        }
      ]
    })
  }
  // onClick will add 1 to counter every time line button is clicked
  turn=(id, side)=>{
    // let play = this.state.player.counter+1;
    //map
    //copy will map for index and match with index inside of state
    //in that box will contatinate class name and side
    let copy = Array.from(this.state.box);
    let newcopy = copy.map((element, index)=>{
        if(index === id) {
          element.class = element.class + side + this.state.player + ' ';
        }
        return element;
    })
    this.setState({
      box: newcopy,
      player : this.state.player===this.state.player2c ? this.state.player1c : this.state.player2c,
    })
  }
  //function if current counter is either Even or Odd, players choosen color will be that border color
  componentDidMount(){
    axios.get('http://localhost:8080/')
         .then(results =>{
          //  console.log(results.data);
            this.setState({
              box: results.data
            })
           console.log(results.data);
            
         })
         .catch(error =>{
           console.log(error);
         })
    console.log(this.state.box);     
  }
  render() {
      if(!localStorage.getItem('player1') && !localStorage.getItem('player2')){
        return (

          <h1>hello</h1>
        )
      }
      else{
      return (
          <div className="container">
            <BoxGrid turn = {this.turn} class={this.state.box} current={this.state.player}/>
          </div>
        );
  }
}
}

export default App;



//fill box depending on which player completes it
      //
// starter page to set player colord in localStorage
