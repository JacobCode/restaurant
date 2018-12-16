import React, { Component } from 'react';

// Components
import Carousel from './Carousel';
import Menu from './Menu';
import Reviews from './Reviews';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }
    render() {
        if (!this.state.isLoading) {
            return (
                <div id="home" className="main-container">
                    <Carousel />
                    <Menu />
                    <Reviews />
                </div>
            )
        } else {
            return (
                <div className="loading">
                    <div className="loading-image"></div>
                </div>
            )
        }
    }
}

export default Home;