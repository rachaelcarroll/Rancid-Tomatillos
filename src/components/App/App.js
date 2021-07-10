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
      clickedMovie: {}
      // error: ''
    }
  }

  componentDidMount = () => {
    fetchMovies()
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => console.log(error));
  }

  resetClickedMovie = () => {
    this.setState({clickedMovie: {}})
  }
  
  updateClickedMovie = (id) => {
    fetchMovieInfo(id)
        .then(movie => this.setState({ clickedMovie: movie.movie }))
        .catch(error => console.log(error));
  }

  render() {
    return (
      <main className="App">
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        {!this.state.movies.length && <h3>Loading...</h3>}
        {
          this.state.clickedMovie.id ?
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
