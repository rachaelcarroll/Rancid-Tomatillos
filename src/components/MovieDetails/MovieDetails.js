import React from 'react';
import './MovieDetails.css'

const MovieDetails = ({backgroundImage, posterImage, id, title, averageRating, releaseDate, updateIsClicked }) => {
    return (
        <section className="MovieDetailsContainer">
            <img src={backgroundImage}></img>
            <div className="movieDetailsCard">
                <img src={posterImage} id={id} alt={'Cover art image for ' + title}></img>
                <button onClick={updateIsClicked}>X</button>
                <h2>{title}</h2>
                <p>{averageRating}</p>
                <p>{releaseDate}</p>
            </div>
        </section>
    )
}

export default MovieDetails;