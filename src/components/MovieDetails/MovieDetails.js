import React from 'react';
import './MovieDetails.css'

const MovieDetails = ({movieInfo, updateIsClicked }) => {
    console.log(movieInfo)
    const formattedRating = movieInfo.average_rating.toFixed(0);
    // const formattedDate = 
    return (
        <section className="MovieDetailsContainer">
            <button onClick={() => updateIsClicked}>X</button>
            <img src={movieInfo.backdrop_path}></img>
            <div className='movieDetailsCard'>
                <img src={movieInfo.poster_path} id={movieInfo.id} alt={'Cover art image for ' + movieInfo.title}></img>
                <h2>{movieInfo.title}</h2>
                <p>{"Rating: " + formattedRating + "/10"}</p>
                <p>{movieInfo.release_date}</p>
                <p>{movieInfo.overview}</p>
            </div>
        </section>
    )
}

export default MovieDetails;
