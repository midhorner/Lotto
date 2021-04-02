import React, { Component } from 'react';
import Ball from "./Ball.js";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Pick Six",
    numBalls: 6,
    maxNum: 40
  }
  // built without constructor
  state = {nums: Array.from({ length: this.props.numBalls })
    // Array.from is your friend. Can be used to make arrays from existning values or build new arrays with null values
  }
  // arrow functions so no binding neccessary
  generate = (e) => {
    this.setState(curState => ({
      nums: curState.nums.map(
        () => Math.floor(Math.random() * this.props.maxNum) + 1
      )
      // fills the array with a different random number
    }));
    // when changing state callback function! => makes a new array and then changes the state based on the values of that array
  }
  handleClick = (e) => {
    this.generate();
  };
  // handleClick is standard javascript button function --> you can call multiple functions with one click
  render() {
    return(
      <div className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <Ball num={n}/>)}
          {/* standard react loop that renders the number of components based on the array being looped over */}
        </div>
        <br/>
        <button onClick={this.handleClick}>Generate!</button>
      </div>
    );
  }
}

export default Lottery;