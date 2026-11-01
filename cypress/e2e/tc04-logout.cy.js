import { buildUser } from '../support/data/factory';
import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import LoginPage from '../support/pages/login.page';

describe('Test Case 4: Logout User', () => {
  let user;

  beforeEach(() => {
    user = buildUser();
    cy.apiCreateUser(user);
  });

  afterEach(() => cy.apiDeleteUser(user));

  it('deve realizar logout e voltar para a página de login', () => {
    HomePage.visit();
    HomePage.shouldBeVisible();
    Header.goToLogin();
    LoginPage.login(user.email, user.password);
    Header.shouldBeLoggedInAs(user.name);

    Header.logout();
    cy.location('pathname').should('eq', '/login');
    LoginPage.shouldShowLoginSection();
    Header.shouldBeLoggedOut();
  });
});
