import LandingPage from "../Pages/landingPage"
import LoginPage from "../Pages/loginPage"
import HomePage from "../Pages/homePage"
import SettingsPage from "../Pages/settingsPage"

describe('POM Test',function(){

    beforeEach(function(){
        cy.fixture('ConduitData').as('data')
    })

    const landingPage = new LandingPage()
    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const settingsPage = new SettingsPage()

    it('Conduit Login using POM',function(){
        cy.visit('/')
        landingPage.clickSigninButton()
        loginPage.enterEmail(this.data.email)
        loginPage.enterPassword(this.data.password)
        loginPage.clickSigninButton()
        homePage.checkYourFeedIsVisible()
        homePage.clickSettingsButton()
        settingsPage.clickLogoutButton()
    })
})