describe ('Main Details Page', () => {

    beforeEach(() => {
        cy.seedAndVisit();
        })

    it('Should be able to click on a movie poster and be redirected to a new link', () => {
        cy
          .get('.moviesContainer')
          .get("a[name='Mulan']")
          .click()
          .url()
          .should('include', '337401')
    });

    it('Should see a movie details when clicking on a movie poster', () => {
        cy
          .get("a[name='Mulan']")
          .click()
          .get('.movieDetailsCard')
          .contains("Action")
          .get("img")
          .should("have.attr", "src")
          .should("include", "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg")
    })

    it('Should be able to enter a unique url with id in path and should render a single movie', () => {
        cy
          .visit('http://localhost:3000/337401')
          .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
          fixture: 'single_movie_data.json' 
        })
          .get('.movieDescription').children('.movieDetailsCard').contains('Mulan')
      })

      
      it('Should be able to view a movie trailer for an individual movie', () => {
        cy
          .get("a[name='Mulan']")
          .click()
          .get('.movieTrailer')
          .get('.video')
          .should("have.attr", "src")
          .should("include", "01ON04GCwKs")
      })
      
      it('Should be able to not see the search bar when an individual movie is viewed', () => {
        cy
          .get("a[name='Mulan']")
          .click()
          .get('input')
          .should('not.exist')

      })

      it('Should be able to not see the Display All Movies button when an individual movie is viewed', () => {
        cy
          .get("a[name='Mulan']")
          .click()
          .get('.nav')
          .get('.displayMovies')
          .should('not.exist')

      })

      it('Should return to home page view showing all movies when the exit button is clicked', () => {
          cy
            .get('.moviesContainer')
            .get("a[name='Mulan']").click()
            .get('button').click()
            .url().should('include', '/')
      })

})