class SettingsPage{

    getLogoutButton(){return 'Or click here to logout.'}

    clickLogoutButton(){
        cy.contains(this.getLogoutButton()).click()
    }
}

export default SettingsPage
