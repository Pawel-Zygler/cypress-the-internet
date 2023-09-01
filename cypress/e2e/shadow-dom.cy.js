import testData from "../fixtures/testData.json";

describe("SHADOW DOM", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.shadowDom).click();
  });

  it("sets slider to 3", () => {});
});
