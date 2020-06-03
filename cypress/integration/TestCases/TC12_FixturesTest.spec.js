describe('Fixtures test',function(){

    beforeEach(function(){
        cy.fixture('ConduitData').as('data')
    })

    it('Conduit - Valid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type(this.data.email)
        cy.get('input[type="password"]').type(this.data.password)
        cy.get('button[type="submit"]').click()
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })

    it('Conduit - Invalid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type(this.data.email)
        cy.get('input[type="password"]').type(this.data.passwordWrong)
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})