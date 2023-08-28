import testData from "../fixtures/testData.json";

describe("FORM AUTHENTICATION", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.login).click();
  });

  it("scrolls down and clicks About", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").should("contain", "You logged into a secure area!");
  });

  it("scrolls down and clicks About", () => {
    cy.get("#username").type("tomdsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa").click();
    cy.get("#flash").should("contain", "Your username is invalid!");
  });
});
