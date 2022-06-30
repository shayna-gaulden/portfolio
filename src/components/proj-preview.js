import React from "react";
import { Link } from 'react-router-dom';

const ProjPreview = ({ img, title, subtitle, link }) => {
    return (
        <div className="proj-sub-container">
            <Link to={link}>
                <img src={img} alt="Image not available." className="proj-preview-img" />
            </Link>
            <div className="column">
                <Link to={link} className="mini-title">
                    {title}
                </Link>
                <Link to={link} className="mini-subtitle">
                    {subtitle}
                </Link>
            </div>

        </div>
    );
}

export default ProjPreview;