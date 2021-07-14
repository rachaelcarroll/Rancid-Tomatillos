import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
// import movieData from '../../movieData';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { fetchMovies } from '../../apiCalls';
import { fetchMovieInfo } from '../../apiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      // clickedMovie: {},
      error: ''
    }
  }

  componentDidMount = () => {
    fetchMovies()
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState({ error: 'Error loading movies...please try again.'} ));
  }

  resetClickedMovie = () => {
    this.setState({clickedMovie: {}})
  }
  
  getSelectedMovie = (id) => {
    console.log(typeof id)
    console.log("ID", id);
    console.log('MOVIE ID IN STATe', this.state.movies);
    console.log('FIND MOVIE', this.state.movies.find(movie => movie.id === id));
    return this.state.movies.find(movie => movie.id === id);
  }
  // updateClickedMovie = (id) => {
  //   console.log("ID", id);
  //   console.log('Are you getting here?')

  //   fetchMovieInfo(id)
  //       .then(movie => this.setState({ clickedMovie: movie.movie }))
  //       .catch(error => this.setState({ error: 'Having trouble finding this movie right now...please try again.'} ));
  //   console.log("STATE", this.state.clickedMovie);
  // }

  render() {
    return (
      <main className="App">
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        {this.state.error && <h3>{this.state.error}</h3>}
        {!this.state.movies.length && !this.state.error && <h3>Loading...</h3>}
        
          <Route exact path="/:id" render={({ match }) => {
            const movieURLId = parseInt(match.params.id);
            const selectedMovie = this.getSelectedMovie(movieURLId);
            console.log('SELECTED MOVIE', selectedMovie);
            return <MovieDetails key={movieURLId} 
            id={movieURLId}
            movieInfo={selectedMovie}
            /> 
          }}/>
          <Route exact path="/" render={() =>  
            <MoviesContainer 
            movies={this.state.movies} 
            updateClickedMovie={this.updateClickedMovie}
            />
          }/>
           
      </main>
    );
   }
}

App.propTypes = {
  movies: PropTypes.array,
  clickedMovie: PropTypes.object,
  error: PropTypes.string
}

export default App;
