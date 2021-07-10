export const fetchMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if(!response.ok) {
          throw Error('Error fetching movies')
        }
        return response.json()
      })
  }