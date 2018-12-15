import React, { Component } from 'react';

// SCSS
import '../scss/Carousel.scss';

// Data
import carouselData from '../carouselData';

class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            properties: carouselData.properties,
            property: carouselData.properties[Math.floor(Math.random() * 5)]
        }
    }
    // Next button goes forward by 1
    nextProperty = () => {
        const newIndex = this.state.properties.indexOf(this.state.property)+1
        this.setState({
            property: carouselData.properties[newIndex]
        })
    }
    // Previous button goes back by 1
    prevProperty = () => {
        const newIndex = this.state.properties.indexOf(this.state.property)-1
        this.setState({
            property: carouselData.properties[newIndex]
        })
    }

    componentDidMount() {
        this.auto = setInterval(() => {
            // Reset index value
            var resetIndex = 0;
            // Get current property index value
            var currentIndex = this.state.properties.indexOf(this.state.property);
            var propertiesLength = this.state.properties.length - 1;
            if (currentIndex < propertiesLength) {
                this.setState({
                    property: carouselData.properties[currentIndex + 1]
                })
            } else if (currentIndex === propertiesLength) {
                this.setState({
                    property: carouselData.properties[resetIndex]
                })
            }
        }, 6000);
    }
    componentWillUnmount() {
        clearInterval(this.auto);
    }

    render() {
        const {properties, property} = this.state;
        return (
            <div className="carousel">
                <div className="title">
                    <div></div>
                    <h1>Bello Italiano</h1>
                    <div></div>
                </div>
                <div className="images-container">
                    {/* Current image */}
                    <div className="current-image" style={{backgroundImage: 'url(' + this.state.property + ')'}}></div>
                </div>
                <div className="controller">
                    {/* Previous button */}
                    <button onClick={() => this.prevProperty()} 
                    disabled={properties.indexOf(property) === 0} 
                    className="left">
                        Prev
                    </button>
                    {/* Next button */}
                    <button onClick={() => this.nextProperty()} 
                    disabled={properties.indexOf(property) === carouselData.properties.length-1} 
                    className="right">
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default Carousel;