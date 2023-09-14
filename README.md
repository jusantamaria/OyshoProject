# PruebaTecnicaIZ
Este es un repositorio utilizado para una prueba técnica de una consultora.

En ésta Historia de Usuario se probará el sitio Web de Oysho.com. Un eCommerce de ropa deportiva para mujeres. Se evaluarán diferentes componentes de la página y su usabilidad utilizando Cypress como herramienta de automatización de pruebas.
Ésta será una prueba técnica, por lo tanto, tendrá solo pruebas unitarias de algunos de sus componentes.
Se procede a instalar Cypress y comenzar el proyecto. 

En el siguiente se llevarán a cabo diferentes smoke tests para verificar la usabilidad del sitio web en prueba.

- Visitar la página y verificar el título:
- Verificar Iniciar sesion correctamente con credenciales válidas.
- Verificar intentar Iniciar sesion con credenciales inválidas.
- Verificar que el título de la página sea correcto.
- Verificar que la navegación funcione correctamente.
- Verificar agragar un producto al carrito de compras correctamente.
- Verificar la correcta usabilidad del filtro de productos.

  
Se utiliza Page Object Model con el archivo llamadao Base.Page.js dentro de la carpeta Support y también se utilizan Fixtures para diferente data. 

Se ha creado un archivo de pruebas llamado Smoke.cy.js ubicado en el directorio cypress/e2e/tests/smoke.cy.js