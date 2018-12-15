import React from 'react';

// SCSS
import '../scss/Booked.scss';

const Booked = (props) => {
    var str = props.chosenDate;
    var day = str.substring(8, 10);
    var month = str.substring(5, 7);
    var year = str.substring(0, 4);
    var formattedDate = month + '/' + day + '/' + year;
    return (
        <div className="booked">
            {console.log(props)}
            <div className="container">
                <div className="bar"></div>
                <h1>Your Reservation</h1>
                <div className="table-info">
                    <div>
                        <h4>Time</h4>
                        <span>{formattedDate} &bull; {props.chosenTime}</span>
                    </div>
                    <div>
                        <h4>Party Size</h4>
                        <span>{props.chosenParty}</span>
                    </div>
                </div>
                <div className="user-info">
                    <div>
                        <h4>Name</h4>
                        <span>{props.userName}</span>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <span>{props.userPhone}</span>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <span>{props.userEmail}</span>
                    </div>
                </div>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Booked;