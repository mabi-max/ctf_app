import React from "react";
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
    return (
        <div className="digitech__possibility section__padding" id="possibility">
            <div className="digitech__possibility-image">
                <img src={possibilityImage} alt="possibility"/>
            </div>
            <div className="digitech__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The Possibilities are beyond your imagination </h1>
                <p>Some text description that talks about the endless possibilities</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility;