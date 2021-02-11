import { getPageTitle } from "../../support/app.po";

describe('personal-website', () => {
  beforeEach(() => cy.visit('#/abc123'));

  it('should display a 404 page', () => {
    cy.url().should('include', '/not-found');
    getPageTitle().should('contain', 'Page Not Found');
  });

  it('should have a link to take you home', () => {
    const button = cy.get('.home-button');
    button.click();
    cy.url().should('include', '/home');
  });
});
