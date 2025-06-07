describe('Test d\'inscription via slider', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('doit permettre de cliquer sur la slide affichée et soumettre le formulaire', () => {
    // Intercepter ça garantit que la requête pour charger l’événement est terminée, donc la page devrait être complètement prête avant de continuer.
    cy.intercept('GET', '/api/events/*').as('getEventDetails');

    // On attend que la slide s'affiche
    cy.get('.SlideCard--display').should('exist');

    // Cliquer sur la slide affichée
    cy.get('.SlideCard--display').click();

    // Attendre que la requête API soit finie
    cy.wait('@getEventDetails');

    // Attendre que le formulaire soit visible
    cy.get('form').should('be.visible');

    // Remplir le formulaire
    cy.get('input[data-testid="field-testid"]').eq(0).type('Dupont');
    cy.get('input[data-testid="field-testid"]').eq(1).type('Jean');
    cy.get('#date').clear().type('2025-06-12');
    cy.get('input[data-testid="field-testid"]').eq(2).type('jean.dupont@example.com'); // email

    // Soumettre
    cy.intercept('POST', '/api/inscription').as('submitForm');

    cy.get('[data-testid="button-test-id"]').eq(1).click();

    cy.get('[data-testid="button-test-id"]').eq(1).should('have.value', 'En cours');

    cy.wait('@submitForm');

    cy.get('[data-testid="button-test-id"]').eq(1).should('have.value', 'Envoyer');
    cy.contains(' l’inscription est faite', { timeout: 5000 }).should('be.visible');
  });
});
