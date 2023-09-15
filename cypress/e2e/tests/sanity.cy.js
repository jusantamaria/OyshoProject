import { BasePage } from '../../support/pages/base.Page';
import { LoginPage } from '../../support/pages/login.Page';
import the from '../../fixtures/data.json';
import { removeLogs } from '../../support/helper/removeLogs';
removeLogs();


const base = Cypress.env('baseUrl');

describe('Verificar que la navegación del sitio web funcione correctamente', () => {
    beforeEach('Navegar al sitio web en prueba', () => {
        cy.goToPage();
        cy.url().should('eq', the.endpoint.principal);
        BasePage.aceptarCookies();
        BasePage.get.oyshoIcon().should('contain.text','Oysho');
        BasePage.cancelLocation();
    });
    it('Verificar iniciar sesión correctamente',()=>{
        cy.loginOysho();
        BasePage.get.checkedLoginIcon().should('have.class','oy-icon oy-icon--general oysho-icon-user-check').and('be.visible');
        cy.url().should('eq', the.endpoint.principal);
    });
    it('Verificar intentar iniciar sesión con data incorrecta', ()=>{
        LoginPage.iniciarSesion();
        LoginPage.get.loginPage().should('contain.text','Iniciar sesión');
        LoginPage.get.submitBtn().should('be.disabled');
        LoginPage.enterEmail(the.data.valida.email);
        LoginPage.enterPassword(the.data.invalida.contraseñaIncorrecta);
        LoginPage.get.submitBtn().click({force:true});
        LoginPage.get.loginError().should('contain.text','La combinación de usuario y contraseña no es correcta.');
    });
    it('verificar la usabilidad del buscador', ()=>{
        BasePage.get.buscador().click();
        BasePage.utilizarBuscador(the.producto.pantalon);
        BasePage.get.pantalonPLP().should('contain.text','pantalon');
    });
    it('Verificar la correcta usabilidad de los filtros', ()=>{
        cy.scrollTo(0,1000, {ensureScrollable: false});
        cy.contains('DEPORTE').click({force:true});
        BasePage.filtrar();
        cy.contains('Aceptar').click();
        BasePage.get.filtrosQty().should('contain','1');
        cy.get('[data-testid="bullets"]').first().trigger('mouseover');
        cy.get('[data-testid="tooltip-colors-text"]').first().should('have.text','AMARILLO');
    });
    it('Verificar agregar un producto al carrito de compras correctamente', ()=>{
        cy.scrollTo(0,1000, {ensureScrollable: false});
        cy.contains('DEPORTE').click({force:true});
        cy.get('img').eq(4).click({force:true});
        cy.get(':nth-child(2) > [data-testid="buttonName"]').click();
        cy.get('[data-testid="addToCartButton"]').click();
        cy.get('.shopcart-header__content > [data-testid="items-badge"] > [data-testid="badge"]').should('contain','1');
    }); 
})