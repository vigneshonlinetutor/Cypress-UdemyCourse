describe('Basic UI Elements',function(){

    it('Check Boxes',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should('eq','Register')

        //To Check using multiple line
        cy.get('#checkbox1').should('not.be.checked')
        cy.get('#checkbox3').should('not.be.checked')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        //To check using one line
        cy.get('input[type="checkbox"]').check(['Cricket','Movies'])
    })
})