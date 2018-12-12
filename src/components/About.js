import React from 'react';

// SCSS
import '../scss/About.scss';

const About = () => {
    return (
        <div id="about" className="main-container">
            <div className="main-image">

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
                            <p>ilili is a place for family, the one you’re born into and the one you create around food, love and friendship. 
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
                            <p>Every dish at ilili has it's own story from the traditional recipes direct from Lebanon, to modern updates 
                            that tell the history of our team, of our cooks and chefs who have left their mark on our kitchen. 
                            </p>
                        </div>
                    </div>
                    <div className="image image2">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;