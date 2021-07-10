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
            {/* {!isClicked && <div className="moviesContainer">{moviePosters}</div>}
            {isClicked && 
            <MovieDetails 
            backgroundImage={clickedMovie.backdrop_path} 
            posterImage={clickedMovie.poster_path} 
            id={clickedMovie.id} 
            title={clickedMovie.title} 
            averageRating={clickedMovie.average_rating} 
            releaseDate={clickedMovie.release_date}
            updateIsClicked={updateIsClicked}
            />} */}
        </section>
    )
}
 
export default MoviesContainer;