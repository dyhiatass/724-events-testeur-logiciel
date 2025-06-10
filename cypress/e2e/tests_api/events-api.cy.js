describe('API - GET /api/events', () => {
  it('doit renvoyer un tableau d’événements avec les bonnes propriétés', () => {
    cy.request('http://localhost:8080/api/events')
      .then((response) => {
        // Vérifie que la réponse a un code 200
        expect(response.status).to.eq(200);

        // Vérifie que le corps de la réponse est un tableau
        expect(response.body).to.be.an('array');

        // Vérifie qu’il y a au moins un événement
        expect(response.body.length).to.be.greaterThan(0);

        // Vérifie les propriétés du premier événement
        const event = response.body[0];
        expect(event).to.have.property('_id');
        expect(event).to.have.property('title');
        expect(event).to.have.property('date');
        expect(event).to.have.property('type');
        expect(event).to.have.property('cover');
        expect(event).to.have.property('description');
        expect(event).to.have.property('nb_guest');
        expect(event).to.have.property('periode');
        expect(event).to.have.property('prestations').and.to.be.an('array');
        expect(event).to.have.property('location');
        expect(event).to.have.property('id');
      });
  });
});
