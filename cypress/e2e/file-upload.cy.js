import testData from "../fixtures/testData.json";

describe("FILE UPLOAD", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.fileUpload).click();
  });

  it("attempts to uplaod no file", () => {
    cy.get("[type='submit']").click();
    cy.get("h1").should("have.text", "Internal Server Error");
  });

  it("uploads a file", () => {
    cy.get("#file-upload").selectFile("testPic.jpg");
    cy.get("[type='submit']").click();
    cy.get("#uploaded-files").should("be.visible");
  });
});
