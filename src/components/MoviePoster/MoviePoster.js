import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({id, image, title, updateClickedMovie}) => {
    return (
        <button onClick={() => {
            updateClickedMovie(id);
            // getMovieInfo(id);
            }}>
            <img src={image} id={id} alt={'Cover art image for ' + title}></img>
        </button>
    )
}

export default MoviePoster;
