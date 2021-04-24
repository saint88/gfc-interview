import { IComponentBase } from './../../types/IComponentBase';

export interface ICartListBlock extends IComponentBase<ICartListBlock> {
    productQuantityShouldBeSameAs: (quantity: number) => void;
    productTitleShouldBeSameAs: (title: string) => void;
    productsTileQuantityShouldBeSameAs: (quantity: number) => void;
    productTotalPriceShouldBeSameAs: (total: number) => void;
    
}