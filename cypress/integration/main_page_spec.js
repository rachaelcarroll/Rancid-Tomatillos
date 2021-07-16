
describe ('Main Page', () => {

    beforeEach(() => {
      cy.seedAndVisit();
      })
        
    it('should be able to visit the app and display the header', () => {
        cy.get('h1')
        .contains('Rancid Tomatillos')
    })

    it('Should be able to visit the page and render all movies', () => {
        cy.get('main').children('.moviesContainer')
        cy.url().should('include', '/')
    })

    // it('Should be able to click on a movie poster and be redirected to a new link', () => {
    //     cy
    //       .get('.moviesContainer').get("a[name='Mulan']").click()
    //       .url().should('include', '337401')
    // });

    // it('Should see a movie details when clicking on a movie poster', () => {
    //     cy.get("a[name='Mulan']")
    //       .click()
    //     cy.contains("Action")
    //     cy.get("img")
    //     .should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg")
    // })

    // it('Should be able to enter a unique url with id in path and should render a single movie', () => {
    //     cy.visit('http://localhost:3000/337401')
    //     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
    //       fixture: 'single_movie_data.json' 
    //     })
    //     cy.get('.movieDescription').children('.movieDetailsCard').contains('Mulan')
    //   })

    //   it('Should return to home page view showing all movies when the exit button is clicked', () => {
    //     cy
    //     .get('.moviesContainer')
    //     .get("a[name='Mulan']").click()
    //     .get('button').click()
    //     cy.url().should('include', '/')
    //   })

});


   