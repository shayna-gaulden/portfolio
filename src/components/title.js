import React from "react";

const Title = ({title,subtitle}) => {
    return (
        <div className="title-container">
            <header className="title">
                {title}
            </header>
            <header className="subtitle">
                {subtitle}
            </header>
        </div>
    );
}

export default Title;