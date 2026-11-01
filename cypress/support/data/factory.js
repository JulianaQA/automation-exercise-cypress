import { faker } from '@faker-js/faker';

// Gera massa de dados única a cada execução (evita colisão de e-mail).
export const buildUser = () => ({
  name: faker.person.firstName(),
  email: `qa.${Date.now()}.${faker.string.alphanumeric(6).toLowerCase()}@teste.com`,
  password: faker.internet.password({ length: 10 }),
  title: 'Mr',
  birthDay: '10',
  birthMonth: 'May',
  birthYear: '1990',
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  company: faker.company.name(),
  address: faker.location.streetAddress(),
  address2: faker.location.secondaryAddress(),
  country: 'Canada',
  state: faker.location.state(),
  city: faker.location.city(),
  zipcode: faker.string.numeric(5),
  mobile: faker.string.numeric(10),
});

export const buildCard = () => ({
  name: faker.person.fullName(),
  number: '4111111111111111',
  cvc: '123',
  expiryMonth: '12',
  expiryYear: '2030',
});
