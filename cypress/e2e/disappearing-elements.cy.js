import testData from "../fixtures/testData.json";

describe("DISAPPEARING ELEMENTS", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.disappearingElements).click();
  });

  it("asserts element is visible, throws exception if not", () => {
    cy.get(":nth-child(5) > a").should("be.visible");
  });
});
