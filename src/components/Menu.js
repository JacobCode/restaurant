import React from 'react';

// Images
import Img from '../images/menu.png';

// SCSS
import '../scss/Menu.scss';

const Menu = () => {
    return (
        <div className="menu">
            <div className="title">
                <div className="vertical_line"></div>
                <h1>Menu</h1>
            </div>
            <div className="menu-categories">
                <div className="category" id="lunch">
                    <h3>Lunch <i className="fas fa-utensils"></i></h3>
                    <div className="category-items">
                        <div className="item"><p>Spaghetti Bolognese</p><span>Spaghetti, beef, basil, tomatoes, parmesan</span>
                        </div>
                        <div className="item"><p>Chicken Cacciatore</p><span>Chicken, tomato, red wine sauce, onion, mushroom</span>
                        </div>
                        <div className="item"><p>Cajun Pasta</p><span>Shrimp, tomatoes, white wine sauce, linguine</span>
                        </div>
                        <div className="item"><p>Mushroom Risotto</p><span>Seared mushroom, white sauce, parmesan</span>
                        </div>
                    </div>
                </div>
                <div className="category" id="dinner">
                    <h3>Dinner <i className="fas fa-utensils"></i></h3>
                    <div className="category-items">
                        <div className="item"><p>Gnocchi Salad</p><span>Spaghetti, beef, basil, tomatoes, parmesan</span>
                        </div>
                        <div className="item"><p>Rigatoni</p><span>Meatballs, garlic, olive oil, parsley</span>
                        </div>
                        <div className="item"><p>Linguine & Clam Sauce</p><span>Linguine, mushrooms, clam sauce</span>
                        </div>
                        <div className="item"><p>Chicken Parmigiana</p><span>Chicken, mozzarella, marinara</span>
                        </div>
                        <div className="item"><p>Caprese Salad</p><span>Mozzarella, tomatoes, basil, olive oil</span>
                        </div>
                    </div>
                </div>
                <div className="category" id="beverages">
                    <h3>Beverages <i className="fas fa-mug-hot"></i></h3>
                    <div className="category-items">
                        <div className="item"><p>Chai Latte</p><span>Cinnamon, almond milk, vanilla</span>
                        </div>
                        <div className="item"><p>Coffee</p><span>Premium fair trade coffee sourced from Italy</span>
                        </div>
                        <div className="item"><p>Hot Chocolate</p><span>Hot chocolate, whipped cream, marshmallows</span>
                        </div>
                        <div className="item"><p>Green Smoothie</p><span>Kale, cucumber, lime, green apple, ginger</span>
                        </div>
                    </div>
                </div>
                <div className="category" id="dessert">
                    <h3>Dessert <i className="fas fa-cookie-bite"></i></h3>
                    <div className="category-items">
                        <div className="item"><p>Chocolate Mousse</p><span>Chocolate mousse, cream strawberries</span>
                        </div>
                        <div className="item"><p>Nutella Waffles</p><span>Waffles, Nuttella, Strawberries</span>
                        </div>
                        <div className="item"><p>Passion Fruit Panna Cotta</p><span>Panna cotta, passionfruit, red wine syrup</span>
                        </div>
                        <div className="item"><p>Creme Brulee</p><span>Cremé, blueberries, almond sponge, almonds</span>
                        </div>
                    </div>
                </div>
                <div className="category" id="wine">
                    <h3>Wine <i className="fas fa-wine-glass-alt"></i></h3>
                    <div className="category-items">
                        <div className="item"><p>Chardonay</p><span>Almond, apple butter, lightly oaked</span>
                        </div>
                        <div className="item"><p>Rosé</p><span>Watermelon, rose, limes</span>
                        </div>
                        <div className="item"><p>Sauvignon Blanc</p><span>White grape wine</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Download Menu PNG */}
            <div className="download-menu">
                <a href={Img} download="menu">Download</a>
            </div>
        </div>
    )
}

export default Menu;