import testData from "../fixtures/testData.json";

describe("EXIT INTENT", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.exit).click();
  });

  it("closes ad", () => {
    cy.get("html").trigger("mouseleave", 0, 0);
    cy.get(".modal-title h3").should("be.visible");
    cy.get(".modal-footer > p").click();
  });
});
