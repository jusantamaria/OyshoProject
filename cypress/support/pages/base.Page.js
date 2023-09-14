class basePage {
    get = {
        endpoint: ()=> cy.url('https://www.oysho.com/'),
        oyshoIcon: ()=> cy.get('.oysho-icon__text'),
        loginIcon: ()=> cy.get('[data-testid="icon"]'),
        loginPage: ()=> cy.get('.account-section'),
        emailInput: ()=> cy.get('#email-login'),
        passwordInput:()=> cy.get('#password'),
        submitBtn:()=> cy.get('[data.testid="login-button"]'),
        acceptCookiesBtn: () => cy.get('#onetrust-accept-btn-handler'),
        buscador: ()=> cy.get('.header__search--title'),
        buscadorPLP: ()=> cy.get('.x-list x-list--align-start'),
        pantalonPLP: ()=> cy.get('[data-test="result-title]'),
    };

    aceptarCookies(){
        this.get.acceptCookiesBtn().click();
    } 

    LoginPage(){
        this.get.loginPage()
    }

    enterEmail(type){
        this.get.emailInput().type(type);
    }

    enterPassword(type){
        this.get.passwordInput(type);
    }

    iniciarSesion(){
        this.get.loginIcon().click()
    }

    tituloIcon() {
        this.get.icon();
    }

    utilizarBuscador(type){
        this.get.buscador().type(type)
    }

    pageListProductPantalon(){
        this.get.pantalonPLP();
    }

    PLPbuscador(){
        this.get.buscadorPLP();
    }

}

export const BasePage = new basePage();