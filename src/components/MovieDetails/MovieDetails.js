import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from '../../apiCalls';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieInfo: {},
            error: ''
        }
    }
   
    componentDidMount() {
        console.log("heyyyyyyyy", this.props.id);
        fetchMovieInfo(this.props.id)
            .then(movie => this.setState({ movieInfo: movie.movie }))
            .catch(() => this.setState({ error: 'Having trouble finding this movie right now...please try again.'} ));
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
        const allGenres = genres.join(' | ')
        return allGenres 
      }

    formatRating = (rating) => {
        const formattedRating = rating.toFixed(0)
        return formattedRating
    }
    
    formatReleaseDate = (date) => {
        const yearReleased = date.split("-")[0]
        return yearReleased
    }
   
    render() {
        
        // if (this.state.movieInfo.id) {
        //     const { movieInfo } = this.state
        // }
        // if (this.state.error) {
        //     return <h3>{this.state.error}</h3>
        // } else if (!this.state.movieInfo && !this.state.error) {
        //     return <h2 className='loading-message'>Page Loading 🍿</h2>
        // } else {

            return (
    
                <section className="movieDetailsContainer" style={{ backgroundImage: `url(${this.state.movieInfo.backdrop_path})`}}>
                    <Link to="/">
                        <button className='returnHome'>X</button>
                    </Link>
                    {this.state.error && <h3 className="errorLoading">{this.state.error}</h3>}
                    {!this.state.movieInfo && !this.state.error && <h2 className='loading-message'>Page Loading 🍿</h2>}

                    {this.state.movieInfo.id && !this.state.error &&
                     <div className='movieDescription'>
                        <img className='movie-poster' src={this.state.movieInfo.poster_path} id={this.state.movieInfo.id} alt={'Cover art image for ' + this.state.movieInfo.title}></img>
                        <div className='movieDetailsCard'>
                            <h2>{this.state.movieInfo.title}</h2>
                            <h4>{this.state.movieInfo.tagline}</h4>
                            <p>| {this.formatGenres(this.state.movieInfo.genres)} | </p>
                            <p>Rating: {this.formatRating(this.state.movieInfo.average_rating)}/10</p>
                            <p>Year Released: {this.formatReleaseDate(this.state.movieInfo.release_date)}</p>
                            <p className='overview'>{this.formatOverview(this.state.movieInfo.overview)}</p>
                        </div>
                    </div> }
                </section>
                    
            )
    }
}

MovieDetails.propTypes = {
    movieInfo: PropTypes.object,
    resetClickedMovie: PropTypes.func,
  }

export default MovieDetails;
