import React from 'react';

const MoviePoster = ({id, image}) => {
    return (
        <div>
            <button>
                <img src={image}></img>
            </button>
        </div>
    )
}

export default MoviePoster;
