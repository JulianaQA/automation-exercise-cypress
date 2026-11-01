class CartPage {
  shouldBeOpen() { cy.location('pathname').should('eq', '/view_cart'); }

  shouldHaveItems(qty) {
    cy.get('#cart_info_table tbody tr').should('have.length', qty);
    cy.get('#cart_info_table tbody tr').each(($row) => {
      cy.wrap($row).find('.cart_price').should('contain.text', 'Rs.');
      cy.wrap($row).find('.cart_quantity').should('contain.text', '1');
      cy.wrap($row).find('.cart_total_price').should('contain.text', 'Rs.');
    });
  }

  proceedToCheckout() { cy.contains('.btn.check_out', 'Proceed To Checkout').click(); }
}
export default new CartPage();
