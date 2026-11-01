class LoginPage {
  shouldShowSignupSection() { cy.contains('.signup-form h2', 'New User Signup!').should('be.visible'); }
  shouldShowLoginSection() { cy.contains('.login-form h2', 'Login to your account').should('be.visible'); }

  startSignup(name, email) {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  login(email, password) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password, { log: false });
    cy.get('[data-qa="login-button"]').click();
  }

  shouldShowLoginError() {
    cy.get('.login-form p').should('have.text', 'Your email or password is incorrect!');
  }
  shouldShowExistingEmailError() {
    cy.get('.signup-form p').should('have.text', 'Email Address already exist!');
  }
}
export default new LoginPage();
