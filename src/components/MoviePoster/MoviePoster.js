import React from 'react';
import PropTypes from 'prop-types';
import './MoviePoster.css'

const MoviePoster = ({id, image, title, updateClickedMovie}) => {
    return (
        <button onClick={() => {
            updateClickedMovie(id);
            }}>
            <img src={image} id={id} alt={'Cover art image for ' + title}></img>
        </button>
    )
}

MoviePoster.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    updateClickedMovie: PropTypes.func
}

export default MoviePoster;
