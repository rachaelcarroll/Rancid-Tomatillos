
describe ('Main Page', () => {

    beforeEach(() => {
      cy.seedAndVisit();
    })
        
    it('should be able to visit the app and display the header', () => {
      cy
        .get('.nav')
        .get('.header')
        .contains('RANCID TOMATILLOS')
    })

    it('Should be able to visit the page and render all movies', () => {
      cy
        .get('main')
        .children('.moviesContainer')
        .url()
        .should('include', '/')
    })

    it('Should be able to type in the search field', () => {
      cy
        .get('input[type=text]')
        .type('Mulan')
        .should('have.value', 'Mulan')
    })

    it('Should be able to display only the movie(s) that match search criteria', () => {
      cy
        .get('input[type=text]')
        .type('Av')
        .get('.moviesContainer')
        .get("img")
        .should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg")
    })

    
    it('Should be able to be able to naviagate back and forward in browser', () => {
      cy
        .visit('http://localhost:3000/337401')
        .go('back')
        .url().should('eq','http://localhost:3000/')
        .go('forward')
        .url().should('eq','http://localhost:3000/337401')
    })
});

    



   