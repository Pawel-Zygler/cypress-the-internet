import testData from "../fixtures/testData.json";

describe("NOTIFICATIONS", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.notifications).click();
  });

  it("checks if notifications contains one of three texts", () => {
    cy.contains("Click here").click();
    cy.get("#flash")
      .invoke("text")
      .then((text) => text.trim())
      .as("flashText");

    // cy.get("@flashText").should("

    cy.get("@flashText").should((flashText) => {
      if (
        !flashText.includes("Action successful") &&
        !flashText.includes("Action unsuccesful, please try again")
      ) {
        throw new Error("Text does not match any of the expected strings");
      }
    });
  });
});
