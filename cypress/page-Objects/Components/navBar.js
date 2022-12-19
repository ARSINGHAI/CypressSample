export class navBar{
    static clickOnLogo(){
        cy.get('.brand').click()
    }
    static searchBox(text){
        cy.get('#searchTerm').type('${text}{enter}')
    }
    static clickSignIn(){
        cy.get('#signin_button').click()
    }
}