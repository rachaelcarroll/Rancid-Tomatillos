import React from 'react';
import './Nav.css';

const Nav = ({ search, handleSearch, handleDisplayAllMovies }) => {
    return (
    <nav className='nav'>
        <div className='header'>
            <h1>RANCID TOMATILLOS</h1>
        </div>
        <form className='searchContainer'>
            <input
                type='text'
                name='searchBar'
                value={search}
                onChange={handleSearch}
                placeholder='Search by Movie Title'
            />
            {search && <button onClick={handleDisplayAllMovies}>Display All Movies</button>}
        </form>
    </nav>
  )
}

  export default Nav;