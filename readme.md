# Cypress automation for advanced scenarios

## Commands

- **Install dependencies**: `npm i`
- **Open Cypress GUI**: `npx cypress open`
- **Run All Tests**: `npx cypress run`

### Run Specific Test File

`\`\`\``bash
npx cypress run --spec "cypress/integration/nazwa_pliku_testowego.js"
\`\`\`

### Run Tests with Specific Browser

\`\`\`bash
npx cypress run --browser chrome
\`\`\`

### Run Tests with Custom Configuration

\`\`\`bash
npx cypress run --config baseUrl=http://localhost:8080
\`\`\`

In this case, `baseUrl` will be set to `http://localhost:8080`.
