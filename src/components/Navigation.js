import React from 'react';
import { NavLink } from 'react-router-dom';

// SCSS
import '../scss/Navigation.scss'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="links">
                <NavLink to="/" exact><i className="fas fa-circle"></i>Home</NavLink>
                <NavLink to="/about" exact><i className="fas fa-circle"></i>About</NavLink>
                <NavLink to="/reservations" exact><i className="fas fa-circle"></i>Booking</NavLink>
            </div>
            <div className="logo">
                <p>Bello Italiano <i className="fas fa-glass-cheers"></i></p>
            </div>
        </div>
    )
}

export default Navigation;