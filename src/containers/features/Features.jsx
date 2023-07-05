import React from "react";
import {Feature} from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Improving end distruts instantly',
        text: 'Some text that explains inproving end distruts instantly'
    },
    {
        title: 'Become the tended active',
        text: 'Some text that explains inproving end distruts instantly'
    },
    {
        title: 'Reach your potential',
        text: 'Some text that explains inproving end distruts instantly'
    },
    {
        title: 'Perfection or nothing',
        text: 'Some text that explains inproving end distruts instantly'
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