import testData from "../fixtures/testData.json";

describe("CHECKBOXES", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.checkboxes).click();
  });

  it("asserts not selected", () => {
    cy.get("#checkboxes > :nth-child(1)").should("not.be.checked");
  });

  it("selects the box and assersts selected", () => {
    cy.get("#checkboxes > :nth-child(1)").click();
    cy.get("#checkboxes > :nth-child(1)").should("be.checked");
  });

  it("unselects selected checkbox and asserts unselected", () => {
    cy.get("#checkboxes > :nth-child(3)").should("be.checked");
    cy.get("#checkboxes > :nth-child(3)").click();
    cy.get("#checkboxes > :nth-child(3)").should("not.be.checked");
  });
});
