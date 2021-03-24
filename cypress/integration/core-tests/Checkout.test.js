/// <reference types="cypress" />
describe('First: Checkout', () => {
    it('T1: Add address', () => {

        cy.login('testcypress1@gmail.com', '@Faker121250')
        cy.get('[id=link-to-cart').click()
        cy.location('pathname').should('equal', '/cart')
        cy.contains('.shopping-cart-header', 'Tu carro de compra')

        // cy.get('form:nth-child(11)').submit()
        cy.get('#checkout-link').click()

        cy.url().should('contains', 'https://staging-kfc-ec.getduna.com/checkout');
        cy.get('#order_ship_address_attributes_firstname').clear().type('Cypress name');
        cy.get('#order_ship_address_attributes_lastname').clear().type('Cypress  lastname');
        cy.get('#order_ship_address_attributes_address1').clear().type('Centro comercial el bosque', {delay: 100}).type("{enter}", { delay: 100 });

        // cy.get('#order_ship_address_attributes_address1').type('{downarrow}');
        // cy.get('#order_ship_address_attributes_address1').type('Centro Comercial El Bosque, El Bosque, Quito, Ecuador');
        // cy.get('.custom-map-control-button').click();
        // cy.get('.custom-map-control-button').click();

        // cy.get('#order_ship_address_attributes_address2').click();
        // cy.get('#order_ship_address_attributes_address2').type('{backspace}');
        // cy.get('#order_ship_address_attributes_address2').type('{backspace}');
        cy.get('#order_ship_address_attributes_address2').clear().type('Cypress direction');
        cy.get('#order_ship_address_attributes_phone').clear().type('0123456789');
        cy.get('#order_ship_address_attributes_id_number').clear().type('1111111116');

        // cy.get('#checkout_form_address').click();
        // cy.get('.checkout-content-save-continue-button').submit()

        cy.preventFormSubmitDefault("form");
        cy.get('.checkout-content-save-continue-button').click()
        // cy.get('#checkout_form_address').submit()
        // cy.wait(150)
        // cy.get('#checkout_form_address').click();
        // cy.url().should('include', '/delivery');
        // cy.wait(2000)

        cy.location('pathname').should('equal', '/checkout') //This behaviour is strange, the path is /delivery, anyway the following asserting verify the order flow. 

        //from delivery method to finish the order
        // cy.get('#order_special_instructions').type('Cypress instrucciones de envio');

        // cy.get('.btn-primary').click();
        cy.preventFormSubmitDefault("form");
        // cy.wait(2000);
        cy.get('.checkout-content-save-continue-button').click({force: true});
        cy.wait(6000);
        // cy.get('[data-hook="buttons"] > .btn').click('top', {force: true});
        // cy.contains('Guardar y continuar').click()
        cy.url().should('include', '/payment');
        // cy.get('.btn-primary').click();
        cy.get('#checkout_form_payment').submit();
        cy.url().should('include', '/orders/');

        cy.contains('.w-100:nth-child(3)', 'Orden recibida correctamente');         
    })
})