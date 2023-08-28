import testData from "../fixtures/testData.json";

describe("FLOATING MENU", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.floatingMenu).click();
  });

  it("clicks contact", () => {
    cy.contains("Contact").click();
  });

  it("scrolls down and clicks About", () => {
    cy.get(".large-4 > div").scrollIntoView();
    cy.contains("About").click();
  });
});
