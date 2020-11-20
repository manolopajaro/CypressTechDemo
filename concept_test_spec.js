describe ("Navigation", function()
{
    it("access URL",function()
    {
        cy.visit('https://www.google.com/')
        cy.xpath("//*[@name='q']").should("be.enabled").type("Casa Blanca")
            .type('{enter}')
        cy.url().should("contain","Casa Blanca")
    })
})