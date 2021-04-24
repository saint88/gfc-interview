/// <reference types="cypress" />

Cypress.Commands.add('open', (path, checkFn, options) => {
    if(options) {
        cy.visit(path, options);
    } else {
        cy.visit(path);
    }

    checkFn();
});

Cypress.Commands.add('pageUrlMatchSameAs', (regexp) => {
    return cy.url().should("match", regexp);
});

Cypress.Commands.add('getFixtureData', (path, fn) => cy.fixture(path).then($data => fn($data)));

Cypress.Commands.add('pageHeaderShouldBeSameAs', (header) => {
    return cy.get('h1')
        .should('have.text', header);
})