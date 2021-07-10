import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

const MoviesContainer = ({movies, updateClickedMovie}) => {

    const moviePosters = movies.map(movie => {
        return (
            <MoviePoster 
            id={movie.id}
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            updateClickedMovie={updateClickedMovie}
            // getMovieInfo={getMovieInfo}
            />
        )
    })
        
    return (
    
        <section>
            <div className='moviesContainer'>{moviePosters}</div>
        </section>
    )
}
 
export default MoviesContainer;