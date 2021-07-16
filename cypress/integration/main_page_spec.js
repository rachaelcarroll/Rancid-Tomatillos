
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

    
    it('Should be able to be able to naviagate back and forward in browser', () => {
      cy.visit('http://localhost:3000/337401')
      cy.go('back')
      cy.url().should('eq','http://localhost:3000/')
      cy.go('forward')
      cy.url().should('eq','http://localhost:3000/337401')
    })
});

describe.only('Error testing', () => {
    it('Should show an error message when no movies render', () => {
      cy
        .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 404})
        .visit('http://localhost:3000')

        .get('main')
        .get('.errorLoading')
        .contains('Error loading movies...please try again.')
    })
})
    



   