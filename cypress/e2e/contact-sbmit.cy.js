describe('Formulaire de contact', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/#contact'); // adapte l’URL selon ta route réelle
    });
  
    it('doit permettre de remplir et soumettre le formulaire', () => {
      cy.get('form').should('exist').and('be.visible');
  
      cy.get('[data-cy=input-nom]').should('exist').type('Dupont');
      cy.get('[data-cy=input-prenom]').should('exist').type('Jean');
      cy.get('[data-cy=select-contactType]').should('exist').select('Personnel');
      cy.get('[data-cy=input-email]').should('exist').type('jean.dupont@mail.com');
      cy.get('[data-cy=textarea-message]').should('exist').type('Ceci est un message de test.');
  
      cy.get('button[type=submit]').click();
  
      cy.get('button[type=submit]').should('contain', 'En cours');
      cy.get('button[type=submit]').should('not.be.disabled');
    });
  });
  