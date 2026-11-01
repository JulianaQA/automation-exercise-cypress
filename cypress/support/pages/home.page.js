class HomePage {
  visit() { cy.visit('/'); }

  shouldBeVisible() {
    cy.get('#slider').should('be.visible');
    cy.title().should('contain', 'Automation Exercise');
  }

  subscribe(email) {
    cy.get('footer').scrollIntoView();
    cy.contains('.single-widget h2', 'Subscription').should('be.visible');
    cy.get('#susbscribe_email').type(email); // (sic) id com erro de digitação no site
    cy.get('#subscribe').click();
  }

  shouldShowSubscriptionSuccess() {
    cy.get('#success-subscribe')
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!');
  }
}
export default new HomePage();
