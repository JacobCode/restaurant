import React from 'react';

// SCSS
import '../scss/Reservations.scss';

const Reservations = () => {
    return (
        <div id="reservations" className="main-container">
        <h1>Book A Table</h1>
            <form>
                <label>Date</label>
                <input type="date" name="date" required></input>
                <label>Time</label>
                <input type="text" required></input>
                <label>Party</label>
                <select name="party">
                    <option value="sm-party">1-2</option>
                    <option value="md-party">2-4</option>
                    <option value="lg-party">4-6</option>
                    <option value="xl-party">6+</option>
                </select>
                {/* Contact Info */}
                <label>Name</label>
                <input type="text" required></input>
                <label>Email</label>
                <input type="email" required></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Reservations;