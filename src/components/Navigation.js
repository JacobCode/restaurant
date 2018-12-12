import React from 'react';
import { NavLink } from 'react-router-dom';

// SCSS
import '../scss/Navigation.scss'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="links">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/about" exact>About</NavLink>
                <NavLink to="/reservations" exact>Reservations</NavLink>
                <NavLink to="/blog" exact>Blog</NavLink>
            </div>
            <div className="logo">
                <p>Bello Italiano <i className="fas fa-glass-cheers"></i></p>
            </div>
        </div>
    )
}

export default Navigation;