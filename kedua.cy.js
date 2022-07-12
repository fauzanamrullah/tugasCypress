/// <reference types="cypress" />

describe('working with inputs', () =>{
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')   
    });
    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username') 
    });
    it('sholud fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('userpassword')
    });
    it('should click on Keep me signed in', () => {
        cy.get('#user_remember_me').click()
        
    });
})