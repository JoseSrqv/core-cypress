/// <reference types="cypress" />
describe('First: Home sections', () => {

    beforeEach(() => {
        cy.login('testcypress1@gmail.com', '@Faker121250')
    })

    it('T1: Menu Banners', () => {
        cy.get('.m-0 img').click()
        cy.get('#spree_home_section_banner_11 .btn').click()
        // cy.location('pathname').should('equal', '/menu')
        cy.url().should('include','/promociones')
        cy.contains('.py-md-3.text-uppercase.taxon-title', 'PROMOCIONES')
        // cy.contains('.p-3', 'Elige una categoría').should('have.class', 'text-muted')
        cy.go('back')
    })
    it('T2: Menu Grid', () => {
        cy.get('.m-0 img').click()
        cy.get('#spree_home_section_banner_28 .w-100').click()
        cy.url().should('include','/receta-secreta')
        cy.go('back')
        cy.get('#spree_home_section_banner_29 .w-100').click()
        cy.url().should('include','/menu')
        cy.go('back')
        cy.get('#spree_home_section_banner_30 .w-100').click()
        cy.url().should('include','/promociones')


    })
    it('T3: Menu Carousel', () => {

    })
})