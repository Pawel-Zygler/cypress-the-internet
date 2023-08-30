import testData from "../fixtures/testData.json";

describe("IFRAME EDITOR", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.frames.name).click();
    cy.contains(testData.sectionName.frames.nested).click();
  });

  //I failed at this for now
  it("checks middle frame is visible", () => {
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
