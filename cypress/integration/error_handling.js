describe('Error Handling', () => {
    
      it('Should display error message for 500 status code', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 500
        })
        cy.visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });

      it('Should display error message for 400 status code', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 400
        })
        cy.visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });

      it('Should display error message for 404 status code', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 404
        })
        cy.visit('http://localhost:3000/')
          .contains('Error loading movies...please try again.')
      });
