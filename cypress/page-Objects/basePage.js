export default class basePage {
    static Pause(ms){
        cy.wait(ms)
    }
    static logInfo(message) {
            cy.log(message)
            
    }
    static setMobile() {
        cy.viewport('iphone-x')
        
    }

     static loadPage(url){
        cy.visit(url)
     }



}