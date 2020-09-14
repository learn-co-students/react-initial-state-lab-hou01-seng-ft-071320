// your Bomb code here!
import React, { Component } from 'react';


export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    increment = () => {
        const newTimerCount = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: newTimerCount
        })
    }
    
    render() {
        let bombText
        if(this.state.secondsLeft > 0){
            bombText = `${this.state.secondsLeft} seconds left before I go boom!`
        }else{
            bombText = "Boom!"
        }

      return (
        <div>
            <h1>{bombText}</h1>
        </div>


      )
    }
}