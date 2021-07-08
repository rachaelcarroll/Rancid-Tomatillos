import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

const MoviesContainer = ({movies}) => {
    // Tried to make this a class component so that I could give it state of isClicked = false
    // But then const moviePosters give error
    // cannot have a variable in a class component
    // either have to include moviePosters in state or move it to a render method before the return
    // So maybe it's better to include isClicked in App.js with the other state and then pass a props
    // method to this child component as well as the isClicked value

    let isClicked = false;

    const updateIsClicked = () => {
        isClicked ? isClicked = false: isClicked = true;
    }

    const moviePosters = movies.map(movie => {
        return (
            <MoviePoster 
                id={movie.id}
                key={movie.id}
                image={movie.poster_path}
                title={movie.title}
                updateIsClicked={updateIsClicked}
            />
        )
    })

    

    return (
        <div className="moviesContainer">
            {!isClicked && {moviePosters}}
            {isClicked && <MovieDetails />}
        </div>
    )
}
 
export default MoviesContainer;