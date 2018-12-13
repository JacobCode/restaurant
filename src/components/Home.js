import React from 'react';

// Components
import Carousel from './Carousel';
import Menu from './Menu';
import Reviews from './Reviews';

// SCSS

const Home = () => {
    return (
        <div id="home" className="main-container">
            <Carousel />
            <Menu />
            <Reviews />
        </div>
    )
}

export default Home;