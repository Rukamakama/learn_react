import React from 'react';
import './index.css'

const Header = () => {
    return (
        <div className="header">
            <h2 className="headerTitle">Rukamakama</h2>
            <div className="nav">
                <ul>
                    <li>ABOUT</li>
                    <li>POST</li>
                </ul>
            </div>
            <div className="search">
                <input type="search" name="search"/>
                <button>&#128269;</button>
            </div>
        </div>
    );
};

export default Header;