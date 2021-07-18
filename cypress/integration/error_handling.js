describe('Error Handling', () => {

      it('Should display error message for 500 status code', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 500})
        cy.visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });

      it('Should display error message for 400 status code', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 400})
        cy.visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });

      it('Should display error message for 404 status code', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 404})
        cy.visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });

      it('Should show error message when a single movie details page does not load', () => {
        cy
        .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {statusCode: 404})
        .visit('http://localhost:3000/337401')
        .get('.errorLoading').contains('Having trouble finding this movie right now...please try again.')
      })

        // .visit('http://localhost:3000/')
        // .get('.moviesContainer')
        // .get("a[name='Mulan']").click()
        // .get('button').click()
        // .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', { response: 404 })

        })
