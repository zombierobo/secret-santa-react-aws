describe("Authenticator:", function () {
  describe("sign in", () => {
    it("should display username greeting", () => {
      cy.authenticate();
      cy.visit("/events");
      cy.get(".event-list-page-heading").contains("Your secret santa events");
    });
  });
});
