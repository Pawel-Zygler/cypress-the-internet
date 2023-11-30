import testData from "../fixtures/testData.json";

describe("Large DOM", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.multipleWindows).click();
  });

  it("removes attribute that opens new tab, and then opens link i same tab", () => {
    cy.contains("Click Here").invoke("removeAttr", "target").click();
    cy.get("h3").should("have.text", "New Window");
  });
});
