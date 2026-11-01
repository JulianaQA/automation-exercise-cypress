import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import ProductsPage from '../support/pages/products.page';

describe('Test Case 9: Search Product', () => {
  it('deve pesquisar um produto e exibir os resultados', () => {
    HomePage.visit();
    HomePage.shouldBeVisible();
    Header.goToProducts();
    ProductsPage.shouldShowAllProducts();

    ProductsPage.search('Dress');
    ProductsPage.shouldShowSearchResults();
  });
});
