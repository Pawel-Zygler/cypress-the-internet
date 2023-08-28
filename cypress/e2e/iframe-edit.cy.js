import testData from "../fixtures/testData.json";

describe("IFRAME EDITOR", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.frames.name).click();
    cy.contains(testData.sectionName.frames.nested).click();
  });

  it("checks right frame is visible", () => {
    cy.get("frame-middle").within(() => {
      cy.get("#content").should("have.text", "MIDDLE");
    });
  });

  xit("adds hello world", () => {});
});
