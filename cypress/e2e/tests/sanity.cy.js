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
    it('"HAPPY PATH" Verificar iniciar sesión correctamente', ()=>{
        LoginPage.iniciarSesion();
        LoginPage.get.loginPage().should('contain.text','Iniciar sesión');
        LoginPage.get.submitBtn().should('be.disabled');
        LoginPage.enterEmail(the.data.valida.email);
        LoginPage.enterPassword(the.data.valida.codigo);
        // LoginPage.get.submitBtn().click();
        // BasePage.get.checkedLoginIcon().should('be.visible').and('have.class','oy-icon oy-icon--general oysho-icon-user-check');
    });
    it('Verificar intentar iniciar sesión con data incorrecta', ()=>{
        LoginPage.iniciarSesion();
        LoginPage.get.loginPage().should('contain.text','Iniciar sesión');
        LoginPage.get.submitBtn().should('be.disabled');
        LoginPage.enterEmail(the.data.valida.email);
        LoginPage.enterPassword(the.data.invalida.contraseñaIncorrecta);
        LoginPage.get.submitBtn().click();
        cy.contains(the.errorMsg.error).should('be.visible');
    });
    it('verificar la usabilidad del buscador', ()=>{
        BasePage.utilizarBuscador();
        BasePage.get.buscadorPLP().should('contain.text','Quizás te interese')
        BasePage.utilizarBuscador(the.producto.pantalon);
        BasePage.get.pantalonPLP().should('contain.text','pantalon')
    });
    it('Verificar la correcta usabilidad de los filtros', ()=>{
        cy.scrollTo(0,1000, {ensureScrollable: false});
        cy.contains('DEPORTE').click({force:true});
        BasePage.clickOnFilters();
        cy.contains('Aceptar').click();
        BasePage.get.filtrosQty().should('contain','1')
    });
    it('Verificar agregar un producto al carrito de compras correctamente', ()=>{

    }); 
})