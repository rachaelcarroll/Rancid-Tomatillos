import React, { Component } from 'react';
import './App.css';
import movieData from '../../movieData';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      isClicked: false,
      clickedMovie: {}
      // error: ''
    }
  }

  updateIsClicked = () => {
    // this.setState({ isClicked: true })
  this.state.isClicked ? this.setState({isClicked: false}): this.setState({isClicked: true});
  }

  // Would need another method like resetIsClicked that returns it to false

  updateClickedMovie = (clickedMovie) => {
    this.setState({clickedMovie})
  }

  render() {
    return (
      <main className="App">
        <nav>
          <h1>Rancid Tomatillos</h1>
        </nav>
        {!this.state.movies.length && <h3>Loading...</h3>}
        <MoviesContainer 
        movies={this.state.movies} 
        isClicked={this.state.isClicked} 
        updateIsClicked={this.updateIsClicked}
        clickedMovie={this.state.clickedMovie}
        updateClickedMovie={this.updateClickedMovie}
        />
      </main>
    );
   }
}

export default App;
