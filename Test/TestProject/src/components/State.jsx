import React, { Component } from 'react'
import { Button } from '@mui/material';
//rcc dile component class create hobe
export default class State extends Component {
  //creating state rconst likhlei constructor create hobe
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };
    
    render() {
    const {count}=this.state;//destructuring
    return (
      <div>
        <div>count = {count}</div>
        <Button variant="outlined" onClick={this.handleIncrement}>Increment</Button>
        <Button variant="outlined" onClick={this.handleDecrement} disabled={count == 0}>Decrement</Button>
        {/* using ternary condition in disable section */}
      </div>
    )
  }
}

