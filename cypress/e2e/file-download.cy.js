import testData from "../fixtures/testData.json";

const file1 = "Capture2.JPG";
const file2 = "Excel.xlsx";

describe("FILE DOWNLOAD", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.fileDownload).click();
  });

  it("downloads a file", () => {
    cy.get(`[href="download/${file2}"]`).click();
  });

  it("downloads a file", () => {
    cy.get(`[href="download/${file1}"]`).click();
  });
});
