import React, { Component } from 'react';
import './App.css';
// import movieData from '../../movieData';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { fetchMovies } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      // movies: movieData.movies,
      clickedMovie: {},
      // error: ''
    }
  }

  componentDidMount() {
    fetchMovies()
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => console.log(error));
  }

  componentDidUpdate() {

  }

  resetClickedMovie = () => {
  this.setState({clickedMovie: {}})
  }

  updateClickedMovie = (id) => {
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
          <MovieDetails key={this.state.clickedMovie.id} movieInfo={this.state.clickedMovie} resetIsClicked={this.resetClickedMovie}/> :
          <MoviesContainer 
          movies={this.state.movies} 
          updateClickedMovie={this.updateClickedMovie}
          // isClicked={this.state.isClicked} 
          // clickedMovie={this.state.clickedMovie}
          // updateIsClicked={this.updateIsClicked}
          />
        }     
      </main>
    );
   }
}

export default App;
