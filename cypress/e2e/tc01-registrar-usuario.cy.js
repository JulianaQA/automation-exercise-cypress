import { buildUser } from '../support/data/factory';
import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import LoginPage from '../support/pages/login.page';
import SignupPage from '../support/pages/signup.page';

describe('Test Case 1: Register User', () => {
  it('deve registrar um novo usuário e excluir a conta', () => {
    const user = buildUser();

    HomePage.visit();
    HomePage.shouldBeVisible();
    Header.goToLogin();
    LoginPage.shouldShowSignupSection();
    LoginPage.startSignup(user.name, user.email);

    SignupPage.shouldShowAccountInformation();
    SignupPage.fillAccountForm(user);
    SignupPage.shouldShowAccountCreated();
    SignupPage.continue();

    Header.shouldBeLoggedInAs(user.name);
    Header.deleteAccount();
    SignupPage.shouldShowAccountDeleted();
    SignupPage.continue();
  });
});
