Cypress.Commands.add('goToPage', () =>{
    cy.visit('https://www.oysho.com/', {
        failOnStatusCode: false,
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cache-Control': 'no-cache',
        },
    });
});

Cypress.Commands.add('loginOysho', () =>{
    cy.session('login',()=>{
        cy.visit('https://www.oysho.com/logon/')
        LoginPage.enterEmail(the.data.valida.email);
        LoginPage.enterPassword(the.data.valida.codigo);
        LoginPage.get.submitBtn().click();
    })
});