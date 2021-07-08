import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({id, image, title, updateIsClicked, findClickedMovie}) => {
    return (
        <button onClick={(e) => {
            console.log('event', e)
            updateIsClicked();
            findClickedMovie(e);
            }}>
            <img src={image} id={id} alt={'Cover art image for ' + title}></img>
        </button>
    )
}

export default MoviePoster;
