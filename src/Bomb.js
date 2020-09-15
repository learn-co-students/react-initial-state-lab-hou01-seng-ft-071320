import React from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component{
    constructor(props){
        super()
        this.state={
            secondsLeft: props.initialCount
        }
    }
 
    render(){
        if (this.state.secondsLeft !== 0){
            return  `${this.state.secondsLeft} seconds left before I go boom!` 
        }
        else 
        return (`Boom!`) 
        
       }
   }