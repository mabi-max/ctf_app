import React from "react";
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="digitech__header section__padding" id="home">
            <div className="digitech__header-content">
              <h1 className="gradient__text">
              Let's Build Something Amazing  With Digitech OpenAI </h1>
              <p>Yet bed any for traveling assisance indulgence and better unpleasing Not thoughts all exercise blessing indulgence way more powerful </p>

              <div className="digitech__header-content__input">
                <input type="email" placeholder="example@email.com"/>
                <button type="button">Get Started</button>
               
              </div>

              <div className="digitech__header-content__people">
                <img src={people} alt="people"/>
                <p>1600 people requested access to a visit in the last 24 hours</p>
              </div>
              
              
            </div>
            <div className="digitech__header-image">
             <img src={ai} alt="ai" />
             </div>
        </div>
    )
}

export default Header;