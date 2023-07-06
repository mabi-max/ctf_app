import React from "react";
import {Feature} from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Removing distruts instantly',
        text: 'Fostering trust and building positive relationships.'
    },
    {
        title: 'Exemplary Client Care Guaranteed',
        text: 'We ensure our clients receive diligent and attentive service'
    },
    {
        title: 'Reach your potential',
        text: 'Unleash your full potential and achieve personal growth and success.'
    },
    {
        title: 'Pursuit of Perfection',
        text: 'Striving for perfection with unwavering commitment and dedication.'
    }
]
const Features = () => {
    return (
       <div className="digitech__features section__padding" id="features">
        <div className="digitech__features-heading">
            <h1 className="gradient__text">The Future is now and You Just Need To Realize it. Step into Future Today & make it happen. </h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className="digitech__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index}/>
            ))}
        </div>
       </div>
    )
}

export default Features;