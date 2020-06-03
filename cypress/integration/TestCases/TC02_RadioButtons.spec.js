describe('Basic UI Elements',function(){

    it('Radio Buttons',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should('eq','Register')
        cy.get('input[value="Male"]').should('not.be.checked').click()
        cy.get('input[value="FeMale"]').should('not.be.checked').click()
    })
})