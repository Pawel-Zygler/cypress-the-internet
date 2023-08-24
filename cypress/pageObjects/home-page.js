//is it really needeD?

class homePage {
  homepageSubcategory(section) {
    return cy.contains(`${section}`);
  }
}

export default new homePage();
