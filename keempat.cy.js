/// <reference types="cypress" />

describe('Tugas Eduwork', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.url().should('include', 'login.html')
    });
    it('should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.url().should('include', 'account-summary.html')
        })
    });
    it('click Pay Bills tab', () => {
        cy.get('#pay_bills_tab').click()
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.url().should('include', 'account-summary.html')

            cy.get('#pay_bills_tab').click()
            cy.url().should('include', 'pay-bills.html')
        })
    });
    it('do the payment', () => {
    cy.get('#sp_payee').select('Apple')
    cy.get('#sp_account').select('Credit Card')
    cy.get('#sp_amount').type('200')
    cy.get('#sp_date').type('2022-07-30').type('{enter}')
    cy.get('#sp_description').type('bayar hutang')
    cy.get('#pay_saved_payees').click()
    
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password
        cy.login(username, password)
        cy.url().should('include', 'account-summary.html')

        cy.get('#pay_bills_tab').click()
        cy.url().should('include', 'pay-bills.html')

        cy.get('#sp_payee').select('Apple')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('200')
        cy.get('#sp_date').type('2022-07-30').type('{enter}')
        cy.get('#sp_description').type('bayar hutang')
        cy.get('#pay_saved_payees').click()
        cy.get('#alert_content').should('contain.text', 'The payment was successfully submitted.')
    })
    });
})