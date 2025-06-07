describe('Navigation vers la section Nos services', () => {
  const anchor = '#nos-services'; // Définition de l’ancre de la section ciblée

  it('Sur la page principale, le clic sur le lien fait défiler la page vers la section sans rechargement', () => {
    // Visiter la page principale
    cy.visit('http://localhost:3000/');

    // Vérifier qu’on est bien sur la page principale sans l’ancre dans l’URL
    cy.url().should('not.include', anchor);

    // Cliquer sur le lien du menu qui pointe vers la section #nos-services
    cy.get(`a[href="${anchor}"]`).click();

    // Vérifier que l’URL contient maintenant l’ancre (#nos-services)
    cy.url().should('include', anchor);

    // Vérifier que la section #nos-services est visible à l’écran
    cy.get(anchor).should('be.visible');
  });

  it('Depuis une autre page, le clic sur le lien redirige vers la page principale et affiche la section', () => {
    // Intercepter toutes les requêtes GET vers /api/events/* et leur donner l’alias 'getEvent'.
    // Cela permet de surveiller ces requêtes API pendant le test.
    cy.intercept('GET', '/api/events/*').as('getEvent');

    // Visiter une page différente (exemple : une page événement spécifique)
    cy.visit('http://localhost:3000/event/68444accdd79310044a3b5d6');

    // Attendre que la requête API identifiée par l’alias 'getEvent' soit terminée
    // avant de poursuivre le test. Cela garantit que les données de la page sont chargées
    // correctement avant d’interagir avec la page.
    cy.wait('@getEvent');

    // Vérifier que l’URL actuelle ne contient pas encore l’ancre #nos-services
    cy.url().should('not.include', anchor);

    // Cliquer sur le lien du menu qui mène à la section #nos-services
    cy.get(`a[href="${anchor}"]`).click();

    // Vérifier que l’URL est maintenant la page principale avec l’ancre
    cy.url().should('eq', `http://localhost:3000/${anchor}`);

    // Vérifier que la section ciblée est bien visible après redirection
    cy.get(anchor).should('be.visible');
  });
});
