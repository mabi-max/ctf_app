import React from "react";
import './whatdigitech.css';
import { Feature } from "../../components";

const WhatDigiTech = () => {
    return (
        <div className="digitech__whatdigitech sextion__margin" id="whatdigitech">
            <div className="digitech__whatdigitech-feature">
              <Feature title="What is DigiTech" text="There are so many opinions on DigiTech, let's collaboratively navigate and address them at a later stage."/>
            </div>
            <div className="digitech__whatdigitech-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="digitech__whatdigitech-container ">
                <Feature title="Chatbots" text="Designed to simulate human conversation and provide automated assistance according to your needs"/>
                <Feature title="Knowledgebase" text="A centralized repository of information that provides comprehensive and organized access to information"/>
                <Feature title="Education" text="Acquiring knowledge, skills, values, and attitudes through various formal and informal methods"/>
            </div>
        </div>
    )
}

export default WhatDigiTech;