import './Menu.css';

import React from 'react';

export const Menu = ({ onSearchChange, isDropdownvisible, handleDropdown, championPage, setPageHome }) => {

    return (
        <div>
            <nav className="banner">
                <li className="bannerElement"><a href='null' >Home</a></li>
                <li className="bannerElement"><a href='null'>Champions</a></li>
                <li className="bannerElement"><a href='null'>Zones</a></li>


                <li className="bannerElement">
                    <button className="dropmenu" onClick={handleDropdown}  >History

                        {
                            isDropdownvisible &&

                            (<div className="dropdown-content" onMouseLeave={handleDropdown}>
                                <a className="element" href='null'>One</a>
                                <a className="element" href='null'>Two</a>
                                <a className="element" href='null'>Three</a>
                                <a className="element" href='null'>Four</a>
                            </div>)

                        }

                    </button>
                </li>
                {championPage === 'home' ?
                    (<input typeof='search' placeholder='Type Champion Name' onChange={onSearchChange} />)
                    :
                    <li className="bannerElement">
                        <button className="dropmenu" onClick={setPageHome}>Zones 2</button>
                    </li>
                }
            </nav>
        </div>
    )
}
