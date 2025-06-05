export function fillContactForm({ nom, prenom, email, message, contactType }) {
    cy.get('[data-cy="input-nom"]').clear().type(nom);
    cy.get('[data-cy="input-prenom"]').clear().type(prenom);
    cy.get('[data-cy="input-email"]').clear().type(email);
    cy.get('[data-cy="textarea-message"]').clear().type(message);
    if (contactType) {
      cy.get('[data-cy="select-contactType"]').select(contactType);
    }
  }
  