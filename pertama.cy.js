/// <reference types="cypress" />

describe('my first test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
        
    });

});
