export default class MainPage {

    //LINKS
    dropdownUserProfile = () => cy.get('.ant-dropdown-trigger');
    linkLogout = () => cy.get('[data-qa="logout"]');

    //BUTTONS
    //

//METHODS

    open(path){
        cy.visit(path);
    }

    logOut(){
        this.dropdownUserProfile().click();
        this.linkLogout().click();
    };

};