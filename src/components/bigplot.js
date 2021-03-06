import React from "react";

const Bigplot = ({plot,text,title}) => {
    return (
        <div className="column">
            <header className="mid-subtitle">{title}</header>
            <img src={plot} alt="Image not available." className="large-img" />
            <br/>
            {text}
        </div>
    );
}

export default Bigplot;