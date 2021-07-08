import React from 'react';
import './MovieDetails.css'

const MovieDetails = ({backgroundImage, posterImage, id, title, averageRating, releaseDate }) => {
    return (
        <section className="MovieDetailsContainer">
            <img src={backgroundImage}></img>
            <div className="movieDetailsCard">
                <img src={posterImage} id={id} alt={'Cover art image for ' + title}></img>
            </div>
        </section>
    )
}

export default MovieDetails;