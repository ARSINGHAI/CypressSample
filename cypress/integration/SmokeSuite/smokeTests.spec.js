
import {URL,loginUrl} from '../../../config'
import  basePage  from '../../page-Objects/basePage'
import loginPage from '../../page-objects/pages/loginPage'

describe('Suite of smoke tests for the application' , () =>{
    before(function(){
        basePage.loadPage(loginUrl)
    })
    it('SmokeTest_tc01_IncorrectLogin' ,()=>{
        loginPage.loginTest('Test','test')
        cy.checkText('//*[@class="alert alert-error"]','\n Login and/or password are wrong.\n')
    })
    it('SmokeTest_tc02_CorrectLogin' ,()=>{
        loginPage.loginTest('username','password')
    })
}) 