import 'cypress-mochawesome-reporter/register';
import './commands';

// O site possui scripts de terceiros (anúncios) que lançam exceções fora do nosso controle.
Cypress.on('uncaught:exception', () => false);

beforeEach(() => {
  // Bloqueia anúncios que sobrepõem elementos e causam instabilidade.
  cy.intercept(
    { url: /googlesyndication|doubleclick|googleadservices|adservice\.google|pagead/ },
    { statusCode: 204, body: '' }
  );
});
