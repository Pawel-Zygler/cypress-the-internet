import testData from "../fixtures/testData.json";

//this actually is not to be tested im cypress atm
//any fixes?
xdescribe("BASIC AUTH", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.basicAuth).click();
  });

  it("cancels and checks if authorised", () => {
    cy.on("window:confirm", () => true);
  });
});
