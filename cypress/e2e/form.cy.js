describe('form spec', () => {
  beforeEach(() =>{
    cy.visit("http://localhost:3000/")
})

  it('contain visible label button input',()=>{
    cy.visit('http://localhost:3000/public/index.html')
    cy.get('button', { timeout: 10000 })
      .should('be.visible')
    cy.get('input', { timeout: 10000 })
      .should('be.visible')
    cy.get('label', { timeout: 10000 })
      .should('be.visible')
    cy.get('select', { timeout: 10000 })
      .should('be.visible')

      cy.get('pre', { timeout: 10000 })
      .should('be.visible')
    // cy.get('p', { timeout: 10000 })
    //   .should('not.visible')
    cy.get('form', { timeout: 10000 })
      .should('be.visible')

      })

      it("looks at body and see all elements in the form and fills it in", () => {
        cy.get('body').should('exist')
        // cy.get('form').should('contain', 'Volunteer Sign Up')
        cy.get('[data-cy="name"]').type('ffa')
        cy.get('[data-cy="name"]').should("have.value","ffa");
        cy.get('[data-cy="email"]').clear().type('ffa@frogs.com');
        cy.get('[data-cy="email"]').should("have.value","ffa@frogs.com");    
        cy.get('[data-cy="motivation"]').clear().type('I am motivated and know everything there is to know')
        cy.get('[data-cy="motivation"]').should("have.value","I am motivated and know everything there is to know");
        cy.get('[data-cy="positions"]').select('Yard Work')
        // cy.get('[type=checkbox]').clear().check()
        // cy.get('[type=checkbox]').should("be.checked")
        // cy.get('[data-cy=submitted').should('not.be.disabled');
        // cy.get('[data-cy="submitted"]').click();
        cy.screenshot('my-img-shotup');
        cy.get('pre').should('exist')
        // cy.get('[data-cy="submitted"]').then((x) => {
        //   if (x.is("enabled")) {
        //     cy.get('[data-cy="submitted"]').click();
        //   }  
        // });

        // cy.get('[data-cy="submit"]').type('Submit').should('have.value', 'Submit')
        
    });
})

