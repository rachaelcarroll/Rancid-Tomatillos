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
        fetchMovieInfo(this.props.id)
            .then(movie => this.setState({ movieInfo: movie.movie }))
            .catch(error => this.setState({ error: 'Having trouble finding this movie right now...please try again.'} ));
    }

   
    render() {


    //     const formatOverviewLength = () => {
    //     if (this.state.movieInfo.overview.length > 182) {
    //         const shortOverview = this.state.movieInfo.overview.slice(0, 182) + '...';
    //         return shortOverview;
    //     } else {
    //         return this.state.movieInfo.overview;
    //     }
    // }
        if (!this.state.movieInfo) {
            return <h2 className='loading-message'>Page Loading 🍿</h2>
          }

        return (

            <section className="movieDetailsContainer" style={{ backgroundImage: `url(${this.state.movieInfo.backdrop_path})`}}>
                <Link to="/">
                    <button className='returnHome'>X</button>
                </Link>
                <div className='movieDescription'>
                    <img className='movie-poster' src={this.state.movieInfo.poster_path} id={this.state.movieInfo.id} alt={'Cover art image for ' + this.state.movieInfo.title}></img>
                    <div className='movieDetailsCard'>
                        <h2>{this.state.movieInfo.title}</h2>
                        <h4>{this.state.movieInfo.tagline}</h4>
                        <p>{"Genre: " + this.state.movieInfo.genres}</p>
                        {/* <p>{"Rating: " + formattedRating + "/10"}</p> */}
                        <p>{this.state.movieInfo.release_date}</p>
                        <p className='overview'>{this.state.movieInfo.overview}</p>
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
