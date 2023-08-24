import testData from "../fixtures/testData.json";

describe("GO TO ADD REMOVE ELEMENTS", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.addRemove).click();
  });

  it("checks if the user went to add remove elements section", () => {
    cy.get('[onclick="addElement()"]').should("be.visible");
  });

  it("adds 10 elements and deletes 10 elements", () => {
    for (let i = 0; i < 10; i++) {
      cy.get('[onclick="addElement()"]').click({ multiple: true });
    }

    for (let i = 0; i < 10; i++) {
      cy.get("#elements > :nth-child(1)").click({ multiple: true });
    }
  });
});
