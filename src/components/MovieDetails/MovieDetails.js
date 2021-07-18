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
            error: ''
        }
    }
   
    componentDidMount() {
        console.log("heyyyyyyyy", this.props.id);
        fetchMovieInfo(this.props.id)
            .then(movie => this.setState({ movieInfo: movie.movie }))
            .catch(() => this.setState({ error: 'Having trouble finding this movie right now...please try again.'} ));

        fetchVideo(this.props.id)
            .then(video => {this.setState({movieTrailers: video.videos})})
            .catch(() => this.setState({ error: 'Sorry, this video is currently unavailable.'}))
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

    formatCurrency(amount) {
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

    render() {
        
        const { id, title, release_date, backdrop_path, overview, genres, budget, revenue, runtime, average_rating } = this.state.movieInfo
        let formattedRating
        let formattedGenre
        let formattedBudget
        let formattedRevenue
    
        if (!this.state.error) {
          formattedRating = average_rating.toFixed(0)
          formattedGenre = this.formatGenres
          formattedBudget = this.formatCurrency(budget)
          formattedRevenue = this.formatCurrency(revenue)
        }
    
console.log("VIDEO?", this.state.movieTrailers)
        
            return (
    
                <section className="movieDetailsContainer" style={{ backgroundImage: `url(${this.state.movieInfo.backdrop_path})`}}>
                    <Link to="/">
                        <button className='returnHome' onClick={this.props.handleDisplayAllMovies}>X</button>
                    </Link>
                    {this.state.error && <h3 className="errorLoading">{this.state.error}</h3>}
                    {!this.state.movieInfo && !this.state.error && <h2 className='loading-message'>Page Loading 🍿</h2>}

                    {this.state.movieInfo.id && !this.state.error &&
                     <article className='movieDescription'>
                        <img className='movie-poster' src={this.state.movieInfo.poster_path} id={this.state.movieInfo.id} alt={'Cover art image for ' + this.state.movieInfo.title}></img>
                        <div className='movieDetailsCard'>
                            <h2>{this.state.movieInfo.title}</h2>
                            <h4>{this.state.movieInfo.tagline}</h4>
                            <p className='genre'>{this.formatGenres(this.state.movieInfo.genres)}</p>
                            <p><strong>Rating: </strong>{this.formatRating(this.state.movieInfo.average_rating)}/10</p>
                            <p><strong>Year Released: </strong>{this.formatReleaseDate(this.state.movieInfo.release_date)}</p>
                            <p className='overview'>{this.formatOverview(this.state.movieInfo.overview)}</p>
                            <p className='budget'><strong>Budget: </strong>{this.formatCurrency(this.state.movieInfo.budget)}</p>
                            <p className='revenue'><strong>Revenue: </strong>{this.formatCurrency(this.state.movieInfo.revenue)}</p>
                        </div>
                    </article> }
                    {this.state.movieTrailers.length && 
                        <div className='movie-trailer'>
                            <iframe
                                data-cy='video'
                                width='654'
                                height='380'
                                src={`https://www.youtube.com/embed/${this.state.movieTrailers[0].key}`}
                                frameBorder='0'
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                             />
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
