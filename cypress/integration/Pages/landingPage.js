class LandingPage{

    getSignin(){return 'Sign in'}

    clickSigninButton(){
        cy.contains(this.getSignin()).click()
    }

}

export default LandingPage