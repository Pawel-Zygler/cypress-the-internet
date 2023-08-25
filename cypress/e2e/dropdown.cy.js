import testData from "../fixtures/testData.json";

describe("DROPDOWN", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.dropdown).click();
  });

  it("selects option 1", () => {
    cy.get("#dropdown").select("Option 1");
    cy.get("#dropdown").find("option:selected").should("have.text", "Option 1");
  });
});
