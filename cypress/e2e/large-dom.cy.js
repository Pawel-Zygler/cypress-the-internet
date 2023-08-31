import testData from "../fixtures/testData.json";

describe("Large DOM", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.largeDOM).click();
  });

  it("gets value of sibling 33.1", () => {
    cy.get("#sibling-33\\.1").scrollIntoView();

    cy.get("#sibling-33\\.1").invoke("text").should("contain", "33.1");
  });

  it("gets value of table from row 10.14", () => {
    cy.get(".row-10 > .column-14").scrollIntoView();

    cy.get(".row-10 > .column-14").invoke("text").should("contain", "10.14");
  });
});
