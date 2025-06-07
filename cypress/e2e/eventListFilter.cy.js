describe("EventList Filtering", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should filter events by selected category", () => {
    // 1. Ouvre le dropdown Select (adapter le sélecteur en fonction de ton composant)
    cy.get('.SelectTitle').click(); // ou un autre sélecteur visible qui déclenche le menu
    cy.get('[data-testid="collapse-button-testid"]').first().click();

    // 2. Clique sur l’option "conférence"
    cy.contains('li', 'conférence').click(); // ou adapter à la structure des options

    // 3. Vérifie que chaque event affiché a bien la catégorie "conférence"
    cy.get('[data-testid="event-card"]').each(($card) => {
      cy.wrap($card).find('[data-testid="event-type"]').should('contain.text', 'conférence');
    });
  });
});
