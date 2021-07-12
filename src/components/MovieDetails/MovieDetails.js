import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css'

const MovieDetails = ({movieInfo, resetClickedMovie}) => {
    console.log('what is here', movieInfo.tagline)
    const formattedRating = movieInfo.average_rating.toFixed(0);

    const formatOverviewLength = () => {
        if (movieInfo.overview.length > 182) {
           const shortOverview = movieInfo.overview.slice(0, 182) + '...';
           return shortOverview;
        } else {
            return movieInfo.overview;
        }
    }
    // const formattedDate = 
    return (
        <section className="movieDetailsContainer" style={{ backgroundImage: `url(${movieInfo.backdrop_path})`}}>
                <button className='returnHome' onClick={() => {resetClickedMovie()}}>X</button>
            <div className='movieDescription'>
                <img className='movie-poster' src={movieInfo.poster_path} id={movieInfo.id} alt={'Cover art image for ' + movieInfo.title}></img>
                <div className='movieDetailsCard'>
                    <h2>{movieInfo.title}</h2>
                    <h4>{movieInfo.tagline}</h4>
                    <p>{"Rating: " + formattedRating + "/10"}</p>
                    <p>{movieInfo.release_date}</p>
                    <p>{formatOverviewLength()}</p>
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
