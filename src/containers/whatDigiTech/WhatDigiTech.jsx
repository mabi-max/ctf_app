import React from "react";
import './whatdigitech.css';
import { Feature } from "../../components";

const WhatDigiTech = () => {
    return (
        <div className="digitech__whatdigitech sextion__margin" id="whatdigitech">
            <div className="digitech__whatdigitech-feature">
              <Feature title="What is DigiTech" text="There are so many opinions on DigiTech so we will figureb that out together later"/>
            </div>
            <div className="digitech__whatdigitech-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="digitech__whatdigitech-container ">
                <Feature title="Chatbots" text="There are so many opinions on DigiTech so we will figureb that out together later"/>
                <Feature title="Knowledgebase" text="There are so many opinions on DigiTech so we will figureb that out together later"/>
                <Feature title="Education" text="There are so many opinions on DigiTech so we will figureb that out together later"/>
            </div>
        </div>
    )
}

export default WhatDigiTech;