import { buildUser } from '../support/data/factory';
import HomePage from '../support/pages/home.page';

describe('Test Case 10: Verify Subscription in home page', () => {
  it('deve realizar a inscrição na newsletter pelo rodapé', () => {
    HomePage.visit();
    HomePage.shouldBeVisible();
    HomePage.subscribe(buildUser().email);
    HomePage.shouldShowSubscriptionSuccess();
  });
});
