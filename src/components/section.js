import React from "react";

const Section = ({title,body}) => {
    return (
        <div className="section-container">
            <div className="left">
                <header className="section-title">
                    {title}
                </header>
            </div>
            <div className="right">
                <body className="section-body">
                    {body}
                </body>
            </div>
        </div>
    );
}

export default Section;