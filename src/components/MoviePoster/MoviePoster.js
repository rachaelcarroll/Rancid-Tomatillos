import React from 'react';
import PropTypes from 'prop-types';
import './MoviePoster.css';
import { Link } from 'react-router-dom';

const MoviePoster = ({id, image, title}) => {
    return (
        <Link to={`/${id}`} name={title} className='moviePoster'>
            <img src={image} id={id} alt={'Cover art image for ' + title}></img>
        </Link>
    )
}

MoviePoster.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    updateClickedMovie: PropTypes.func
}

export default MoviePoster;
