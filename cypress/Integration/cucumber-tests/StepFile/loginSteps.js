import cypress from 'cypress'
import {Given ,When , Then , And} from 'cypress-cucumber-preprocessor/steps'

Given('an anonymous user is on the login page',() =>{
    cy.visit('http://localhost:9000/login')
})

When('the user enters a valid username and password into the login form', ()=>{
    cy.get('#username').type('evita.abishag@last-shipment.com')
    cy.get('#password').type('ypgb62T9pMmPuFHd')
})

And('submits the form' ,()=>{
    cy.get('.btn-primary').click()
})

Then ('the user is authenticated',() =>{
    cy.url().should('include' ,'8f56e2dc-8aab-4d09-bc43-6f846c8f8f65')
})

And('the Company Dashboard, including all related company contracts, is available' ,() =>{
    cy.get('h1').should('have.text','User Dashboard')
    cy.get('h2').should('have.text','Contracts')
    cy.get('.table table-striped contracts').find('tr').should('have.length',23)
})