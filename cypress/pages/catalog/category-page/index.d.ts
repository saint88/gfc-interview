import { ProductCategoryType } from '../../../fixtures/product-category';

export interface ICatalogCategoryPage {
    open: (category: ProductCategoryType) => void
}