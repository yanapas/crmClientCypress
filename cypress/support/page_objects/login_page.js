import MainPage from "./main_page";

class LoginPage extends MainPage{
    fieldEmail = () => cy.get('#normal_login_email');
    fieldPassword = ()=> cy.get('#normal_login_password');
    buttonLogin = () => cy.get('button[type="submit"]');
    header = () => cy.get('h1');

    open(){
        cy.visit("/user/login");
    }

    isOpen() {
        this.header().should('have.text', 'Welcome back!');
        cy.url().should('include', '/user/login');
    };
    logIn(email, password) {
        this.fieldEmail().type(email, { delay: 100 });
        this.fieldPassword().type(password);
        this.buttonLogin().click();
    };
};

export default LoginPage