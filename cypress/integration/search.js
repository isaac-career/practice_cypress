describe('Search test cases', function(){
    before(function(){
        cy.log("This is de Before methos");
    })
    after(function(){
        cy.log("this is de before method");
    })

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })

    afterEach(function(){
        cy.log("Final of this test");
    })

    it('Search with Results', function(){
        
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"hat"');
    })

    it('Search with Results', function(){
        
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
})