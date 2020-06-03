describe('File upload',function(){

    it('Upload a pdf file',function(){
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        const file = 'sample.pdf';
        cy.get('input[type="file"]').attachFile(file);
        cy.get('input[value="Press"]').click()
        cy.get('body > :nth-child(2)').should('contain','You\'ve uploaded a file')
    })
})