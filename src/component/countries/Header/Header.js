import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="menu">
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About US</a>

            </nav>
        </div>
    );
};

export default Header;