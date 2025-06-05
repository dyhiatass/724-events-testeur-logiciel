describe('Page d\'accueil - 724 Events', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('doit afficher la page avec le bon titre et les sections principales', () => {
    cy.title().should('include', '724'); 

    cy.get('.SliderContainer').should('exist');
    cy.get('#nos-services').should('exist');
    cy.get('#nos-realisations').should('exist');
    cy.get('#notre-equipe').should('exist');
    cy.get('#contact').should('exist');
  });

  it('doit afficher la navbar et le footer', () => {
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});

