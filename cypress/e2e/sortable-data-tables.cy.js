import testData from "../fixtures/testData.json";

describe("SORTABLE DATA TABLES", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.dataTables).click();
  });

  it("sorts by email and asserts value of 1st row", () => {
    cy.get("#table1 > thead > tr > :nth-child(3) > span").click();
    cy.get("#table1 > tbody > :nth-child(1) > :nth-child(3)").should(
      "have.text",
      "fbach@yahoo.com"
    );
  });

  it("sorts 2nd table by website and asserts 2nd row", () => {
    cy.get(":nth-child(5) > .web-site").click();
    cy.get(":nth-child(2) > .web-site").should("have.text", "http://www.jdoe.com");
  });
});
