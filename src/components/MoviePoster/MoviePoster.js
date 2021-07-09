import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({id, image, title, selectMovie}) => {
    return (
        <button onClick={() => {
            selectMovie(id);
            }}>
            <img src={image} id={id} alt={'Cover art image for ' + title}></img>
        </button>
    )
}

export default MoviePoster;
