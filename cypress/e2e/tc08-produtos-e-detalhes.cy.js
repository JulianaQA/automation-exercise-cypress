import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import ProductsPage from '../support/pages/products.page';

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('deve listar produtos e exibir os detalhes do primeiro produto', () => {
    HomePage.visit();
    HomePage.shouldBeVisible();
    Header.goToProducts();
    cy.location('pathname').should('eq', '/products');

    ProductsPage.shouldShowAllProducts();
    ProductsPage.openFirstProductDetails();
    cy.location('pathname').should('match', /^\/product_details\/\d+/);
    ProductsPage.shouldShowProductDetails();
  });
});
