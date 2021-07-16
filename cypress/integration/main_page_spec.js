
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

    it('Should show a warning message when no movies render', () => {
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


   