import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from '../../apiCalls';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieInfo: {}
        }
    }
   
    componentDidMount() {
        console.log("heyyyyyyyy", this.props.id);
        // this.props.updateClickedMovie(this.props.movieInfo.id);
        fetchMovieInfo(this.props.id)
            .then(movie => this.setState({ movieInfo: movie.movie }))
            .catch(error => this.setState({ error: 'Having trouble finding this movie right now...please try again.'} ));

    }

    // formatOverviewLength = () => {
    //     if (this.props.movieInfo.overview.length > 182) {
    //         const shortOverview = this.props.movieInfo.overview.slice(0, 182) + '...';
    //         return shortOverview;
    //     } else {
    //         return this.props.movieInfo.overview;
    //     }
    // }
    render() {
        // const formattedDate = 
        console.log("DO YOU RENDER")
        const movieInfo = this.props.movieInfo
        // !this.state.movieInfo.id ? movieInfo = this.props.movieInfo : { movieInfo } = this.state.movieInfo;
        console.log('movie info in render', movieInfo)
        const { resetClickedMovie } = this.props;
        const formattedRating = movieInfo.average_rating.toFixed(0);

        return (

            <section className="movieDetailsContainer" style={{ backgroundImage: `url(${movieInfo.backdrop_path})`}}>
                <Link to="/">
                    <button className='returnHome' onClick={() => {resetClickedMovie()}}>X</button>
                </Link>
                <div className='movieDescription'>
                    <img className='movie-poster' src={movieInfo.poster_path} id={movieInfo.id} alt={'Cover art image for ' + movieInfo.title}></img>
                    <div className='movieDetailsCard'>
                        <h2>{movieInfo.title}</h2>
                        <h4>{movieInfo.tagline}</h4>
                        <p>{"Genre: " + movieInfo.genres}</p>
                        <p>{"Rating: " + formattedRating + "/10"}</p>
                        <p>{movieInfo.release_date}</p>
                        {/* <p className='overview'>{this.formatOverviewLength()}</p> */}
                    </div>
                </div>
            </section>
        )
    }
}
MovieDetails.propTypes = {
    movieInfo: PropTypes.object,
    resetClickedMovie: PropTypes.func,
  }

export default MovieDetails;
