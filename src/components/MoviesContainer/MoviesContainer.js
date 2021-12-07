import { useState } from 'react';
import PropTypes from 'prop-types';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

const MoviesContainer = ({ movies, error }) => {
    const [search, setSearch] = useState('');
    
    const sortedPosters = movies.sort((a, b) => {
        let aTitle = a.title;
        let bTitle = b.title;
        return aTitle.localeCompare(bTitle);
    });

    const moviePosters = sortedPosters.filter(movie => {
        if(search === '') {
            return movie;
        } else if (movie.title.toLowerCase().includes(search.toLowerCase())) {
            return movie;
        }
    }).map(movie => {
        return (
            <MoviePoster 
            id={movie.id}
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            />
        )
    })
        
    return (
        <main className='all-movies'>
            <input
                    type='text'
                    name='search'
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    placeholder='Search by Movie Title...'
                    autoComplete='off'
                />
            <div className='moviesContainer'>
                {moviePosters}  
            </div>
        </main>
    )
}
 
MoviesContainer.propTypes = {
    movies: PropTypes.array,
}

export default MoviesContainer;