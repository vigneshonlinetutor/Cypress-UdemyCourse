describe('Hooks Conduit',function(){

    beforeEach(function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
    })

    it('Create new post',function(){
        cy.contains('New Post').click()
        cy.get('input[placeholder="Article Title"]').type('Demo Post')
        cy.get('input[placeholder="What\'s this article about?"]').type('Demo Post for testing')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('This is a Demo post for testing')
        cy.get('input[placeholder="Enter tags"]').type('Demo')
        cy.get('button[type="button"]').click()
    })

    it('Verify newly created post',function(){
        cy.contains('Global Feed').click()
        cy.get('.article-preview:nth-child(1)').should('contain','Demo Post')
    })

    afterEach(function(){
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })
})