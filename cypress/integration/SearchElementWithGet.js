describe('Formas de encontrar un elemento', function(){
    it('buscar en buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola').clear().type(', excelente').clear();       
    })

})