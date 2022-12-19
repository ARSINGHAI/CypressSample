export default class loginPage {
    static visitLoginPage(){
        cy.visit('http://zero.webappsecurity.com/login.html')
    }

    static loginTest(user,pass)
    {
            cy.get('#user_login').clear() 
            cy.get('#user_password').clear() 
            cy.get('#user_login').type(user)
            cy.get('#user_password').type(pass)
            cy.get('#user_remember_me').click()
            cy.contains('Sign in').click()  
    }
}