import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { fetchMovies } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    const getMovies = async () => {
        try {
        let data = await fetchMovies();
        setDisplayedMovies(data.movies);
      } catch (error) {
        setError(error.message);
      }
    }
    getMovies();
  }, [])

    return (
      <section>
        <nav className='nav'>
          <div className='header'>
              <h1>RANCID TOMATILLOS</h1>
          </div>
        </nav>
        <main className="App">
          {error && <h3 className='errorLoading'>{error}</h3>}
          {!displayedMovies.length && !error && <h3>Loading Movies...</h3>}
          {!displayedMovies && error && <h3>{error}</h3>}
          <Switch>
            <Route exact path="/" render={() =>  
                <MoviesContainer 
                  movies={displayedMovies} 
                />
              }/>
            <Route exact path="/:id" render={({ match }) => {
              const selectedMovie = displayedMovies.find(movie => movie.id === parseInt(match.params.id))
              return <MovieDetails 
                key={selectedMovie.title} 
                id={selectedMovie.title}
                movieInfo={selectedMovie}
              /> 
            }}/>
            </Switch>
        </main>
        </section>
    );
}

App.propTypes = {
  displayedMovies: PropTypes.array,
}

export default App;
