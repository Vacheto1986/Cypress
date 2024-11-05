/// <reference types="Cypress" />

describe('TC_001_SmokeTest', () => {
    it('should open home page', () => {
        cy.visit('https://demoblaze.com/index.html')
        cy.get('#nava').should('be.visible')
        cy.get('#navbarExample').should('be.visible')
    });
});