import React from 'react';

// SCSS
import '../scss/Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <h4><i className="fas fa-phone"></i> 800-601-0230</h4>
                <div className="icons">
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i className="fab fa-facebook-square"></i></a>
                    <a href="/"><i className="fab fa-linkedin"></i></a>
                    <a href="/"><i className="fab fa-twitter-square"></i></a>
                </div>
            </div>
            <div className="bottom">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo architecto eveniet, repellat sapiente quia iste amet laboriosam esse.</p>
            </div>
        </div>
    )
}

export default Footer;