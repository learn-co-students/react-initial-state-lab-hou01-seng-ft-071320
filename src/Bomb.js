// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount,

        }
    }

    response = (time)=>{
        if(time === 0){
            return "Boom!"
        } else {
            return `${time} seconds left before I go boom!`
        }
    }

    render(){
        return (
            <div>
                {this.response(this.state.secondsLeft)}
            </div>
        )
    }
}