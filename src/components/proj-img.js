import React from "react";

const ProjImg = ({img,fig}) => {
    return (
        <div className="gallery-box">
            <img src={img} alt="Image not available." className="gallery-img" />
            <text className="mini-subtitle">
                {fig}
            </text>
        </div>
    );
}

export default ProjImg;