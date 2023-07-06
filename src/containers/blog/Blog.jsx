import React from "react";
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
    return (
        <div className="digitech__blog section__padding" id="blog">
            <div className="digitech__blog-heading">
                <h1 className="gradient__text">We blog about the bustling events around us.</h1>
            </div>
            <div className="digitech__blog-container">
                <div className="digitech__blog-container_groupA">
                 <Article imageUrl={blog01} date="July 5, 2023" title="DigiTech and Open AI is the future. Let us explore!"/>
                </div>
                <div className="digitech__blog-container_groupB">
                <Article imageUrl={blog02} date="July 5, 2023" title="The Evolution of OpenAI: Empowering Innovation and Artificial Intelligence Advancements."/>
                <Article imageUrl={blog03} date="July 5, 2023" title="Applications of OpenAI: Transforming Industries and Shaping the Future."/>
                <Article imageUrl={blog04} date="July 5, 2023" title="OpenAI's Impact on Natural Language Processing: Revolutionizing Text Generation and Understanding."/>
                <Article imageUrl={blog05}  date="July 5, 2023" title="Exploring the Implications and Responsible Use of Artificial Intelligence."/>
                </div>
            </div>
        </div>
    )
}

export default Blog;