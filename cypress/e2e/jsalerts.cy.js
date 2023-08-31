import testData from "../fixtures/testData.json";

describe("JS ALERTS", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains(testData.sectionName.jsAlerts).click();
  });

  it("3 JS ALERTS", () => {
    cy.contains("Click for JS Alert").click();
    cy.get("#result").should("have.text", "You successfully clicked an alert");
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "You clicked: Ok");

    //Stubbing zastępuje oryginalną funkcję (prompt) wersją, która zawsze zwraca 'salve mundus'. Dlatego, kiedy skrypt na stronie wywołuje prompt, Cypress automatycznie wpisuje 'salve mundus' jako odpowiedź.
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("salve mundus");
    });
    cy.contains("Click for JS Prompt").click();
    cy.get("#result").should("have.text", "You entered: salve mundus");
  });
});
