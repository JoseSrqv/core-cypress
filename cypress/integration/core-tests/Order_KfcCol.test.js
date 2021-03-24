
/// <reference types="cypress" />
describe('First: Make an order', () => {
    it('T1: Order with login', () => {

        cy.login('cypress1@gmail.com', '@Faker121250')

        cy.get('li:nth-child(1) span').click();
        cy.get('.col-6:nth-child(1) .w-100').click();

        // cy.wait(3000);

        // cy.visit('https://staging-kfc-co.getduna.com/t/menu/bebidas');
        // cy.get('li:nth-child(1) span').click();
        // cy.contains('Menú').children('svg').should('have.class', 'spree-icon.d-none.d-xl-inline-block').click();
        cy.get('li').contains('Menú').should('have.attr', 'href', '/menu').click({force: true});
        cy.url().should('contains', 'https://staging-kfc-co.getduna.com/menu');

        cy.get('.col-6:nth-child(15) .w-100').click();
        cy.wait(500);

        cy.url().should('contains', 'https://staging-kfc-co.getduna.com/t/menu/bebidas');
        cy.get('#product_150 .product-component-image').click();
        cy.get('#options_additional_information').click();
        cy.get('#options_additional_information').type('{backspace}');
        cy.get('#options_additional_information').type('{backspace}');
        cy.get('#options_additional_information').type('{backspace}');
        cy.get('#options_additional_information').type('Test cypress');
        cy.get('.quantity-select-increase').click();
        cy.get('#add-to-cart-button').click();
        cy.get('#add-to-cart-form').submit();
        // cy.get('.d-none > .spree-icon').click();
        
        cy.get('[id=link-to-cart').click();
        cy.location('pathname').should('equal', '/cart');
        cy.contains('.shopping-cart-header', 'Tu carro de compra');
    })
})