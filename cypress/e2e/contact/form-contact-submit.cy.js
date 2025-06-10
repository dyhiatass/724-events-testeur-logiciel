describe('Formulaire de contact', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#contact');
    cy.get('#contact').scrollIntoView();
    cy.wait(1000);
  });

  it('soumet le formulaire et réinitialise les champs', () => {
    cy.intercept('POST', 'http://localhost:8080/api/contact').as('submitContact');

    cy.get('input[data-testid="field-testid"]').eq(0).type('Dupont');
    cy.get('input[data-testid="field-testid"]').eq(1).type('Jean');
    
    cy.get('[data-testid="select-testid"]').eq(1).within(() => {
      cy.get('[data-testid="collapse-button-testid"]').click();
    });

    cy.contains('li', 'Personnel').click();
    cy.get('input[data-testid="field-testid"]').eq(2).type('jean.dupont@mail.com');
    cy.get('textarea[data-testid="field-testid"]').type('Ceci est un message de test.');

    cy.get('[data-testid="button-test-id"]').eq(1).click();

    cy.wait('@submitContact').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
    expect(interception.response.body).to.have.property('message', 'Merci de nous avoir contacté !');
    });
    cy.contains('Votre inscription a bien été prise en compte', { timeout: 5000 }).should('be.visible');
  });
});
