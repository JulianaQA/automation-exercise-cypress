import { buildUser } from '../support/data/factory';
import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import LoginPage from '../support/pages/login.page';

describe('Test Case 5: Register User with existing email', () => {
  let user;

  beforeEach(() => {
    user = buildUser();
    cy.apiCreateUser(user);
  });

  afterEach(() => cy.apiDeleteUser(user));

  it('deve exibir erro ao registrar com e-mail já cadastrado', () => {
    HomePage.visit();
    HomePage.shouldBeVisible();
    Header.goToLogin();
    LoginPage.shouldShowSignupSection();
    LoginPage.startSignup(user.name, user.email);
    LoginPage.shouldShowExistingEmailError();
  });
});
