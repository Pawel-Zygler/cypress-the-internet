import testData from "../fixtures/testData.json";

describe("CLOSE AD", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.ad).click();
  });

  it("closes ad", () => {
    cy.get(".modal-footer > p").click();
  });

  it("closes and reenables ad and closes again", () => {
    cy.get(".modal-footer > p").click();
    cy.get("#restart-ad").click();
    cy.visit("https://the-internet.herokuapp.com/entry_ad");
    cy.get(".modal-footer > p").click();
  });
});
