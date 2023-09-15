class basePage {
    get = {
        endpoint: ()=> cy.url('https://www.oysho.com/'),
        oyshoIcon: ()=> cy.get('.oysho-icon__text'),
        loginIcon: ()=> cy.get('[data-testid="icon"].oy-icon.oysho-icon-user.oy-icon--general'),
        checkedLoginIcon: ()=> cy.get('[data-testid="icon"].oy-icon oy-icon--general oysho-icon-user-check'),
        acceptCookiesBtn: () => cy.get('#onetrust-accept-btn-handler'),
        noLocation: ()=> cy.get ('[data-testid="cancel-store"]'),
        buscador: ()=> cy.get('.header__search--title'),
        buscadorPLP: ()=> cy.get('.x-list x-list--align-start'),
        pantalonPLP: ()=> cy.get('[data-test="result-title]'),
        filtros: ()=> cy.get('[data-testid="filters"]'),
        filtrosQty: ()=> cy.get('[data-testid="badge"]'),
        amarillo: ()=> cy.get('[id="check-colFilter-g-amarillos"]')
    };

    aceptarCookies(){
        this.get.acceptCookiesBtn().click();
    } 

    cancelLocation(){
        this.get.noLocation().click();
    }
    
    tituloIcon() {
        this.get.icon();
    }

    utilizarBuscador(type){
        this.get.buscador().type(type);
    }

    pageListProductPantalon(){
        this.get.pantalonPLP();
    }

    PLPbuscador(){
        this.get.buscadorPLP();
    }

    clickOnFilters(){
        this.get.filtros().click();
        cy.contains('Precio ascendente').click();
        cy.scrollTo(0,750,{ensureScrollable: false});
        this.get.amarillo().click({force:true});
    }

}

export const BasePage = new basePage();