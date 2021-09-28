describe("Pruebas en el sitio women con checks", function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    })

    it("Large Tops Search", function(){
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check;        
    })

    it("Highest price sorted", function(){
        cy.get('#selectProductSort').select('Price: Highest first');
    })

})