import React, { Component } from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

const MoviesContainer = ({movies}) => {

    const moviePosters = movies.map(movie => {
        return (
            <MoviePoster 
                id={movie.id}
                key={movie.id}
                image={movie.poster_path}
            />
        )
    })

    return (
        <div className="moviesContainer">
            {moviePosters}
        </div>
    )
}
 
export default MoviesContainer;