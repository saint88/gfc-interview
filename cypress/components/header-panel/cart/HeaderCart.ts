import { IHeaderCart } from ".";

export const HeaderCart = (): IHeaderCart => {
  return {
    init: () => {
        cy.get('header > div:nth-child(2) > div > div:nth-child(3)')
            .as('headerCart')
            .should('be.visible');
      return HeaderCart();
    },

    quantityInCartIconShouldNotBeVisible: () => {
        cy.waitUntil(() => {
            return Cypress.$("header > div:nth-child(2) > div > div:nth-child(3) button > div:nth-child(3)").length === 0;
        }, {
            verbose: true,
            timeout: 2000
        });
    },

    quantityInCartIconShouldBeVisible: () => {
        cy.waitUntil(() => {
            return Cypress.$("header > div:nth-child(2) > div > div:nth-child(3) button > div:nth-child(3)").length === 1;
        }, {
            verbose: true,
            timeout: 2000
        });
    },

    clickHeaderCart: () => {
        cy.get('@headerCart')
            .click();
    }
  };
};
