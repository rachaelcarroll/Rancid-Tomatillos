import React from 'react';
import './Nav.css';
import { Route } from 'react-router-dom';

const Nav = ({ search, handleSearch, handleDisplayAllMovies }) => {
    return (
    <nav className='nav'>
        <div className='header'>
            <h1>RANCID TOMATILLOS</h1>
        </div>
        <Route exact path = '/' render={() => 
        <form className='searchContainer'>
            <input
                type='text'
                name='searchBar'
                value={search}
                onChange={handleSearch}
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                placeholder='Search by Movie Title'
                autoComplete='off'
            />
            {search && <button className="displayMovies" onClick={handleDisplayAllMovies}>Display All Movies</button>}
        </form> }
        />
    </nav>
  )
}

  export default Nav;