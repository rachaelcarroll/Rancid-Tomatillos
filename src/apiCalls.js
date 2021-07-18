export const fetchMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if(!response.ok) {
          throw Error('Error fetching movies')
        }
        return response.json()
      })
  }

export const fetchMovieInfo = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => {
            if(!response.ok) {
                throw Error('Error fetching movies')
            } 
            return response.json()
        })
}

export const fetchVideo = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => {
        if(!response.ok) {
          throw Error('Error fetching videos')
        }
        return response.json()
      })
}