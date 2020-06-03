describe('Mocks Testing',function(){

    beforeEach(function(){
        cy.visit('http://localhost:4100/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
        cy.server()
    })

    it('Tags testing',function(){
        cy.route('GET','**/tags','fixture:tags.json')
        cy.contains('Your Feed').should('be.visible')
        cy.get('.tag-list').should('contain','cypress').and('contain','testing').and('contain','automation')

    })

    it('Global Feed Article testing',function(){
        cy.route('GET','**/articles*','fixture:article.json')
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').click()
        cy.get('.col-md-9').should('contain','Demo-Article')
    })


})