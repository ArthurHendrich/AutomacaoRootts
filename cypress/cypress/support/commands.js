// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from "./locators";

Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    "data-wc",
    "data-cy",
    "data-test",
    "data-testid",
    "id",
    "class",
    "attributes",
    "tag",
    "nth-child",
  ],
});

Cypress.Commands.add("login", (user, password) => {
  cy.get(loc.LOGIN.USERNAME).should("exist");
  cy.get(loc.LOGIN.USERNAME).type(user);

  cy.get(loc.LOGIN.PASSWORD).should("exist");
  cy.get(loc.LOGIN.PASSWORD).type(password, { log: false });

  cy.xpath(loc.LOGIN.XP_BTN_LOGIN).should("exist");
  cy.xpath(loc.LOGIN.XP_BTN_LOGIN).click({ force: true, multiple: true });
});
