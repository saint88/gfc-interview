import { ICartListBlock } from '.';

export const CartListBlock = (): ICartListBlock => {
    return {
        init: () => {
            cy.get('.cart_list_block')
                .as('cartListBlock')
                .should('be.visible');

            return CartListBlock();
        },

        productsTileQuantityShouldBeSameAs: (quantity) => {
            cy.get('@cartListBlock')
                .should('have.length', quantity);
        },

        productTitleShouldBeSameAs: (title) => {
            cy.get('@cartListBlock')
                .find('.product_name')
                //TODO Тут баг, так как на некоторых товарах в корзине лишние пробелы между словами. 
                //TODO Лучше добавить артикулы  на товары, чтобы не привязываться к названию продукта в корзине
                //TODO Или дождаться таск в сайпресе на добавления пропса в опции contains https://github.com/cypress-io/cypress/issues/6405
                .contains(title)
                .parents('.cart_item')
                .as('productCartTile')
                .should('be.visible');
        
        },

        productTotalPriceShouldBeSameAs: (total) => {
            cy.get('@productCartTile')
                .find('[id*="summ_value"]')
                .contains('' + total);
        },

        productQuantityShouldBeSameAs: (quantity) => {
            cy.get('@productCartTile')
                .find('input[name="quantity"]')
                .should('contain.value', quantity);
        }
    }
}