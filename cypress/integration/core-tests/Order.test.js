
/// <reference types="cypress" />
describe('First: Make an order', () => {
    it('T1: Order with login login', () => {
        const email = 'testcypress1@gmail.com'
        const password = '@Faker121250'
        
        cy.visit('https://staging-kfc-ec.getduna.com/')
        cy.get('#account-button').click();
        cy.get('.dropdown-item:nth-child(1)').click();

        cy.location('pathname').should('equal', '/login')

        cy.get('#spree_user_email').type(email); 
        cy.get('#spree_user_password').type(password);
        cy.get('label:nth-child(3)').click();
        cy.get('[type=submit').click();

        cy.contains('.alert > span', 'Conectado con éxito')
        cy.location('pathname').should('equal', '/account')
        cy.contains('.account-page-user-info-item-definition', email)


        cy.get('li:nth-child(1) span').click();
        cy.get('.col-6:nth-child(1) .w-100').click();

        cy.get('#product_926 .mt-auto').click();
        cy.get('#original-o-crispy-original').click();
        cy.get('#sabor-de-bebida-pepsi').click();
        cy.get('.complement-group-select:nth-child(1) .d-flex:nth-child(1) .border-0:nth-child(3)').dblclick();
        cy.get('.complement-group-select:nth-child(1) > .group-divider > .d-flex:nth-child(2) .border-0:nth-child(3)').dblclick();
        cy.get('.complement-group-select:nth-child(1) > .group-divider > .d-flex:nth-child(2) .border-0:nth-child(3)').click();
        cy.get('.complement-group-select:nth-child(1) .d-flex:nth-child(3) .border-0:nth-child(3)').dblclick();
        cy.get('.complement-group-select:nth-child(1) .d-flex:nth-child(3) .border-0:nth-child(3)').click();
        cy.get('.complement-group-select:nth-child(1) .d-flex:nth-child(3) .border-0:nth-child(3)').click();
        cy.get('#options_additional_information').click();
        cy.get('#options_additional_information').type('Cypress test');
        cy.get('.quantity-select-increase').click();
        cy.get('#add-to-cart-button').click();

        cy.get('[id=link-to-cart]').click();
        cy.location('pathname').should('equal', '/cart');
        cy.contains('.shopping-cart-header', 'Tu carro de compra');
    })
})