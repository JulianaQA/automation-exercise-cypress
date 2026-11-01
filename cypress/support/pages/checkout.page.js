class CheckoutPage {
  shouldShowAddressAndReview(user) {
    cy.get('#address_delivery').should('contain.text', user.address).and('contain.text', user.city);
    cy.get('#address_invoice').should('contain.text', user.address).and('contain.text', user.city);
    cy.get('#cart_info tbody tr[id^="product-"]').should('have.length.greaterThan', 0);
  }

  addComment(text) { cy.get('textarea[name="message"]').type(text); }
  placeOrder() { cy.contains('a.check_out', 'Place Order').click(); }
}
export default new CheckoutPage();
