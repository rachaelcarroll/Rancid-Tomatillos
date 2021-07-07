import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({id, image}) => {
    return (
        // <div>
            <button>
                <img src={image}></img>
            </button>
        // </div>
    )
}

export default MoviePoster;
