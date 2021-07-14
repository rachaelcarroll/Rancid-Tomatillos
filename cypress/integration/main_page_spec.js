
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

    it('Should see a movie details when clicking on a movie poster', () => {
        cy.get("a[name='Mulan']")
          .click()
        cy.contains("She is spirited")
        cy.get("img")
        .should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg")
    })

});


   