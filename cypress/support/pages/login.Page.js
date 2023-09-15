class loginPage{
    get={
        loginPage: ()=> cy.get('.account-section'),
        emailInput: ()=> cy.get('#email-login'),
        passwordInput:()=> cy.get('[data-testid="input-style"]#password'),
        submitBtn:()=> cy.get('[data-testid="login-button"]'),
        loginIcon: ()=> cy.get('[data-testid="icon"].oy-icon.oysho-icon-user.oy-icon--general'),
        checkedLoginIcon: ()=> cy.get('[data-testid="icon"].oy-icon oy-icon--general oysho-icon-user-check'),

    }

    iniciarSesion(){
        this.get.loginIcon().click({ force: true });
    }

    LoginPage(){
        this.get.loginPage()
    }

    enterEmail(type){
        this.get.emailInput().type(type);
    }

    enterPassword(type){
        this.get.passwordInput().type(type);
    }
}

export const LoginPage = new loginPage();