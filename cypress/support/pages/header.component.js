class Header {
  goToHome() { cy.get('.navbar-nav a[href="/"]').click(); }
  goToLogin() { cy.get('.navbar-nav a[href="/login"]').click(); }
  goToProducts() { cy.get('.navbar-nav a[href="/products"]').click(); }
  goToCart() { cy.get('.navbar-nav a[href="/view_cart"]').click(); }
  logout() { cy.get('.navbar-nav a[href="/logout"]').click(); }
  deleteAccount() { cy.get('.navbar-nav a[href="/delete_account"]').click(); }

  shouldBeLoggedInAs(name) {
    cy.contains('.navbar-nav a', 'Logged in as').should('contain.text', name);
  }
  shouldBeLoggedOut() {
    cy.get('.navbar-nav a[href="/logout"]').should('not.exist');
    cy.get('.navbar-nav a[href="/login"]').should('be.visible');
  }
}
export default new Header();
