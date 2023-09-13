describe('Verificar que la navegación del sitio websea correcta', () => {
    beforeEach('Navegar al sitio web en prueba', () => {
        cy.visit('https://www.oysho.com/')
        cy.url().should('contain','oysho')
    })
    it('',()=>{
        
    })
})