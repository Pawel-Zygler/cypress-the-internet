import testData from "../fixtures/testData.json";

describe("JQUERY", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.jquery).click();
  });

  it("jquery dropdown", () => {
    cy.get("#ui-id-3 > :nth-child(2)").click();
    cy.get('#ui-id-4 > [href="#"]').click();
    cy.get("#ui-id-5 > a").click();
  });

  it("jquery - with contains", () => {
    cy.contains("Enabled").click();
    cy.contains("Downloads").click();
    cy.contains("PDF").click();
  });
});
