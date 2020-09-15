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
        const newCount = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: newCount
        })
    }

    render(){
        return (
            <div onClick={this.increment}>
                {`I am on slide ${this.state.currentSlideIndex}`}
            </div>
        )
    }
}