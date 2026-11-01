class PaymentPage {
  fillAndPay(card) {
    cy.get('[data-qa="name-on-card"]').type(card.name);
    cy.get('[data-qa="card-number"]').type(card.number);
    cy.get('[data-qa="cvc"]').type(card.cvc);
    cy.get('[data-qa="expiry-month"]').type(card.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(card.expiryYear);
    cy.get('[data-qa="pay-button"]').click();
  }

  shouldShowOrderConfirmed() {
    cy.get('[data-qa="order-placed"]').should('contain.text', 'Order Placed!');
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
  }
}
export default new PaymentPage();
