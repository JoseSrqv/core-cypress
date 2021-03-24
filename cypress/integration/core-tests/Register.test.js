/// <reference types="cypress" />
describe('First: Register test suit', () => {
    it('T1: Register', () => {
        const email = "cypress1@gmail.com"
        const password = "@Faker121250" 
        const password_conf = "@Faker121250"

        cy.visit('https://staging-kfc-co.getduna.com'); 
        cy.get('#account-button').click();
        cy.get('.dropdown-item:nth-child(2)').click();
        
        cy.url().should('include', '/signup')
        cy.location('pathname').should('equal', '/signup')

        cy.get('#spree_user_email').clear().type(email);
        cy.get('#spree_user_password').clear().type(password);
        cy.get('#spree_user_password_confirmation').type(password_conf);

        // cy.wait(5000);
        cy.get(':nth-child(5) > .btn').click({force: true});
       
        cy.contains('.alert' , 'Bienvenido! Te has dado de alta satisfactoriamente.')
    })
})


