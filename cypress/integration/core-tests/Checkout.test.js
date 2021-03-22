/// <reference types="cypress" />
describe('First: Checkout', () => {
    it('T1: Add address', () => {
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


        cy.visit('https://staging-kfc-ec.getduna.com/cart');
        cy.get('#checkout-link').click();
        cy.get('form:nth-child(11)').submit();
        cy.url().should('contains', 'https://staging-kfc-ec.getduna.com/checkout');
        cy.get('#order_ship_address_attributes_firstname').click();
        cy.get('#order_ship_address_attributes_firstname').type('Cypress name');
        cy.get('#order_ship_address_attributes_lastname').click();
        cy.get('#order_ship_address_attributes_lastname').type('Cypress  lastname');
        cy.get('#order_ship_address_attributes_address1').click();
        cy.get('#order_ship_address_attributes_address1').type('Centro comercial el bosque');
        cy.get('#order_ship_address_attributes_address2').click();
        cy.get('#order_ship_address_attributes_address2').type('{backspace}');
        cy.get('#order_ship_address_attributes_address2').type('{backspace}');
        cy.get('#order_ship_address_attributes_address2').type('Cypress direction');
        cy.get('#order_ship_address_attributes_phone').click();
        cy.get('#order_ship_address_attributes_phone').type('0123456789');
        cy.get('#order_ship_address_attributes_id_number').click();
        cy.get('#order_ship_address_attributes_id_number').type('1111111116');
        cy.get('.checkout-content-save-continue-button').click();
        cy.get('#checkout_form_address').submit();
        cy.url().should('contains', 'https://staging-kfc-ec.getduna.com/checkout/address');

    })
})