import React from 'react';

// Components
import Menu from './Menu';
import Reviews from './Reviews';

// SCSS

const Home = () => {
    return (
        <div id="home" className="main-container">
            {/* <h1>Home</h1> */}
            <Menu />
            <Reviews />
        </div>
    )
}

export default Home;