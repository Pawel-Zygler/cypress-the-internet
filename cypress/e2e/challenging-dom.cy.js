import testData from "../fixtures/testData.json";

describe("CHALLENGING DOM", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.challengingDom).click();
  });

  it("pics the difficult element in table", () => {
    cy.get(":nth-child(7) > :nth-child(5)").should("contain", "Consequuntur6");
  });
});
