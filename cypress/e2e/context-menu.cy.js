import testData from "../fixtures/testData.json";

describe("CONTEXT MENU", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.contextMenu).click();
  });

  it("clicks context menu", () => {
    cy.get("#hot-spot").click({ button: "right" });
  });
});
