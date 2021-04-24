import { IComponentBase } from './../../types/IComponentBase';

export interface IProductTile extends IComponentBase<IProductTile> {
    clickAddToCartButton: () => void;
    changeProductQuantityFieldShouldBeVisible: () => void;
    changeProductQuantityFieldShouldNotBeVisible: () => void;
    addToCartButtonShouldNotBeVisible: () => void;
}