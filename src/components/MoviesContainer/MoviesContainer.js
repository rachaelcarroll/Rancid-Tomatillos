import React from 'react';
import MoviePoster from '../MoviePoster/MoviePoster';
import './MoviesContainer.css';

const MoviesContainer = ({movies, selectMovie}) => {
    // Tried to make this a class component so that I could give it state of isClicked = false
    // But then const moviePosters gives error
    // cannot have a variable in a class component
    // either have to include moviePosters in state or move it to a render method before the return
    // So maybe it's better to include isClicked in App.js with the other state and then pass a props
    // method to this child component as well as the isClicked value

    // This seems like a lot of data to not be in this functional component...this should probably have state?
    // let isClicked = false;
    // let clickedMovie;
    
    // const updateIsClicked = () => {
    //     isClicked ? isClicked = false: isClicked = true;
    // }
    
    // const findClickedMovie = (e) => {
    //     console.log('isClicked', isClicked);
    //     let clickedMovieId = parseInt(e.target.id)
    //     console.log('clicked movie id', clickedMovieId);
    //     let clickedMovie = movies.find(movie => movie.id === clickedMovieId);
    //     selectMovie(clickedMovie);
    //     console.log('clicked movie', clickedMovie);
    // }

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
            selectMovie={selectMovie}
            />
        )
    })
        

    // This is not rerendering because we're not updating state or props
    // In order to get an automatic re-render, we need to make this a class component
    // or add this state to app and pass it in as props
    // console.log('clicked movie here', clickedMovie);
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