import testData from "../fixtures/testData.json";

describe("HOVER", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.hovers).click();
  });

  it("hovers over 3rd and gets text", () => {
    cy.get(":nth-child(5) > img").trigger("mouseover");
    cy.get(".figcaption h5")
      .invoke("text")
      .then((text) => {
        const userName = text;
        console.log(userName);
      });
  });
});
