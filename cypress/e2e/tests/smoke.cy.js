import { BasePage } from '../../support/pages/base.Page';
import the from '../../fixtures/data.json';

describe('Verificar que la navegación del sitio web funcione correctamente', () => {
    beforeEach('Navegar al sitio web en prueba', () => {
        cy.visit('https://www.oysho.com/', {failOnStatusCode: false});
        cy.url().should('eq', the.endpoint.principal);
        BasePage.aceptarCookies();
        BasePage.get.oyshoIcon().should('contain.text','Oysho');
    });

    it('Verificar agregar un producto al carrito de compras correctamente', ()=>{
        cy.contains('DEPORTE').click();
        
    });
    it('Verificar iniciar sesión correctamente', ()=>{
        BasePage.iniciarSesion();
        BasePage.get.loginPage().should('contain.text','Iniciar sesión');
        BasePage.get.submitBtn().should('be.disabled');
        BasePage.enterEmail(the.data.valida.email);
        BasePage.enterPassword(the.data.valida.contraseña);
        BasePage.get.submitBtn().click();
        BasePage.get.loginIcon().should('have.class','oy-icon oy-icon--general oysho-icon-user-check');
        cy.clearCookies();
    });
    it('Verificar intentar iniciar sesión con data incorrecta', ()=>{
        BasePage.iniciarSesion();
        BasePage.get.loginPage().should('contain.text','Iniciar sesión');
        BasePage.get.submitBtn().should('be.disabled');
        BasePage.enterEmail(the.data.valida.email);
        BasePage.enterPassword(the.data.invalida.contraseñaIncorrecta);
        BasePage.get.submitBtn().click();
        cy.contains(the.errorMsg.error).should('be.visible');
    });
    it('verificar la usabilidad del buscador', ()=>{
        BasePage.utilizarBuscador();
        BasePage.get.buscadorPLP().should('contain.text','Quizás te interese')
        BasePage.utilizarBuscador(the.producto.pantalon);
        BasePage.get.pantalonPLP().should('contain.text','pantalon')
    });
})