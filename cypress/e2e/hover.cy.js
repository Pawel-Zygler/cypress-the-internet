import testData from "../fixtures/testData.json";

describe("HOVER", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.hovers).click();
  });

  it("hovers over 3rd item and gets text", () => {
    cy.get(":nth-child(5) > img").realHover();
    cy.get(".figcaption h5")
      .invoke("text")
      .then((text) => {
        expect(text).to.contain("user3");
      });
  });
});
