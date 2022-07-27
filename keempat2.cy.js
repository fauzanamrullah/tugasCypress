/// <reference types="cypress" />

describe('tugas eduwork', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.url().should('include', 'login.html')
    });
    it('try to login', () => {
        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.url().should('include', 'account-summary.html')
        })
    });
    it('try pay the bill', () => {
        cy.get('#pay_bills_tab').click()

        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.url().should('include', 'account-summary.html')
        })

        cy.get('#pay_bills_tab').click()

        cy.paybills()
        
    });
})