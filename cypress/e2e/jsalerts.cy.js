import testData from "../fixtures/testData.json";

describe("JS ALERTS", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.jsAlerts).click();
  });

  it("3 JS ALERTS", () => {
    cy.contains("Click for JS Alert").click();
    cy.get("#result").should("have.text", "You successfully clicked an alert");
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "You clicked: Ok");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("salve mundus");
    });
    cy.contains("Click for JS Prompt").click();
    cy.get("#result").should("have.text", "You entered: salve mundus");
  });
});
