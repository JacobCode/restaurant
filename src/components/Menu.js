import React, { Component } from 'react';

// Images
import Img from '../images/menu.png';

// Menu Data
import menu from '../menuItems';

// Components
import MenuCategories from './MenuCategories';

// SCSS
import '../scss/Menu.scss';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            lunch: menu[0],
            dinner: menu[1],
            beverages: menu[2],
            dessert: menu[3],
            wine: menu[4]
        }
    }
    render() {
        const categories = [
            this.state.lunch,
            this.state.dinner,
            this.state.beverages,
            this.state.dessert,
            this.state.wine
        ]

        return (
            <div className="menu">
                <div className="title">
                    <div className="vertical_line"></div>
                    <h1>Menu</h1>
                </div>
                <MenuCategories categories={categories} />
                {/* Download Menu PNG */}
                <div className="download-menu">
                    <a href={Img} download="menu">Download</a>
                </div>
            </div>
        )
    }
}

export default Menu;