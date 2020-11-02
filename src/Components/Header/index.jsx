import React from 'react';
import './index.css'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({name, navItems}) => {
    return (
        <div className='header'>
            <h2 className='blogOwner'>{name}</h2>
            <div className='rightHeader'>
                <div className='nav'>
                    <ul>
                        {
                            navItems.map((item) => <li>{item}</li>)
                        }
                    </ul>
                </div>
                <div className='search'>
                    {/*<input type='search' name='search'/>*/}
                    <button><FontAwesomeIcon icon='search'/></button>
                </div>
            </div>
        </div>
    );
};

export default Header;