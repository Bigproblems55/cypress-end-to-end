describe('form spec', () => {
  beforeEach(() =>{
    cy.visit("http://localhost:3000/")
});

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

      });

      it("looks at body and see all elements in the form and fills it in", () => {
        cy.get('body').should('exist')
        // cy.get('[data-cy="name"]')
        // .then((r)=>{
        //   if(r === undefined){
        //     r = 'Name';
        //   }
        // })
        cy.get('[data-cy="name"]').then((x)=>{
          if(x.value === undefined){
            x.value = 'ffa';
          }else{
            if(x.value == 'ffa'){
              return 0;
            }
            
              cy.get('[data-cy="name"]').clear().type('ffa');
              cy.get('[data-cy="name"]').should("have.value","ffa");
            
          }
          cy.get('[data-cy="name"]').should('not.be.disabled');
        });
        cy.get('[data-cy="email"]').then((x)=>{
          if(x.value === undefined){
             x.value = 'ffa@frogs.com'; 
          }else{
            cy.get('[data-cy="email"]').should("have.value","ffa@frogs.com"); 
          }
          cy.get('[data-cy="email"]').clear();
          cy.get('[data-cy="email"]').type('ffa@frogs.com');
          cy.get('[data-cy="email"]').should('not.be.disabled');
        });
        
        cy.get('[data-cy="motivation"]')
        .then((x)=>{
          if(x.value === undefined){
            x.value = 'I am motivated and know everything there is to know';
          }else{
            cy.get('[data-cy="motivation"]').should("contain","I am motivated and know everything there is to know");
          }
          cy.get('[data-cy="motivation"]').type("I am motivated and know everything there is to know");
        });
        cy.get('[data-cy="positions"]')
        .then((x)=>{
          if(x.isSelected === false){
            x.select('Yard Work');
          }
          
          
        });
        cy.get('[data-cy="agree"]')
          .then((x)=>{
            x.checked =true;
          })
        cy.screenshot('my-project-img');
        cy.get('pre')
        .then((x)=>{
          if(x === undefined){
            x.should('exist');
          }
        });
    });
});

