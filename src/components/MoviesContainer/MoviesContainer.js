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

    // This seems like a lot of data to not be in state...this should probably have state
    let isClicked = false;
    let clickedMovie;

    // If this becomes a class component and has state then this const won't work
    // In that case, moviePosters would probably have to go in state too
    // OR is clicked and clickedMovie would go in App.js...but that doesn't seem right
    const moviePosters = movies.map(movie => {
        return (
            <MoviePoster 
            id={movie.id}
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            updateIsClicked={updateIsClicked}
            findClickedMovie={findClickedMovie}
            />
            )
        })
        
        const updateIsClicked = () => {
            isClicked ? isClicked = false: isClicked = true;
        }
    
        const findClickedMovie = (e) => {
            clickedMovie = moviePosters.find(movie => movie.id === e.target.id)
        }


    return (
        <div className="moviesContainer">
            {!isClicked && {moviePosters}}
            {isClicked && <MovieDetails clickedMovie={clickedMovie}/>}
        </div>
    )
}
 
export default MoviesContainer;