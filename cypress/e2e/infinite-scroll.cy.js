import testData from "../fixtures/testData.json";

describe("INFINITE SCROLL", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.scroll).click();
  });

  it("scrolls to lower parapgraph 15 times", () => {
    for (let i = 0; i < 15; i++) {
      cy.scrollTo("bottom");
      cy.wait(100);
    }
  });
});
