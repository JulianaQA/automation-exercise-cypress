import { buildUser, buildCard } from '../support/data/factory';
import HomePage from '../support/pages/home.page';
import Header from '../support/pages/header.component';
import LoginPage from '../support/pages/login.page';
import SignupPage from '../support/pages/signup.page';
import ProductsPage from '../support/pages/products.page';
import CartPage from '../support/pages/cart.page';
import CheckoutPage from '../support/pages/checkout.page';
import PaymentPage from '../support/pages/payment.page';

describe('Test Case 15: Place Order - Register before Checkout', () => {
  it('deve registrar o usuário, finalizar o pedido e excluir a conta', () => {
    const user = buildUser();
    const card = buildCard();

    HomePage.visit();
    HomePage.shouldBeVisible();

    // Registro antes de comprar (passos 4 a 7)
    Header.goToLogin();
    LoginPage.shouldShowSignupSection();
    LoginPage.startSignup(user.name, user.email);
    SignupPage.shouldShowAccountInformation();
    SignupPage.fillAccountForm(user);
    SignupPage.shouldShowAccountCreated();
    SignupPage.continue();
    Header.shouldBeLoggedInAs(user.name);

    // Carrinho (passos 8 a 10)
    Header.goToProducts();
    ProductsPage.addToCart(1);
    ProductsPage.continueShopping();
    ProductsPage.addToCart(2);
    ProductsPage.viewCartFromModal();
    CartPage.shouldBeOpen();
    CartPage.shouldHaveItems(2);

    // Checkout e pagamento (passos 11 a 16)
    CartPage.proceedToCheckout();
    CheckoutPage.shouldShowAddressAndReview(user);
    CheckoutPage.addComment('Pedido gerado por teste automatizado.');
    CheckoutPage.placeOrder();
    PaymentPage.fillAndPay(card);
    PaymentPage.shouldShowOrderConfirmed();

    // Limpeza (passos 17 e 18)
    Header.deleteAccount();
    SignupPage.shouldShowAccountDeleted();
    SignupPage.continue();
  });
});
