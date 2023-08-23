describe("HOMEPAGE", () => {
  before(() => {
    cy.visit("/");
  });

  it("goes to homepage", () => {
    cy.title().should("include", "The Internet");
  });
});
