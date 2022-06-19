import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer-container">
            <header className="nav-header">
                
            </header>
            <div className="nav-links">
                <a href="https://www.linkedin.com/in/shayna-gaulden-490a01140/" target="_blank" rel="noreferrer">
                    <div className="footer-button"> LinkedIn </div>
                </a>
                <a href="https://github.com/shayna-gaulden" target="_blank" rel="noreferrer">
                    <div className="footer-button"> Github </div>
                </a>
            </div>
        </div>
    );
}

export default Footer;