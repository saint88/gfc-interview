import { CartListBlock } from './../../components/cart-list-blocks/CartListBlocks';
import { CartPage } from './../../pages/cart-page/CartPage';
import { HeaderCart } from './../../components/header-panel/cart/HeaderCart';
import { ProductTile } from './../../components/product-tile/ProductTile';
import { CatalogCategoryPage } from '../../pages/catalog/category-page/CatalogCategoryPage';
describe('Cart testsuite', () => {
    it('Add product in cart from product category page', () => {
        //TODO Регион не ставим пока разработка не даст апи или куку для выставления региона или не повесит data-cy на компонент изменения региона
        cy.viewport(1300, 1100);
        cy.getFixtureData('product-category/categories', $data => {
            const catalogCategoryPage = CatalogCategoryPage();
            catalogCategoryPage.open($data['sea-products']);

            const productTile = ProductTile().init();
            productTile.changeProductQuantityFieldShouldNotBeVisible();

            const headerCart = HeaderCart().init();
            headerCart.quantityInCartIconShouldNotBeVisible();

            productTile.clickAddToCartButton();
            productTile.addToCartButtonShouldNotBeVisible();
            productTile.changeProductQuantityFieldShouldBeVisible();

            headerCart.quantityInCartIconShouldBeVisible();
            headerCart.clickHeaderCart();

            const cartPage = CartPage();
            cartPage.pageShouldBeOpened();

            const cartListBlock = CartListBlock().init();

            cy.get('@productTitle').then($title => {
                cartListBlock.productTitleShouldBeSameAs(('' + $title).replace(/\s+/, ' '));
            });

            cy.get('@productQuantity').then($productQuantity => {
                const quant = Number(('' + $productQuantity).replace(/\s*(шт|уп|кг).*?$/, ''));
                cartListBlock.productQuantityShouldBeSameAs(quant);
                cy.get('@productPrice').then($priceStr => {
                    const price = ('' + $priceStr).replace(/\s+₽.*?$/, '');
                    cartListBlock.productTotalPriceShouldBeSameAs(quant * Number(price));
                });
            });

            cartListBlock.productsTileQuantityShouldBeSameAs(1);
        })
    })
})