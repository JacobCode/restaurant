import React from 'react';

const MenuCategories = ({categories}) => {
    const lunch = categories[0];
    const dinner = categories[1];
    const beverages = categories[2];
    const dessert = categories[3];
    const wine = categories[4];

    // Category names
    var categoryNames = ['Lunch', 'Dinner', 'Beverages', 'Dessert', 'Wine'];

    const lunchCat = lunch.map((item, i) => {
        return (<div className="item" key={i}><p>{item.title}</p><span>{item.desc}</span></div>)
    });
    const dinnerCat = dinner.map((item, i) => {
        return (<div className="item" key={i}><p>{item.title}</p><span>{item.desc}</span></div>)
    });
    const beveragesCat = beverages.map((item, i) => {
        return (<div className="item" key={i}><p>{item.title}</p><span>{item.desc}</span></div>)
    });
    const dessertCat = dessert.map((item, i) => {
        return (<div className="item" key={i}><p>{item.title}</p><span>{item.desc}</span></div>)
    });
    const wineCat = wine.map((item, i) => {
        return (<div className="item" key={i}><p>{item.title}</p><span>{item.desc}</span></div>)
    });

    // Category items in each category
    var categoryItems = [lunchCat, dinnerCat, beveragesCat, dessertCat, wineCat];

    const categoryList = categories.map((category, i) => {
        // Return 5 Categories
        return (
            <div className="category" key={i}>
                <h3>{categoryNames[i]} <div></div></h3>
                <div className="category-items">
                    {categoryItems[i]}
                </div>
            </div>
        )
    });

    return (
        <div className="menu-categories">
            {categoryList}
        </div>
    )
}

export default MenuCategories;