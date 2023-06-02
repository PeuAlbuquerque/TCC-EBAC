/// <reference types="cypress" />

describe('Teste da Funcionalidade Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve adcionar diferentes produtos ao carrinho', () => {
        cy.addProduct(0, 'XS', 'Blue', 8, 'XS', 'Blue', 0, 'XL', 'Black')
        cy.get('.page-title').should('contain', 'Carrinho')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
    });
});


