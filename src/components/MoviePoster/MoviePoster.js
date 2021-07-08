import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({id, image, title, updateIsClicked}) => {
    return (
        <button onClick={updateIsClicked}>
            <img src={image} alt={'Cover art image for ' + title}></img>
        </button>
    )
}

export default MoviePoster;
