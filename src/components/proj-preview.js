import React from "react";
import { Link } from 'react-router-dom';

const ProjPreview = ({ img, title, subtitle, link }) => {
    return (
      <Link to={link} className="proj-link">
        <div className="proj-sub-container" to={link}>
          <div className="proj-preview-img-div">
            <img
              src={img}
              alt="Image not available."
              className="proj-preview-img"
            />
          </div>

          <div className="proj-text">
            {/* <Link to={link} className="mini-title"> */}
            <h1 className="mini-title-proj">{title}</h1>
            {/* </Link> */}
            {/* <Link to={link} className="mini-subtitle"> */}
            <h1 className="mini-subtitle-proj">{subtitle}</h1>
            {/* </Link> */}
          </div>
        </div>
      </Link>
    );
}

export default ProjPreview;