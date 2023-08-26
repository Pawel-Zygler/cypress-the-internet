/// <reference types="cypress-downloadfile"/>

import testData from "../fixtures/testData.json";

describe("FILE DOWNLOAD", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.fileDownload).click();
  });

  it("downloads a file", () => {
    cy.downloadFile(
      "https://the-internet.herokuapp.com/download/uploading.txt",
      "downloads",
      "uploading.text"
    );
  });
});
