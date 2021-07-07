import React, { Component } from 'react';
import './App.css';
import movieData from '../../movieData';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main className="App">
        <nav>
          <h1>Rancid Tomatillos</h1>
          <MoviesContainer movies={this.state.movies}/>
        </nav>
      </main>
    );
  }
}

export default App;
