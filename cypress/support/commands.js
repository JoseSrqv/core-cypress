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
Cypress.Commands.add("login", (email, password) => {

  cy.viewport(320, 480)
    cy.visit('https://staging-kfc-co.getduna.com/')

    cy.get('#account-button').click();
    cy.get('.dropdown-item:nth-child(1)').click();

    cy.location('pathname').should('equal', '/login')

    cy.get('#spree_user_email').type(email); 
    cy.get('#spree_user_password').type(password);
    cy.get('label:nth-child(3)').click();
    cy.get('[type=submit').click();

    // cy.wait(4000);

    cy.contains('.alert > span', 'Conectado con éxito')
    cy.location('pathname').should('equal', '/account')
    cy.contains('.account-page-user-info-item-definition', email)

  })
