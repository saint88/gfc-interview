import { IComponentBase } from './../../../types/IComponentBase';

export interface IHeaderCart extends IComponentBase<IHeaderCart> {
    quantityInCartIconShouldNotBeVisible: () => void;
    quantityInCartIconShouldBeVisible: () => void;
    clickHeaderCart: () => void;
}