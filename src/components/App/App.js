import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
// import movieData from '../../movieData';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import Nav from '../Nav/Nav';
import { fetchMovies } from '../../apiCalls';
// import { fetchMovieInfo } from '../../apiCalls';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieLibrary: [],
      displayedMovies: [],
      searchBar: '',
      error: ''
    }
  }

  componentDidMount = () => {
    fetchMovies()
      .then(data => this.setState({ movieLibrary: data.movies, displayedMovies: data.movies }))
      .catch(() => this.setState({ error: 'Error loading movies...please try again.'} ));
  }

  handleSearch = (event) => {
    const { value } = event.target
    const searchedMovies = this.state.movieLibrary.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))
    const searchError = !searchedMovies.length && 'Please search for another title'
    this.setState({displayedMovies: searchedMovies, searchBar: value, error: searchError})
  }

  handleDisplayAllMovies = () => {
    this.setState({ displayedMovies: this.state.movieLibrary })
    this.clearSearchBar()
  }

  clearSearchBar = () => {
    this.setState( { searchBar: ''})
  }
  // resetClickedMovie = () => {
  //   this.setState({clickedMovie: {}})
  // }
  
  getSelectedMovie = (id) => {
    console.log(typeof id)
    console.log("ID", id);
    console.log('ALL MOVIES DISPLAYED', this.state.displayedMovies);
    return this.state.displayedMovies.find(movie => movie.id === id);
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
      <section>
      <Nav
          search={this.state.searchBar}
          handleSearch={this.handleSearch}
          handleDisplayAllMovies={this.handleDisplayAllMovies}
        />
      <main className="App">
        {this.state.error && <h3 className='errorLoading'>{this.state.error}</h3>}
        {!this.state.movieLibrary.length && !this.state.error && <h3 >Loading...</h3>}
        {!this.state.displayedMovies && this.state.error && <h3>{this.state.error}</h3>}
        
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
            movies={this.state.displayedMovies} 
            // updateClickedMovie={this.updateClickedMovie}
            />
          }/>
           
      </main>
      </section>
    );
   }
}

App.propTypes = {
  movieLibrary: PropTypes.array,
  displayedMovies: PropTypes.array,
  searchBar: PropTypes.string,
  error: PropTypes.string
}

export default App;
