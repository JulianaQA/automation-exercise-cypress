import { buildUser } from '../support/data/factory';
import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import LoginPage from '../support/pages/login.page';
import SignupPage from '../support/pages/signup.page';

describe('Test Case 2: Login User with correct email and password', () => {
  let user;

  beforeEach(() => {
    user = buildUser();
    cy.apiCreateUser(user);
  });

  afterEach(() => cy.apiDeleteUser(user)); // garante limpeza mesmo se o teste falhar

  it('deve autenticar com credenciais válidas e excluir a conta', () => {
    HomePage.visit();
    HomePage.shouldBeVisible();
    Header.goToLogin();
    LoginPage.shouldShowLoginSection();
    LoginPage.login(user.email, user.password);

    Header.shouldBeLoggedInAs(user.name);
    Header.deleteAccount();
    SignupPage.shouldShowAccountDeleted();
  });
});
