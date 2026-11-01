import { buildUser } from '../support/data/factory';
import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import LoginPage from '../support/pages/login.page';

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('deve exibir erro ao usar credenciais inválidas', () => {
    const invalid = buildUser();

    HomePage.visit();
    HomePage.shouldBeVisible();
    Header.goToLogin();
    LoginPage.shouldShowLoginSection();
    LoginPage.login(invalid.email, invalid.password);
    LoginPage.shouldShowLoginError();
  });
});
