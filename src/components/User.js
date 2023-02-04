import { useState } from "react";

function User(props) {
    const [viewDetials, setViewDetails] = useState(false);
    const DOB = new Date(props.dob.date);
    
    function handleClick() {
        setViewDetails(!viewDetials);
    }

    return (
        <div className="user-card">
            <div className="user-main">
                <img src={props.picture.large} alt="" />
                <p>
                    <span className="detail-label">Name: </span>
                    <span>{`${props.name.first} ${props.name.last}`}</span>
                </p>
                <p>
                    <span className="detail-label">Email: </span>
                    <span>{props.email}</span>
                </p>
                <p>
                    <span className="detail-label">Phone: </span>
                    <span>{props.phone}</span>
                </p>
                <button className="btn" onClick={handleClick}>View Details</button>
            </div>
            <div className="user-details-container" style={{ display: viewDetials ? 'flex' : 'none' }}>
                <div className="user-details">
                <img src={props.picture.large} alt="" />
                    <p>
                        <span className="detail-label">Name: </span>
                        <span>{`${props.name.first} ${props.name.last}`}</span>
                    </p>
                    <p>
                        <span className="detail-label">Email: </span>
                        <span>{props.email}</span>
                    </p>
                    <p>
                        <span className="detail-label">Phone: </span>
                        <span>{props.phone}</span>
                    </p>
                    <p>
                        <span className="detail-label">Date of birth: </span>
                        <span>{`${DOB.getDate()}-${DOB.getMonth()}-${DOB.getFullYear()}`}</span>
                    </p>
                    <p>
                        <span className="detail-label">Country: </span>
                        <span>{props.location.country}</span>
                    </p>
                    <button className="btn" onClick={handleClick}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default User;