import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';
import { Link } from 'react-router-dom';
import { fetchMovieInfo, fetchVideo } from '../../apiCalls';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieInfo: {},
            movieTrailers: '',
            movieError: '',
            videoError: '',
        }
    }
   
    componentDidMount() {
        fetchMovieInfo(this.props.id)
            .then(movie => this.setState({ movieInfo: movie.movie }))
            .catch(() => this.setState({ movieError: 'Having trouble finding movie information right now...please try again.'} ));

        fetchVideo(this.props.id)
            .then(video => {this.setState({movieTrailers: video.videos})})
            .catch(() => this.setState({ videoError: 'Sorry, this video is currently unavailable.'}))
    }

    formatOverview = (overview) => {
        if (overview.length > 185) {
            const shortOverview = overview.slice(0, 185) + '...';
            return shortOverview;
        } else {
            return overview;
        }
    }

    formatGenres = (genres) => {
        if(genres) {
            const allGenres = genres.join(' | ')
            return allGenres 
        } else {
            return '';
        }
      }

    formatRating = (rating) => {
        const formattedRating = rating.toFixed(0)
        return formattedRating
    }
    
    formatReleaseDate = (date) => {
        const yearReleased = date.split("-")[0]
        return yearReleased
    }

    formatCurrency = (amount) => {
        if (amount === 0) {
          return 'Not Reported'
        }
    
        return amount.toLocaleString('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          style: 'currency',
          currency: 'USD'
        })
      }

    formatRuntime = (runtime) => {
     return !runtime ? 'Not Reported' : runtime + " mins"
    }


    render() {
        const { id, title, release_date, backdrop_path, poster_path, overview, genres, budget, revenue, tagline, average_rating, runtime} = this.state.movieInfo
    
            return (
                <section>
                    <section className="movieDetailsContainer" style={{ backgroundImage: `url(${backdrop_path})`}}>
                        <Link to="/">
                            <button className='returnHome' onClick={this.props.handleDisplayAllMovies}>X</button>
                        </Link>
                        {this.state.movieError && <h3 className="errorLoading">{this.state.movieError}</h3>}
                        {!this.state.movieInfo && !this.state.error && <h2 className='loading-message'>Page Loading...</h2>}

                        {title && !this.state.error &&
                        <article className='movieDescription'>
                            <img className='movie-poster' src={poster_path} id={id} alt={'Cover art image for ' + title}></img>
                            <div className='movieDetailsCard'>
                                <h2>{title}</h2>
                                <h4>{tagline}</h4>
                                <p className='genre'>{this.formatGenres(genres)}</p>
                                <p><strong>Rating: </strong>{this.formatRating(average_rating)}/10</p>
                                <p><strong>Year Released: </strong>{this.formatReleaseDate(release_date)}</p>
                                <p className='overview'>{this.formatOverview(overview)}</p>
                                <p className='budget'><strong>Budget: </strong>{this.formatCurrency(budget)}</p>
                                <p className='revenue'><strong>Revenue: </strong>{this.formatCurrency(revenue)}</p>
                                <p className='runtime'><strong>Runtime: </strong>{this.formatRuntime(runtime)}</p>
                            </div>
                        </article> }
                        {this.state.videoError && <h3 className="errorLoading">{this.state.videoError}</h3>}
                        {this.state.movieTrailers.length && 
                            <div className='movieTrailer'>
                                <iframe
                                    className='video'
                                    width='650'
                                    height='380'
                                    src={`https://www.youtube.com/embed/${this.state.movieTrailers[0].key}`}
                                    frameBorder='0'
                                    allowFullScreen
                                />
                            </div> }
                    </section>
                </section>
            )
    }
}

MovieDetails.propTypes = {
    movieInfo: PropTypes.object,
    resetClickedMovie: PropTypes.func,
  }

export default MovieDetails;
