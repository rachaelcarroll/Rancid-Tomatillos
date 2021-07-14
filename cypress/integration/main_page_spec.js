
describe ('Main Page', () => {

    beforeEach(() => {
        cy.fixture('all_movie_data.json')
          .then((movies) => {
            cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
              statusCode: 201,
              body: movies
            })
          })
        cy.visit('http://localhost:3000')
      })
        
    it('should be able to visit the app and display the header', () => {
        cy.get('h1')
        .contains('Rancid Tomatillos')
    })

    it('Should be able to visit the page and render all movies', () => {
        cy.get('main').children('.allMovies').children('.moviesContainer')
        cy.url().should('include', '/')
    })

});


   