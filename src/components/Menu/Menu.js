import './Menu.css'

import { Link, BrowserRouter as Router } from 'react-router-dom'

import PropTypes from 'prop-types'
import React from 'react'

const Menu = ({
	onSearchChange,
	isDropdownvisible,
	handleDropdown,
	championPage,
	setPageHome,
}) => {
	return (
        <div>
          <nav className="banner">
          <Router>
                  <Link to='/' style={{textDecoration: 'none'}} >
            <li className="bannerElement"><a href='null' onClick={setPageHome}>Home</a></li>
            </Link>
                </Router>

            <li className="bannerElement"><a href='null'>Champions</a></li>
            <li className="bannerElement"><a href='null'>Zones</a></li>
            <li className="bannerElement">
              <button className="dropmenu" onClick={handleDropdown} >History
                {
                  isDropdownvisible &&
                                (
                                  <div
                                    className="dropdown-content"
                                    onMouseLeave={handleDropdown}
                                  >
                                    <a className="element" href='null'>One</a>
                                    <a className="element" href='null'>Two</a>
                                    <a className="element" href='null'>Three</a>
                                    <a className="element" href='null'>Four</a>
                                  </div>)
                }
              </button>
            </li>
            {
                championPage === 'home' ?
                (
                <input
                  typeof='search'
                  placeholder='Type Champion Name'
                  onChange={onSearchChange}
                />
                ) :
                (
                <Router>
                  <Link to='/' >
                  < li className="bannerElement">
                  <button
                    className="dropmenu"
                    onClick={setPageHome}
                  >Search</button>
                </li>
                </Link>
                </Router>
              
                )
            }
          </nav>
        </div >
      )
}

Menu.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
	isDropdownvisible: PropTypes.bool.isRequired,
	handleDropdown: PropTypes.func.isRequired,
	championPage: PropTypes.string.isRequired,
	setPageHome: PropTypes.func.isRequired,
}

export {Menu}
