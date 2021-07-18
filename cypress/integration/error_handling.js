describe('Error Handling', () => {

      it('Should display error message for 500 status code', () => {
        cy
          .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 500})
          .visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });

      it('Should display error message for 400 status code', () => {
        cy
          .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 400})
          .visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });

      it('Should display error message for 404 status code', () => {
        cy
          .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 404})
          .visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });

      it('Should show error message when a single movie details page does not load', () => {
        cy
          .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {statusCode: 404})
          .visit('http://localhost:3000/337401')
          .get('.errorLoading')
          .contains('Having trouble finding movie information right now...please try again.')
      })

      it('Should show error message when a video does not load', () => {
        cy
          .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401/videos', {statusCode: 404})
          .visit('http://localhost:3000/337401')
          .get('.errorLoading')
          .contains('Sorry, this video is currently unavailable.')
      })
})
