import React, { Component } from 'react';

// Components
import Carousel from './Carousel';
import Menu from './Menu';
import Reviews from './Reviews';

class Home extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div id="home" className="main-container">
                <Carousel />
                <Menu />
                <Reviews />
            </div>
        )
    }
}

export default Home;