describe('ui-kit', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary'));

  it('should render the component', () => {
    cy.get('nim-button').should('exist');
  });
});
