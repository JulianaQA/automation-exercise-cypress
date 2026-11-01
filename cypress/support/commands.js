import LoginPage from './pages/login.page';

const parseBody = (body) => (typeof body === 'string' ? JSON.parse(body) : body);

// Pré-condição via API (rápida e estável): cria usuário.
Cypress.Commands.add('apiCreateUser', (user) => {
  cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: {
      name: user.name,
      email: user.email,
      password: user.password,
      title: user.title,
      birth_date: user.birthDay,
      birth_month: user.birthMonth,
      birth_year: user.birthYear,
      firstname: user.firstName,
      lastname: user.lastName,
      company: user.company,
      address1: user.address,
      address2: user.address2,
      country: user.country,
      zipcode: user.zipcode,
      state: user.state,
      city: user.city,
      mobile_number: user.mobile,
    },
  }).then((res) => {
    expect(parseBody(res.body).responseCode, 'usuário criado via API').to.eq(201);
  });
});

// Limpeza via API (não falha o teste se o usuário já foi removido pela UI).
Cypress.Commands.add('apiDeleteUser', (user) => {
  cy.request({
    method: 'DELETE',
    url: '/api/deleteAccount',
    form: true,
    body: { email: user.email, password: user.password },
    failOnStatusCode: false,
  });
});

// Login pela interface.
Cypress.Commands.add('uiLogin', (user) => {
  cy.visit('/login');
  LoginPage.login(user.email, user.password);
});
