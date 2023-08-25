import testData from "../fixtures/testData.json";

describe("DRAG N DROP", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.dnd).click();
  });

  it("asserts if A got dropped onto B", () => {
    cy.get("#column-a").trigger("mousedown", { which: 1 });
    cy.get("#column-b").trigger("mousemove");
    cy.get("#column-b").trigger("mousedown", { button: 0 });
  });
});
