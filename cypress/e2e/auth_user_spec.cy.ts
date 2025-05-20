let storageCache;

describe("Authenticated User Cases:", function () {
  before(() => {
    cy.authenticate().then((_) => {
      storageCache = { ...localStorage };
    });
  });
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        Object.entries(storageCache).forEach(([k, v]) => {
          win.localStorage.setItem(k, "" + v);
        });
      },
    });
  });
  describe("home page after signing in", () => {
    it("should display username greeting", () => {
      cy.get(".user-greeting-message").contains(
        "Welcome to Secret Santa events manager!"
      );
    });
  });
  describe("event lists page", () => {
    it("should display username greeting", () => {
      cy.visit("/events");
      cy.get(".event-list-page-heading").contains("Your secret santa events");
    });
  });
});
