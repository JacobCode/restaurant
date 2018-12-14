import React, { Component } from 'react';

// Components
import Booked from './Booked';

// SCSS
import '../scss/Reservations.scss';

class Reservations extends Component {
    constructor() {
        super();
        this.state = {
            currentDate: '',
            chosenDate: '',
            chosenTime: '',
            chosenParty: 'sm',
            userName: '',
            userEmail: '',
            userPhone: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getDefaultDate() {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        this.setState({
            currentDate: [year, month, day].join('-')
        })
    }
    // Handle submit
    handleSubmit(e) {
        e.preventDefault();
        var chosenDate = e.target.elements[0].value;
        var chosenTime = e.target.elements[1].value;
        var chosenParty = e.target.elements[2].value;
        var userName = e.target.elements[3].value;
        var userEmail = e.target.elements[4].value;
        var userPhone = e.target.elements[5].value;
        console.log(chosenDate);
        console.log(chosenTime);
        console.log(chosenParty);
        console.log(userName);
        console.log(userEmail);
        console.log(userPhone);
    }

    componentWillMount() {
        this.getDefaultDate();
    }
    render() {
        if (1 < 2) {
            return (
                <div id="reservations" className="main-container">
                    <h1>Reservations</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="info table">
                            <div>
                                <input type="date" id="date" required></input>
                            </div>
                            <div>
                                <input type="text" placeholder="Time" required></input>
                            </div>
                            <div>
                                <select name="party" defaultValue="sm-party">
                                    <option value="sm-party">1 - 4</option>
                                    <option value="md-party">4 - 6</option>
                                    <option value="lg-party">6 - 8</option>
                                    <option value="xl-party">8 +</option>
                                </select>
                            </div>
                        </div>
                        {/* Contact Info */}
                        <div className="info contact">
                            <div>
                                <input type="text" placeholder="Name" required></input>
                            </div>
                            <div>
                                <input type="email" placeholder="Email" required></input>
                            </div>
                            <div>
                                <input type="text" placeholder="Phone" required></input>
                            </div>
                        </div>
                        <div className="submit">
                            <button type="submit">Request A Table</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <Booked />
            )
        }
    }
}

export default Reservations;