/// <reference types="cypress" />
describe('Empty test', () => {
    it('test one', () => {
        cy.visit('https://staging-kfc-ec.getduna.com/')
        //mocha
        cy.contains('PROMOCIONES') 
        cy.contains('MEN')
        cy.get('div#spree-header')
        // cy.get('div#root').shoud('exist')
        cy.get('div#noroot').should('not.exist')
        cy.get('div[id=spree-header]')
        //never use data-* because it is no recognized by the engine 
        cy.contains('Shop Now').click()
    })
})

