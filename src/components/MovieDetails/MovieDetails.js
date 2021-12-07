import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';
import { Link } from 'react-router-dom';
import { fetchMovieInfo, fetchVideo } from '../../apiCalls';
import { formatOverview, formatGenres, formatCurrency, formatRating, formatReleaseDate, formatRuntime } from '../../util';

const MovieDetails = ({ movieInfo }) => {
    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState('');
    const [error, setError] = useState('');
   
    useEffect(() => {
        const getMovieDetails = async (id) => {
            try {
            let data = await fetchMovieInfo(id);
            setMovie(data.movie);
          } catch (error) {
            setError(error.message);
          }
        }
        getMovieDetails(movieInfo.id);
      }, [movieInfo])

      useEffect(() => {
        const getMovieTrailer = async (id) => {
            try {
            let data = await fetchVideo(id);
            setTrailer(data.videos[0].key);
          } catch (error) {
            setError(error.message);
          }
        }
        getMovieTrailer(movieInfo.id);
      }, [movieInfo])
    
    return (
        <section>
            <section className="movieDetailsContainer" style={{ backgroundImage: `url(${movie.backdrop_path})`}}>
                <Link to="/">
                    <button className='returnHome'>X</button>
                </Link>
                {error && <h3 className="errorLoading">{error}</h3>}
                {!movie && !error && <h2 className='loading-message'>Loading Movie Details...</h2>}
                {movie.title && !error &&
                <article className='movieDescription'>
                    <img className='movie-poster' src={movie.poster_path} id={movie.id} alt={'Cover art image for ' + movie.title}></img>
                    <div className='movieDetailsCard'>
                        <h2>{movie.title}</h2>
                        <h4>{movie.tagline}</h4>
                        <p className='genre'>{formatGenres(movie.genres)}</p>
                        <p><strong>Rating: </strong>{formatRating(movie.average_rating)}/10</p>
                        <p><strong>Year Released: </strong>{formatReleaseDate(movie.release_date)}</p>
                        <p className='overview'>{formatOverview(movie.overview)}</p>
                        <p className='budget'><strong>Budget: </strong>{formatCurrency(movie.budget)}</p>
                        <p className='revenue'><strong>Revenue: </strong>{formatCurrency(movie.revenue)}</p>
                        <p className='runtime'><strong>Runtime: </strong>{formatRuntime(movie.runtime)}</p>
                    </div>
                </article> }
                {error && <h3 className="errorLoading">{error}</h3>}
                {trailer && 
                    <div className='movieTrailer'>
                        <iframe
                            title="Embedded youtube"
                            className='video'
                            width='650'
                            height='380'
                            src={`https://www.youtube.com/embed/${trailer}`}
                            frameBorder='0'
                            allowFullScreen
                        />
                    </div> }
            </section>
        </section>
    )
}

MovieDetails.propTypes = {
    movieInfo: PropTypes.object,
  }

export default MovieDetails;
