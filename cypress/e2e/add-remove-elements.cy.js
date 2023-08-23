import homePage from "../pageObjects/home-page.js";
import testData from "../fixtures/testData.json";

describe("GO TO ADD REMOVE ELEMENTS", () => {
  before(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.addRemove).click();
  });

  it("checks if the user went to add remove elements section", () => {
    for (let i = 0; i < 4; i++) {
      cy.get('[onclick="addElement()"]').click({ multiple: true });
    }
  });
});
