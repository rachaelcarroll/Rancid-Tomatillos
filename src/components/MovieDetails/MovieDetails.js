import React from 'react';
import './MovieDetails.css'

const MovieDetails = ({clickedMovie}) => {
    return (
        <div className="movieDetails">
            {clickedMovie}
        </div>
    )
}

export default MovieDetails;