describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".home-page-loggedout-create-event-btn").click();
  });

  it("should display the login form", () => {
    // Using label text
    cy.contains("label", "Email").should("exist");
    cy.contains("label", "Password").should("exist");

    // Using input type
    cy.get('input[type="email"]').should("exist");
    cy.get('input[type="password"]').should("exist");

    // Using button text
    cy.contains("button", "Sign in").should("exist");
  });

  it("should show error message with invalid credentials", () => {
    // Using input type
    cy.get('input[type="email"]')
      .type("invalid@example.com")
      .should("have.value", "invalid@example.com");

    // Using placeholder text
    cy.get('input[placeholder*="password" i]')
      .type("asjhdhioqheoqheioq")
      .should("have.value", "asjhdhioqheoqheioq");

    // Using button text
    cy.contains("button", "Sign in").click();

    // Using error message text
    cy.contains("Incorrect username or password.").should("be.visible");
  });

  // it("should handle form validation", () => {
  //   // Using input type with parent form
  //   cy.get("form").within(() => {
  //     cy.get('input[type="email"]').type("invalid-email");
  //     cy.get('input[type="password"]').type("123");
  //     cy.contains("button", "Sign In").click();
  //   });

  //   // Check for validation messages
  //   cy.contains("Please enter a valid email").should("be.visible");
  //   cy.contains("Password must be at least 8 characters").should("be.visible");
  // });

  // it("should clear form fields", () => {
  //   // Using input type with clear
  //   cy.get('input[type="email"]')
  //     .type("test@example.com")
  //     .clear()
  //     .should("have.value", "");

  //   // Using placeholder with clear
  //   cy.get('input[placeholder*="password" i]')
  //     .type("password123")
  //     .clear()
  //     .should("have.value", "");
  // });

  // Add more authentication-related tests here
});
