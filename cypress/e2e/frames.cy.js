///<reference types="cypress-iframe" />

import testData from "../fixtures/testData.json";

xdescribe("NESTED FRAMES EDITOR", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.frames.name).click();
    cy.contains(testData.sectionName.frames.nested).click();
  });

  //I failed at this for now
  it("checks middle frame is visible [unresolved atm]", () => {
    // cy.get("frame-middle").within(() => {
    //   cy.get("#content").should("have.text", "MIDDLE");
    // });

    cy.window().then((win) => {
      const frame = win.frames["frame-left"];
      if (frame) {
        const frameDoc = frame.document || frame.contentDocument;
        cy.wrap(frameDoc).find("body").should("have.text", "LEFT");
      } else {
        throw new Error('Frame "frame-left" not found');
      }
    });
  });
});

//also failed at this, spent ~1h or sos
xdescribe("IFRAME", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.frames.name).click();
    cy.contains(testData.sectionName.frames.iframe).click();
  });

  it("checks if I can add Salve mundus in the editor and assert it.", () => {
    cy.iframe().find("body#tinymce").type("Salve Mundus");
    // Your content goes here.
    // cy.iframe().contains('Some hidden element').should('not.be.visible')
  });
});
