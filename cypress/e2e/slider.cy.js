import testData from "../fixtures/testData.json";

describe("SLIDER", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.slider).click();
  });

  it("sets slider to 3", () => {
    cy.get("input").type(3).trigger("change");
    cy.get("#range").should("have.text", "3");
  });

  it("sets slider to 2 and then 5", () => {
    cy.get("input").type(2).trigger("change");
    cy.get("#range").should("have.text", "2");
    cy.get("input").type(5).trigger("change");
    cy.get("#range").should("have.text", "5");
  });
});
