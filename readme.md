# Cypress automation for advanced scenarios

website under test: https://the-internet.herokuapp.com/

This page contains internet components that you would otherwise meet in real life scenarios. They are intentionally made difficult to work with.

## cd to root and use commands

- **Go to root and install dependencies**: `npm i`
- **Open Cypress GUI in terminal**: `npx cypress open`
- **Click e2e testing and pick a browser**
- **Select any spec to run**
- **Run All Tests in headless from cli**: `npx cypress run`

### Run Specific Test File from cli

`npx cypress run --spec "cypress/e2e/close-ad.cy.js"`
