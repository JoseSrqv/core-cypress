/// <reference types="cypress" />
describe('First: Home buttons', () => {

    //Adding a hook that runs before the test
    beforeEach(() => {
        cy.login('testcypress1@gmail.com', '@Faker121250')
    })

    it('T1: Menu button', () => {
        cy.get('.ml-md-5 > li:nth-child(1) > a').click()
        cy.location('pathname').should('equal', '/menu')
        cy.contains('.p-3', 'Elige una categoría').should('have.class', 'text-muted')
    })
    it('T2: Promotion button', () => {
        cy.get('[id=promociones').click()
        // cy.location('pathname').should('equal', '/promociones')
        cy.url().should('include','/promociones')
        cy.contains('.py-md-3.text-uppercase.taxon-title', 'PROMOCIONES')

    })
    it('T3: Search bar with results', ()=>{
        const word = 'Z'
        cy.get('#search-bar #keywords').type(word + '{enter}')
        cy.get('.plp-results-text').should('have.class', 'text-uppercase')
        cy.contains('.plp-results-text', 'RESULTADOS PARA ' + '\'' + word + '\'') //cypress allows partial texts

    })
    it('T4: Search bar without results', () => {
        const word = 'failed search' 
        cy.get('#search-bar #keywords').type(word + '{enter}')
        cy.contains('.plp-not-found-header', 'No se encontraron resultados') 
    })
    it('T5: Log out', () => {
        cy.get('#account-button').click()
        cy.get('.dropdown-item:nth-child(2)').click()
        cy.location('pathname').should('equal', '/login')
        cy.contains('.alert > span', 'Abandonado satisfactoriamente.')

    })
    it('T6: Cart view', () => {
        cy.get('[id=link-to-cart').click()
        cy.location('pathname').should('equal', '/cart')
        cy.contains('.shopping-cart-header', 'Tu carro de compra')
        cy.get('.shopping-cart-empty-continue-link').click()
        cy.location('pathname').should('equal', '/menu')
    })
})