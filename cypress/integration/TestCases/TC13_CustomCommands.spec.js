describe('Fixtures test',function(){

    beforeEach(function(){
        cy.fixture('ConduitData').as('data')
    })

    it('Conduit - Valid Credentials',function(){
        cy.conduitLogin(this.data.email,this.data.password)
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })

    it('Conduit - Invalid Credentials',function(){
        cy.conduitLogin(this.data.email,this.data.passwordWrong)
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})