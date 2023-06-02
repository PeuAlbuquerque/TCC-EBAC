// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addProduct', (product1, size, color, product2, size2, color2, product3, size3, color3) => {
    cy.get('[class="product-block grid"]')
        .eq(product1)
        .click()
    cy.get('.button-variable-item-' + size).click()
    cy.get('.button-variable-item-' + color).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    
    cy.get('[class="product-block grid"]')
    .eq(product2)
        .click()
    cy.get('.button-variable-item-' + size2).click()
    cy.get('.button-variable-item-' + color2).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('#primary-menu > .menu-item-629 > a').click()
    
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
    .eq(product3)
        .click()
    cy.get('.button-variable-item-' + size3).click()
    cy.get('.button-variable-item-' + color3).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
})