import { ICartPage } from '.';

export const CartPage = (): ICartPage => {
    return {
        pageShouldBeOpened: () => {
            cy.pageUrlMatchSameAs(/\/personal\/cart\//)
                .pageHeaderShouldBeSameAs('Корзина');
        }
    }
}