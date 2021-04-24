import { IProductTile } from ".";
export const ProductTile = (): IProductTile => {
  return {
    init: () => {
        cy.get("button").contains("В корзину")
        .parents('[itemtype*="Product"]')
        .as("products")
        .its("length")
        .then(($quantity) => {
          const index = Cypress._.random(--$quantity);
          cy.get("@products").eq(index).as("productTile");
        });

      cy.get("@productTile")
        .find('[itemprop="name"]')
        .invoke("text")
        .as("productTitle");

       cy.get('@productTile')
        .find('[itemprop="price"]')
        .invoke('text')
        .as('productPrice');

      return ProductTile();
    },

    clickAddToCartButton: () => {
        cy.get("@productTile").find("button").contains("В корзину").click();
    },

    addToCartButtonShouldNotBeVisible: () => {
      cy.get("@productTile")
        .find("button")
        .contains("В корзину")
        .should("be.visible");
    },
    changeProductQuantityFieldShouldBeVisible: () => {
      cy.get("@productTile")
        .find('input')
        .should("be.visible")
        .invoke('val')
        .as('productQuantity');

    },

    changeProductQuantityFieldShouldNotBeVisible: () => {
        cy.get("@productTile").find('input').should("not.be.exist");
    },
  };
};
