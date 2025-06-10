describe('Test d\'inscription via slider', () => {
  beforeEach(() => {
    // On charge la page principale avant chaque test
    cy.visit('http://localhost:3000/');
  });

  it('Permet de cliquer sur la slide affichée, de soumettre le formulaire et d’afficher le message de succès', () => {
    // On intercepte la requête qui charge les détails de l’événement
    cy.intercept('GET', '/api/events/*').as('getEventDetails');

    // On attend que la slide visible soit présente dans le DOM
    cy.get('.SlideCard--display').should('exist');

    // On clique sur la slide affichée pour afficher les détails et le formulaire
    cy.get('.SlideCard--display').click();

    // On attend que la requête pour les détails de l’événement soit terminée
    cy.wait('@getEventDetails');

    // On vérifie que le formulaire est visible avant de continuer
    cy.get('form').should('be.visible');

    // On remplit les champs du formulaire
    cy.get('input[data-testid="field-testid"]').eq(0).type('Dupont'); // Nom
    cy.get('input[data-testid="field-testid"]').eq(1).type('Jean');   // Prénom

    // On remplit la date avec un format valide
    cy.get('#date').clear().type('2025-06-12');

    // On saisit l’email
    cy.get('input[data-testid="field-testid"]').eq(2).type('jean.dupont@example.com');

    // On intercepte la requête POST d’inscription pour pouvoir l’attendre
    cy.intercept('POST', '/api/inscription').as('submitForm');

    // On clique sur le bouton pour soumettre le formulaire (index 1)
    cy.get('[data-testid="button-test-id"]').eq(1).click();

    // On attend la réponse du serveur à la soumission
    cy.wait('@submitForm');

    // On vérifie que le bouton revient à son état initial "Envoyer"
    cy.get('[data-testid="button-test-id"]').eq(1).should('have.value', 'Envoyer');

    // On vérifie qu’un message de confirmation est affiché
    cy.contains('Votre inscription a bien été prise en compte', { timeout: 5000 }).should('be.visible');
  });
});
