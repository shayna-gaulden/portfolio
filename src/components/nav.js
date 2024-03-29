import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="nav-container">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <header className="nav-header">
                Portfolio
            </header>
            </Link>
            <div className="nav-links">
                <Link to="/">
                    <div className="nav-button"> Home </div>
                </Link>
                <Link to="/about">
                    <div className="nav-button"> About </div>
                </Link>
            </div>
        </div>
    );
}

export default Nav;