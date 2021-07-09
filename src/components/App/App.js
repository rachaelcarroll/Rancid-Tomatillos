import React, { Component } from 'react';
import './App.css';
import movieData from '../../movieData';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      // isClicked: false,
      clickedMovie: {},
      // error: ''
    }
  }

  updateIsClicked = () => {
  this.setState({clickedMovie: {}})
  }

  selectMovie = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({clickedMovie: selectedMovie});
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
          <MovieDetails key={this.state.clickedMovie.id} movieInfo={this.state.clickedMovie}/> :
          <MoviesContainer 
          movies={this.state.movies} 
          // isClicked={this.state.isClicked} 
          // clickedMovie={this.state.clickedMovie}
          updateIsClicked={this.updateIsClicked}
          selectMovie={this.selectMovie}
          />
        }     
      </main>
    );
   }
}

export default App;
