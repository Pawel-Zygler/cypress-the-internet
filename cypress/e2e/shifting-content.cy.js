import testData from "../fixtures/testData.json";

describe("SHIFTING CONTENT", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.shiftingContent).click();
  });

  //sometimes it does not go correctly to shifting content page
  //flaky
  it("checks if there is a header with Gallery name", () => {
    cy.get("div#content > div > a:nth-of-type(1)").click();
    cy.get(".shift").should("have.text", "Gallery");
  });

  //works but flaky, works when shift is not big?
  //could be the heroku link is broken
  it("clicks moves the button more to left, checks if visible", () => {
    cy.get("div#content > div > a:nth-of-type(1)").click();
    cy.get("p:nth-of-type(3) > a").click();

    cy.get(".shift").should("have.text", "Gallery");
  });

  it("clicks shifting image sublink and asserts image is there", () => {
    cy.get("div > a:nth-of-type(2)").click();
    cy.get(".shift").should("be.visible");
  });

  it("asserts moving list", () => {
    cy.get("div > a:nth-of-type(3)").click();
    cy.get("div#content").should("be.visible");
  });
});
