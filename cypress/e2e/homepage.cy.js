describe("Page d'accueil - 724 Events", () => {
  beforeEach(() => {
    cy.log("Visite de la page d'accueil");
    cy.visit("http://localhost:3000");
  });

  it("doit afficher la page avec les sections principales", () => {
    cy.log("Vérification de l'existence des sections clés");


    cy.get(".SliderContainer").should("exist").then(() => {
      cy.log("Slider/Carrousel présent");
    });

    cy.get("#nos-services").should("exist").then(() => {
      cy.log("Section 'Nos services' présente");
    });

    cy.get("#nos-realisations").should("exist").then(() => {
      cy.log("Section 'Nos réalisations' présente");
    });

    cy.get("#notre-equipe").should("exist").then(() => {
      cy.log("Section 'Notre équipe' présente");
    });

    cy.get("#contact").should("exist").then(() => {
      cy.log("Section 'Contact' présente");
    });
  });

  it("doit afficher la navbar et le footer", () => {
    cy.log("Vérification de la visibilité de la navbar et du footer");

    cy.get("header").should("be.visible").then(() => {
      cy.log("Navbar visible");
    });

    cy.get("footer").should("be.visible").then(() => {
      cy.log("Footer visible");
    });
  });
});
