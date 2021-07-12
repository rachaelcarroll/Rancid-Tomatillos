
describe ('Main Page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });

    describe('Main Page Load', () => {
        
        it('should be able to visit the app and display the header', () => {
            cy.get('h1')
            .contains('Rancid Tomatillos')
        })

        it('should be able to visit the app and render all movies', () => {
            cy.fixture('/all_movie_data.json').then((data) => {
                cy.get('main').contains(data.movies[0].title)
                // const allMovieIds = data.movies.map(movie => movie.id);
                // allMovieIds.forEach(movieId => {
                })
                // cy.get('*[class^="moviesContainer"]').should('be.visible')
            });
          });
    })
