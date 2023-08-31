import testData from "../fixtures/testData.json";

describe("K PRESS", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.keyPress).click();
  });

  it("presses space", () => {
    cy.get("#target").type(" ");
    cy.get("#result").should("have.text", "You entered: SPACE");
  });

  it("presses h", () => {
    cy.get("#target").type("h");
    cy.get("#result").should("have.text", "You entered: H");
  });

  it("presses i", () => {
    cy.get("#target").type("i");
    cy.get("#result").should("have.text", "You entered: I");
  });

  it("presses r", () => {
    cy.get("#target").type("r");
    cy.get("#result").should("have.text", "You entered: R");
  });

  it("presses e", () => {
    cy.get("#target").type("e");
    cy.get("#result").should("have.text", "You entered: E");
  });

  it("presses m", () => {
    cy.get("#target").type("m");
    cy.get("#result").should("have.text", "You entered: M");
  });

  it("presses e", () => {
    cy.get("#target").type("e");
    cy.get("#result").should("have.text", "You entered: E");
  });

  it("presses p", () => {
    cy.get("#target").type("p");
    cy.get("#result").should("have.text", "You entered: P");
  });

  it("presses l", () => {
    cy.get("#target").type("l");
    cy.get("#result").should("have.text", "You entered: L");
  });

  it("presses s", () => {
    cy.get("#target").type("s");
    cy.get("#result").should("have.text", "You entered: S");
  });
});
