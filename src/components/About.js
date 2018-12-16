import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// SCSS
import '../scss/About.scss';

class About extends Component {
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
                <div id="about" className="main-container">
                    <div className="main-content">
                        <div className="main-text">
                            <div className="text">
                                <h1>Reserve a table today</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi quas, ullam consequatur placeat dolorem unde, 
                                quae nobis enim dolores</p>
                                <NavLink to="/reservations" exact>Book Now</NavLink>
                            </div>
                        </div>
                        <div className="main-image">
                            
                        </div>
                    </div>
                    <div className="summary">
                        <div className="content">
                            <h1>&quot;About Us&quot;</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi quas, ullam consequatur placeat dolorem unde, 
                            quae nobis enim dolores repellendus quo? Dolore laudantium ab nisi impedit cumque maiores aperiam pariatur nemo commodi 
                            ducimus, rem fugiat facere inventore sint alias. Earum alias vero sapiente facere eum. Consequuntur, facere.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi quas, ullam consequatur placeat dolorem unde, 
                            quae nobis enim dolores repellendus quo? Dolore laudantium ab nisi impedit cumque maiores aperiam pariatur.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi quas, ullam consequatur placeat dolorem unde, 
                            quae nobis enim dolores repellendus quo? Dolore laudantium ab nisi impedit cumque maiores aperiam pariatur. Earum 
                            alias vero sapiente facere eum. Consequuntur, facere eum. Consequuntur, facere.
                            </p>
                        </div>
                    </div>
                    <div className="more-info">
                        <div className="row">
                            <div className="box">
                                <div className="text">
                                    <h2>Our Staff</h2>
                                    <p>Bello is a place for family, the one you’re born into and the one you create around food, love and friendship. 
                                    Our attentive staff ensures that your entire dining experience with us is stellar from beginning to end.
                                    </p>
                                </div>
                            </div>
                            <div className="image image1">

                            </div>
                        </div>
                        <div className="row row-reverse">
                            <div className="box">
                                <div className="text">
                                    <h2>Our Food</h2>
                                    <p>Every dish at Bello has it's own story from the traditional recipes direct from Lebanon, to modern updates 
                                    that tell the history of our team, of our cooks and chefs who have left their mark on our kitchen. 
                                    </p>
                                </div>
                            </div>
                            <div className="image image2">

                            </div>
                        </div>
                        <div className="row">
                            <div className="box">
                                <div className="text">
                                    <h2>Our Staff</h2>
                                    <p>Bello is a place for family, the one you’re born into and the one you create around food, love and friendship. 
                                    Our attentive staff ensures that your entire dining experience with us is stellar from beginning to end.
                                    </p>
                                </div>
                            </div>
                            <div className="image image1">

                            </div>
                        </div>
                    </div>
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

export default About;