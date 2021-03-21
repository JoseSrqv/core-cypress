/// <reference types="cypress" />
describe('First: Register test suit', () => {
    it('T1: Test url works', () => {
        cy.visit('https://staging-kfc-ec.getduna.com/')
    })
    it('T2: Register', () => {
        const email = "testcypress1@gmail.com"
        const password = "@Faker121250" 
        const password_conf = "@Faker121250"

        cy.visit('https://staging-kfc-ec.getduna.com'); 
        cy.get('#account-button').click();
        cy.get('.dropdown-item:nth-child(2)').click();
        
        cy.url().should('contains', 'https://staging-kfc-ec.getduna.com/signup')
        cy.location('pathname').should('equal', '/signup')

        cy.get('#spree_user_email').type(email);
        cy.get('#spree_user_password').type(password);
        cy.get('#spree_user_password_confirmation').type(password_conf);
        cy.get('.btn-block:nth-child(1)').click();
        
        cy.contains('Bienvenido! Te has dado de alta satisfactoriamente.')
      
    })
})


