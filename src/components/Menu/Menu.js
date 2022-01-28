import './Menu.css';

import React from 'react';

export const Menu = ({ onSearchChange, isDropdownvisible, handleDropdownClick }) => {

    return (
        <div>
            <nav className="banner">
                <li className="bannerElement"><a href='null'>Home</a></li>
                <li className="bannerElement"><a href='null'>Champions</a></li>
                <li className="bannerElement"><a href='null'>Zones</a></li>
                <li className="bannerElement">
                    <button className="dropmenu">Zones 2</button>
                </li>

                <li className="bannerElement">
                    <button className="dropmenu" onClick={handleDropdownClick} >History

                        {
                            isDropdownvisible &&

                            (<div className="dropdown-content" onMouseLeave={handleDropdownClick}>
                                <a className="element" href='null'>One</a>
                                <a className="element" href='null'>Two</a>
                                <a className="element" href='null'>Three</a>
                                <a className="element" href='null'>Four</a>
                            </div>)

                        }

                    </button>
                </li>
                <input typeof='search' placeholder='Type Champion Name' onChange={onSearchChange} />
            </nav>
        </div>
    )
}
