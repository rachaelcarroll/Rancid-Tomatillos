import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

const MoviesContainer = ({movies, updateClickedMovie}) => {
    
    const sortedPosters = movies.sort((a, b) => {
        let aTitle = a.title;
        let bTitle = b.title;
        return aTitle.localeCompare(bTitle);
    });

    const moviePosters = sortedPosters.map(movie => {
        return (
            <MoviePoster 
            id={movie.id}
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            updateClickedMovie={updateClickedMovie}
            />
        )
    })
        
    return (
    
        <section className='allMovies'>
            <div className='moviesContainer'>{moviePosters}</div>
        </section>
    )
}
 
MoviesContainer.propTypes = {
    movies: PropTypes.array,
    updateClickedMovie: PropTypes.func
}

export default MoviesContainer;