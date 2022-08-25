import React from "react";
import { Link } from 'react-router-dom';

const BlogPreview = ({ img, title, subtitle, link }) => {
    return (
        <div className="proj-sub-container">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="Image not available." className="proj-preview-img" />
            </a>
            <div className="column">
            <a href={link} target="_blank" rel="noreferrer" className="mini-title">
                    {title}
                </a>
                <a href={link} target="_blank" rel="noreferrer" className="mini-subtitle">
                    {subtitle}
                </a>
            </div>

        </div>
    );
}

export default BlogPreview;