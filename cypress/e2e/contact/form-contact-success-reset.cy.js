describe('Formulaire de contact', () => {
  //++ VISITE DE LA PAGE CONTACT/SCROLL JUSQU\'AU FORMULAIRE ++++++++++++
  beforeEach(() => {
    console.log('==> Visite de la page #contact');
    cy.visit('http://localhost:3000/#contact');

    // Scroll vers le formulaire
    cy.get('#contact').scrollIntoView();
    cy.wait(1000); // Laisse le temps au DOM de charger
  });

  it('doit permettre de soumettre le formulaire, afficher un message de succès et réinitialiser les champs', () => {
  

    //+++ REMPLISSAGE DU FORMULAIRE +++
     cy.get('input[data-testid="field-testid"]').eq(0).type('Dupont');
    cy.get('input[data-testid="field-testid"]').eq(1).type('Jean');
    cy.get('[data-testid="select-testid"]').select('Personnel');
    cy.get('input[data-testid="field-testid"]').type('jean.dupont@mail.com');
    cy.get('input[data-testid="field-testid"]').type('Ceci est un message de test.');

    //+++ SOUMISSION +++
    cy.get('button[type=submit]').as('submitButton').click();

    //+++ VÉRIFICATION QUE LA SOUMISSION EST EN COURS +++
    cy.get('@submitButton').should('contain.text', 'En cours');

    //+++ PUIS VÉRIFICATION DU SUCCÈS +++
    cy.get('@submitButton', { timeout: 8000 }).should('contain.text', 'Envoyer'); // ou texte par défaut

    //+++ VÉRIFICATION DU MESSAGE DE CONFIRMATION +++
    cy.contains('message a été envoyé', { timeout: 5000 }).should('be.visible');

    //+++ VÉRIFICATION DE LA RÉINITIALISATION DES CHAMPS +++
    cy.get('[data-cy=input-nom]').should('have.value', '');
    cy.get('[data-cy=input-prenom]').should('have.value', '');
    cy.get('[data-cy=select-contactType]').should('have.value', ''); // adapter si valeur par défaut
    cy.get('[data-cy=input-email]').should('have.value', '');
    cy.get('[data-cy=textarea-message]').should('have.value', '');
  });
});
