import { getSidenav, getToolbar, getToolbarButton, getToolbarIcon } from "../../support/navigation/navigation.po";

describe('personal-website', () => {
  beforeEach(() => cy.visit('/home'));

  context('web browser', () => {
    beforeEach(() => {
      cy.viewport('macbook-11');
    });

    it('should display the sidenav menu', () => {
      getSidenav().should('have.class', 'mat-drawer-opened');
      getToolbar().should('not.exist');
    });

    it('the active route icon should be indicated', () => {
      const activeLink = cy.get('portfolio-navigation-link .active')
      activeLink.should('have.attr', 'href').and('include', '/home');
    });
  })

  context('mobile browser', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('should display a toolbar in mobile view', () => {
      getToolbar().should('exist');
      getSidenav().should('have.class', 'mat-drawer-over').and('not.have.class', 'mad-drawer-opened');
    });

    it('the toolbar should open and close the sidenav', () => {
      getSidenav().should('have.css', 'visibility', 'hidden');
      getToolbarIcon().should('have.text', 'menu');

      getToolbarButton().click();
      getToolbarIcon().should('have.text', 'close');
      getSidenav().should('be.visible');
      getSidenav().should('have.class', 'mat-drawer-opened');

      getToolbarButton().click();
      getToolbarIcon().should('have.text', 'menu');
      getSidenav().should('have.css', 'visibility', 'hidden');
      getSidenav().should('not.have.class', 'mat-drawer-opened');
    });
  });
});