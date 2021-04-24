import { ICatalogCategoryPage } from '.';
export const CatalogCategoryPage = (): ICatalogCategoryPage => {
    return {
        open: (category) => {
            cy.open(`/catalog/${category.path}`, () => {
                cy.pageUrlMatchSameAs(new RegExp(`catalog\/${category.path}`));        
            })
        }
    }
}