import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = ({ search, handleSearch }) => {
    return (
    <nav className='nav'>
        <div className='header'>
            <h1>RANCID TOMATILLOS</h1>
        </div>
        <div className='searchContainer'>
            <label>
            Search:
            <input
                name='searchBar'
                value={search}
                onChange={handleSearch}
                placeholder='by Movie Title'
            />
            </label>
        </div>
    </nav>
  )
}

  export default Nav;