import testData from "../fixtures/testData.json";

describe("CHECKBOXES", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.contextMenu).click();
  });

  it("asserts not selected", () => {
    cy.get("#hot-spot").click({ button: "right" });
  });
});
