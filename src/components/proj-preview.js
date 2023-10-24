import React from "react";
import { Link } from 'react-router-dom';

const ProjPreview = ({ img, title, subtitle, link, date, skills }) => {
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
            <h1 className="mini-title-proj">{title}</h1>
            <div className="proj-prev-detail-div">
              <h1 className="proj-prev-details">{date}</h1>
              <h1 className="proj-prev-details">{skills}</h1>
            </div>
            <h1 className="mini-subtitle-proj">{subtitle}</h1>
          </div>
        </div>
      </Link>
    );
}

export default ProjPreview;