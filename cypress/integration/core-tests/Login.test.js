/// <reference types="cypress" />

describe('First: Login test suit', () => {
    it('T1: Doest work with wrong credentials', () => {
        const email = "testcypress999@gmail.com"
        const password = "@Faker121250"

        cy.visit('https://staging-kfc-ec.getduna.com/')

        cy.get('#account-button').click();
        cy.get('.dropdown-item:nth-child(1)').click();

        cy.location('pathname').should('equal', '/login')

        cy.get('#spree_user_email').type(email); 
        cy.get('#spree_user_password').type(password);
        cy.get('label:nth-child(3)').click();
        cy.get('[type=submit').click();

        cy.contains('.alert > span', 'Email o contraseña inválida.') 
        
        cy.location('pathname').should('equal', '/login')
        //Aditional information for test actives classes
        // cy.contains('a.nav-link', 'Your feed').should('have.class', 'nav-link active')
        // cy.contains('a.nav-link', 'Global feed').should('not.have.class', 'nav-link active')

        // cy.contains('a.nav-link', 'Gobal Feed').click()
        // cy.contains('a.nav-link', 'Global feed').should('have.class', 'nav-link active')
    })
    it('T2: Work with correct credentials', () => {

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
    })
    it('T3: Email validation', () => {

    })
    it('T4: Password validation', () => {

    })
})