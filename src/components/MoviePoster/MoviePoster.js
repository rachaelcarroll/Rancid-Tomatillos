import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({id, image, title, updateIsClicked, findClickedMovie}) => {
    return (
        <button onClick={() => {
            updateIsClicked();
            findClickedMovie(e);
            }}>
            <img src={image} alt={'Cover art image for ' + title}></img>
        </button>
    )
}

export default MoviePoster;
