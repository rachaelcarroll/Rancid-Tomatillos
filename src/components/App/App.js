import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import Nav from '../Nav/Nav';
import { fetchMovies } from '../../apiCalls';
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
    this.setState({error: ''})
  }

  clearSearchBar = () => {
    this.setState( { searchBar: ''})
  }

  getSelectedMovie = (id) => {
    return this.state.displayedMovies.find(movie => movie.id === id);
  }

  render() {

    return (
      <section>
      <Nav
          search={this.state.searchBar}
          handleSearch={this.handleSearch}
          handleDisplayAllMovies={this.handleDisplayAllMovies}
          selectedMovie={this.state.selectedMovie}
        />
      }
      <main className="App">
        {this.state.error && <h3 className='errorLoading'>{this.state.error}</h3>}
        {!this.state.movieLibrary.length && !this.state.error && <h3 >Loading...</h3>}
        {!this.state.displayedMovies && this.state.error && <h3>{this.state.error}</h3>}
        
          <Route exact path="/:id" render={({ match }) => {
            const movieURLId = parseInt(match.params.id);
            const selectedMovie = this.getSelectedMovie(movieURLId);
            return <MovieDetails 
              key={movieURLId} 
              id={movieURLId}
              movieInfo={selectedMovie}
              handleDisplayAllMovies={this.handleDisplayAllMovies}
            /> 
          }}/>
          <Route exact path="/" render={() =>  
            <MoviesContainer 
              movies={this.state.displayedMovies} 
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
