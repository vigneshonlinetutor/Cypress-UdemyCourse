describe('Advanced UI Elements',function(){

    it('Xpath',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.xpath('//a[contains(text(),"Sign in")]').click()
        cy.xpath('//input[@placeholder="Email"]').type('cypressdemo@gmail.com')
        cy.xpath('//input[@placeholder="Password"]').type('cypressdemo')
        cy.xpath('//button[@type="submit"]').click()
    })
})