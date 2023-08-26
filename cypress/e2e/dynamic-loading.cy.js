import testData from "../fixtures/testData.json";

describe("DNAMIC LOADING", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.dynamicLoading).click();
  });

  it("goes to element 1 page and waits for it to load", () => {
    cy.get('[href="/dynamic_loading/1"]').click();
    cy.get("button").click();
    cy.get("#finish > h4").should("have.text", "Hello World!");
  });

  it("goes to element 2 page and waits for it to load", () => {
    cy.get('[href="/dynamic_loading/2"]').click();
    cy.get("button").click();
    cy.get("#finish", { timeout: 10000 })
      .should("be.visible")
      .should("contain.text", "Hello World!");
  });
});
