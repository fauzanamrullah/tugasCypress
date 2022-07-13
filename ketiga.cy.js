/// <reference types="cypress" />

describe('Tugas Eduwork', () => {
    it('open page', () => {
       cy.visit('https://www.saucedemo.com/')
    });
    it('should try to login', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')

        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')

        cy.get('#login-button').click()
        cy.url().should('include', 'inventory.html')
    });
    it('menu button test', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('.bm-item-list').should('be.visible')
        cy.get('#react-burger-cross-btn').click()
    });
    it('cart button test', () => {
        cy.get('#shopping_cart_container').click()

        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')

        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')

        cy.get('#login-button').click()
        cy.url().should('include', 'inventory.html')

        cy.get('#shopping_cart_container').click()
        cy.url().should('include', 'cart.html')

        cy.get('#continue-shopping').click()
        cy.url().should('include', 'inventory.html')
    });
    it('product click test', () => {
        cy.get('#item_4_img_link').click()

        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')

        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')

        cy.get('#login-button').click()
        cy.url().should('include', 'inventory.html')

        cy.get('#item_4_img_link').click()
        cy.url().should('include', 'inventory-item.html?id=4')

        cy.get('#back-to-products').click()
        cy.url().should('include', 'inventory.html')

        cy.get('#item_4_title_link').click()
        cy.url().should('include', 'inventory-item.html?id=4')

        cy.get('#back-to-products').click()
        cy.url().should('include', 'inventory.html')
    });
    
})