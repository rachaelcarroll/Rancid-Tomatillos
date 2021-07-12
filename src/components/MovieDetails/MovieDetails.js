import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css'

const MovieDetails = ({movieInfo, resetClickedMovie}) => {
    // console.log(movieInfo)
    const formattedRating = movieInfo.average_rating.toFixed(0);
    // const formattedDate = 
    return (
        <section className="movieDetailsContainer" style={{ backgroundImage: `url(${movieInfo.backdrop_path})`}}>
                <button className='returnHome' onClick={() => {resetClickedMovie()}}>X</button>
            <div className='movieDescription'>
                <img className='movie-poster' src={movieInfo.poster_path} id={movieInfo.id} alt={'Cover art image for ' + movieInfo.title}></img>
                <div className='movieDetailsCard'>
                    <h2>{movieInfo.title}</h2>
                    <p>{"Rating: " + formattedRating + "/10"}</p>
                    <p>{movieInfo.release_date}</p>
                    <p>{movieInfo.overview}</p>
                </div>
            </div>
        </section>
    )
}

MovieDetails.propTypes = {
    movieInfo: PropTypes.object,
    resetClickedMovie: PropTypes.func,
  }

export default MovieDetails;
