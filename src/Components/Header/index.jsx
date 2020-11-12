import React from 'react';
import './index.css'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

const Header = ({name, navItems}) => {
    return (
        <div className='header'>
            <h2 className='blogOwner'>{name}</h2>
            <div className='rightHeader'>
                <div className='nav'>
                    <ul>
                        {
                            navItems.map((item) =>
                                <li> <Link to={`/${item.toLowerCase()}`}> {item} </Link></li>
                            )
                        }
                    </ul>
                </div>
                <div className='search'>
                    <button><FontAwesomeIcon icon='search'/></button>
                </div>
            </div>
        </div>
    );
};

export default Header;