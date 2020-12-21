describe('personal-website', () => {
  beforeEach(() => cy.visit('/'));

  it('should visit home', () => {
    cy.url().should('include', '/home');
  });
});
