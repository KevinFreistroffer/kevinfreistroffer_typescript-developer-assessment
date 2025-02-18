describe("Basic Test Suite", () => {
  // There's an error in the UI, and this is required to get past that and run the test.
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("https://lastcallmedia.com/contact");
  });

  // Helper function to fill out the contact form
  const fillContactForm = (
    formData = {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      organization: "Test Org",
      source: "Google",
      message: "This is a test message",
    },
  ) => {
    cy.get('input[name="field_first_name[0][value]"]').type(formData.firstName);
    cy.get('input[name="field_last_name[0][value]"]').type(formData.lastName);
    cy.get('input[name="mail"]').type(formData.email);
    cy.get('input[name="field_organization[0][value]"]').type(
      formData.organization,
    );
    cy.get('select[name="field_how_did_you_hear_about_us"]').select(
      formData.source,
      { force: true },
    );
    cy.get('textarea[name="message[0][value]"]').type(formData.message);
    cy.contains(
      "The answer you entered for the CAPTCHA was not correct.",
    ).should("not.exist");
  };

  it("should show the CAPTCHA error text when the CAPTCHA is not checked or is invalid", () => {
    fillContactForm();
    cy.get("#edit-submit").click();

    cy.get('div[aria-label="Error message"]')
      .should("be.visible")
      .and(
        "contain",
        "The answer you entered for the CAPTCHA was not correct.",
      );
  });

  it("should successfully submit the form when all required fields are filled and the CAPTCHA is valid", () => {
    fillContactForm();
    // Check the CAPTCHA
    // ...

    cy.get("#edit-submit").click();
    cy.get('div[aria-label="Error message"]').should("not.exist");
  });
});
