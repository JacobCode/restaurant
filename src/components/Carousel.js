import React, { Component } from 'react';

// Carousel data
import data from '../carouselData';

// Components
import Image from './Image';

// SCSS
import '../scss/Carousel.scss';

class Carousel extends Component {
    constructor() {
        super();
        // Properties = all image links
        // Property = random image link from array
        this.state = {
            properties: data.properties,
            property: data.properties[Math.floor(Math.random() * 5)]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.properties.indexOf(this.state.property)+1
        this.setState({
            property: data.properties[newIndex]
        })
    }
    prevProperty = () => {
        const newIndex = this.state.properties.indexOf(this.state.property)-1
        this.setState({
            property: data.properties[newIndex]
        })
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
                    <Image property={property} />
                </div>
                <div className="controller">
                    <button onClick={() => this.prevProperty()} 
                    disabled={properties.indexOf(property) === 0} 
                    className="left">
                        Prev
                    </button>
                    <button onClick={() => this.nextProperty()} 
                    disabled={properties.indexOf(property) === data.properties.length-1} 
                    className="right">
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default Carousel;