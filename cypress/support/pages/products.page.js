class ProductsPage {
  shouldShowAllProducts() {
    cy.contains('.features_items h2.title', 'All Products').should('be.visible');
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
  }

  openFirstProductDetails() {
    cy.get('.features_items a[href^="/product_details/"]').first().click();
  }

  shouldShowProductDetails() {
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible').and('not.be.empty');
      cy.contains('p', 'Category:').should('be.visible');
      cy.contains('span', 'Rs.').should('be.visible');
      cy.contains('p', 'Availability:').should('be.visible');
      cy.contains('p', 'Condition:').should('be.visible');
      cy.contains('p', 'Brand:').should('be.visible');
    });
  }

  search(term) {
    cy.get('#search_product').type(term);
    cy.get('#submit_search').click();
  }

  shouldShowSearchResults() {
    cy.contains('.features_items h2.title', 'Searched Products').should('be.visible');
    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0)
      .each(($el) => cy.wrap($el).should('be.visible'));
  }

  addToCart(productId) {
    cy.get(`.features_items a.add-to-cart[data-product-id="${productId}"]`)
      .first()
      .click({ force: true }); // botão aparece apenas no hover
    cy.get('#cartModal').should('be.visible');
  }
  continueShopping() { cy.get('#cartModal button.close-modal').click(); }
  viewCartFromModal() { cy.get('#cartModal a[href="/view_cart"]').click(); }
}
export default new ProductsPage();
