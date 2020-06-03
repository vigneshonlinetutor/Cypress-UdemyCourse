describe('Basic UI Elements', function () {

    it('Static Dropdown', function () {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#Skills').select('Android').should('have.value', 'Android')
    })

    it('Dynamic Dropdown', function () {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('span[role="combobox"]').click()
        cy.get('.select2-search__field').type('ind')
        cy.get('.select2-search__field').type('{enter}')
    })

    it('Multi Dropdown', function () {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
        cy.get('.ui-corner-all').contains('Danish').click()
    })
})