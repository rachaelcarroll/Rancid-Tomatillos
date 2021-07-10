import React, { Component } from 'react';
import './App.css';
// import movieData from '../../movieData';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { fetchMovies } from '../../apiCalls';
import { fetchMovieInfo } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      clickedMovie: {},
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
  
  updateClickedMovie = (id) => {
    fetchMovieInfo(id)
        .then(movie => this.setState({ clickedMovie: movie.movie }))
        .catch(error => this.setState({ error: 'Having trouble finding this movie right now...please try again.'} ));
  }

  render() {
    return (
      <main className="App">
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        {this.state.error && <h3>{this.state.error}</h3>}
        {!this.state.movies.length && !this.state.error && <h3>Loading...</h3>}
        {
          this.state.clickedMovie.id && !this.state.error ?
          <MovieDetails key={this.state.clickedMovie.id} movieInfo={this.state.clickedMovie} resetClickedMovie={this.resetClickedMovie}/> :
          <MoviesContainer 
          movies={this.state.movies} 
          updateClickedMovie={this.updateClickedMovie}
          />
        }     
      </main>
    );
   }
}

export default App;
