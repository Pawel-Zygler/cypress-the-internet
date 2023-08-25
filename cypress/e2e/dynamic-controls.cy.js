import testData from "../fixtures/testData.json";

describe("DNAMIC CONTROLS", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.dynamicControls).click();
  });

  it("asserts checkbox not selected", () => {
    cy.get("#checkbox > input").should("not.be.checked");
  });

  it("selects the checkbox and asserts selected", () => {
    cy.get("#checkbox > input").click();
    cy.get("#checkbox > input").should("be.checked");
  });

  it("it removes the checkbox and asserts gone", () => {
    cy.get("#checkbox-example > button").click();
    cy.get("#message").should("have.text", "It's gone!");
  });

  it("adds a checkbox and asserts added", () => {
    cy.get("#checkbox-example > button").click();
    cy.get("#message").should("have.text", "It's gone!");
    cy.get("#checkbox-example > button").click();
    cy.get("#checkbox").should("be.visible");
    cy.get("#message").should("have.text", "It's back!");
  });
});
