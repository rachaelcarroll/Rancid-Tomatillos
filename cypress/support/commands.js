Cypress.Commands.add('seedAndVisit', () => {
    cy.fixture('all_movie_data.json')
            .then((movies) => {
                cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
                statusCode: 201,
                body: movies
                })
            })
            cy.visit('http://localhost:3000')
})
