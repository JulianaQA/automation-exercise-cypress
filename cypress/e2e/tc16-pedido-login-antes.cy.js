import { buildUser, buildCard } from '../support/data/factory';
import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import LoginPage from '../support/pages/login.page';
import SignupPage from '../support/pages/signup.page';
import ProductsPage from '../support/pages/products.page';
import CartPage from '../support/pages/cart.page';
import CheckoutPage from '../support/pages/checkout.page';
import PaymentPage from '../support/pages/payment.page';

describe('Test Case 16: Place Order - Login before Checkout', () => {
  let user;

  beforeEach(() => {
    user = buildUser();
    cy.apiCreateUser(user);
  });

  afterEach(() => cy.apiDeleteUser(user));

  it('deve fazer login, finalizar o pedido e excluir a conta', () => {
    const card = buildCard();

    HomePage.visit();
    HomePage.shouldBeVisible();
    Header.goToLogin();
    LoginPage.login(user.email, user.password);
    Header.shouldBeLoggedInAs(user.name);

    Header.goToProducts();
    ProductsPage.addToCart(1);
    ProductsPage.continueShopping();
    ProductsPage.addToCart(2);
    ProductsPage.viewCartFromModal();
    CartPage.shouldBeOpen();
    CartPage.shouldHaveItems(2);

    CartPage.proceedToCheckout();
    CheckoutPage.shouldShowAddressAndReview(user);
    CheckoutPage.addComment('Pedido gerado por teste automatizado.');
    CheckoutPage.placeOrder();

    PaymentPage.fillAndPay(card);
    PaymentPage.shouldShowOrderConfirmed();

    Header.deleteAccount();
    SignupPage.shouldShowAccountDeleted();
  });
});
