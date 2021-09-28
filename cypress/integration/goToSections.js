describe('Go to diff sections', function(){
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');   
    })
    
    it('Go to Woman section', function(){
        
        cy.get('[class=sf-with-ul]').first().click();
    })

    it('Go to dress section', function(){
        cy.get('[class=sf-with-ul]').eq(3).click();
    })
})