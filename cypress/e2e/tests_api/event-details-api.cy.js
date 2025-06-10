describe('API - GET /api/events/:id', () => {
  it('doit renvoyer les détails de l’événement avec l’ID fourni', () => {
    const eventId = '684801a98564080b05b0c2d3';
    cy.request(`http://localhost:8080/api/events/${eventId}`)
      .then((response) => {
        // Vérifie que la réponse a un code 200
        expect(response.status).to.eq(200);

        // Vérifie que la réponse est bien un objet
        expect(response.body).to.be.an('object');

        // Vérifie les propriétés attendues
        expect(response.body).to.have.property('_id', eventId);
        expect(response.body).to.have.property('title', 'User&product MixUsers');
        expect(response.body).to.have.property('date').and.to.include('2022-04-29');
        expect(response.body).to.have.property('type', 'conférence');
        expect(response.body).to.have.property('cover').and.to.include('alexandre-pellaes');
        expect(response.body).to.have.property('description', 'Présentation des nouveaux usages UX.');
        expect(response.body).to.have.property('nb_guest', 900);
        expect(response.body).to.have.property('periode', '14-15-16');
        expect(response.body).to.have.property('prestations').and.to.be.an('array');
        expect(response.body.prestations).to.include.members([
          '1 espace d’exposition',
          '1 scéne principale',
          '1 espace de restaurations',
        ]);
        expect(response.body).to.have.property('location').and.to.include('google.com/maps');
      });
  });
});
