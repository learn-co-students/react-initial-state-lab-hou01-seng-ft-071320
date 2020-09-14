// your ImageSlider code here!
import React, { Component } from 'react';


export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    
    increment = () => {
        const newSlideIndex = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: newSlideIndex
        })
    }
    
    render() {
        
      return (
        <div onClick={this.increment}>
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        </div>

      )
    }
}