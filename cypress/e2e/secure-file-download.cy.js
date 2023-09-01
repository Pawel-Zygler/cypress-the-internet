import testData from "../fixtures/testData.json";

const file1 = "AMAPA.jpg";
const file2 = "TestData.xlsx";

//skipped for now, no solution
xdescribe("SECURE FILE DOWNLOAD", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.secureFileDownload).click();
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("admin");
    });
  });

  it("downloads a file", () => {
    cy.get(`[href="download/${file2}"]`).click();
  });

  it("downloads a file", () => {
    cy.get(`[href="download/${file1}"]`).click();
  });
});
