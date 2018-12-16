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
            chosenDate: '2018-12-15',
            chosenTime: '4:30 PM',
            chosenParty: '1 - 4',
            userName: 'Jeremy Scott',
            userEmail: 'jeremyhscott@gmail.com',
            userPhone: '123-456-7890',
            confirmed: false,
            isLoading: true
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
        this.setState({
            chosenDate,
            chosenTime,
            chosenParty,
            userName,
            userEmail,
            userPhone,
            confirmed: true
        })
    }
    componentWillMount() {
        this.getDefaultDate();
    }
    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }
    render() {
        const {
            chosenDate,
            chosenTime,
            chosenParty,
            userName,
            userPhone,
            userEmail
        } = this.state
        if (!this.state.confirmed && !this.state.isLoading) {
            return (
                <div id="reservations" className="main-container">
                    <h1>Book A Table</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="info table">
                            <div>
                                <input type="date" id="date" defaultValue={this.state.currentDate} required></input>
                            </div>
                            <div>
                                <input type="text" placeholder="Time" required></input>
                            </div>
                            <div>
                                <select name="party" defaultValue="sm-party">
                                    <option value="1 - 4">1 - 4</option>
                                    <option value="4 - 6">4 - 6</option>
                                    <option value="6 - 8">6 - 8</option>
                                    <option value="8 +">8 +</option>
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
                            <button type="submit">Request</button>
                        </div>
                    </form>
                </div>
            )
        } else if (this.state.isLoading) {
            return (
                <div className="loading">
                    <div className="loading-image"></div>
                </div>
            )
            } else if (!this.state.isLoading && this.state.confirmed) {
                return (
                    <Booked chosenDate={chosenDate} chosenTime={chosenTime} chosenParty={chosenParty} userName={userName} userPhone={userPhone} userEmail={userEmail} />
                )
            }
    }
}

export default Reservations;