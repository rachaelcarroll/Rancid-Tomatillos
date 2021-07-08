import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({id, image, title}) => {
    return (
        <button>
            <img src={image} alt={'Cover art image for ' + title}></img>
        </button>
    )
}

export default MoviePoster;
