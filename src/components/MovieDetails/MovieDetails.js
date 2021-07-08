import React from 'react';
import './MovieDetails.css'

const MovieDetails = ({backgroundImage, posterImage, id, title, averageRating, releaseDate, updateIsClicked }) => {
    const formattedRating = averageRating.toFixed(0);
    // const formattedDate = 
    return (
        <section className="MovieDetailsContainer">
            <img src={backgroundImage}></img>
            <div className='movieDetailsCard'>
                <img src={posterImage} id={id} alt={'Cover art image for ' + title}></img>
                <button onClick={updateIsClicked}>X</button>
                <h2>{title}</h2>
                <p>{"Rating: " + formattedRating + "/10"}</p>
                <p>{releaseDate}</p>
            </div>
        </section>
    )
}

export default MovieDetails;
