/// <reference types="Cypress" />


describe('Test Suite Zerro Bakn, () => {

    it('TC1 - Test Home Image', () => {

        cy.visit('http://zero.webappsecurity.com')
        cy.get('.active > img').should('be.visible')
        cy.get('.active > .custom > h4').contains('Online Banking')
      
    })

    it('TC2 - Test E2E - Transfer of founds ', () => {
        
        cy.visit('http://zero.webappsecurity.com')
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type("500")
        cy.get('#tf_description').type("Transfer of 500 USD")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction.")

    })

    it.only('TC3 - Test E2E - Validate interacción with money map', () => {
        
        cy.visit('http://zero.webappsecurity.com');
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1275').should("be.visible")

    });
})