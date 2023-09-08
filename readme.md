# Cypress automation for advanced scenarios

## cd to root and use commands

- **Install dependencies**: `npm i`
- **Open Cypress GUI, press F on keyboard and pick any spec to run**: `npx cypress open`
- **Run All Tests in headless from cli**: `npx cypress run`

### Run Specific Test File

`bash npx cypress run --spec "cypress/e2e/close-ad.cy.js"`

### Run Tests with Specific Browser

`bash npx cypress run --browser chrome`

### Run Tests with Custom Configuration

\`\`\`bash
npx cypress run --config baseUrl=http://localhost:8080
\`\`\`

In this case, `baseUrl` will be set to `http://localhost:8080`.
