// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getEl(identifier: string): Cypress.Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add('getEl', (identifier: string) => {
  return cy.get(`[data-testid=${identifier}]`);
});
