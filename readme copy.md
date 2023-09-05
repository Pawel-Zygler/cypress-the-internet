# Cypress Automation for Difficult Scenarios

## Commands

- **Open Cypress GUI**: `npx cypress open`
- **Run All Tests**: `npx cypress run`

### Run Specific Test File

\`\`\`bash
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

## Scenarios To Do

- 11 scenarios remaining
- Bank website in Cypress

## Time Spent

- **As a user I want to add and remove elements**
  - Add assertion, delete elements
  - Time spent: 4h (including project setup)
- **Basic Auth**
  - Status: Not doable at the moment
  - Time spent: 45m (started on 24th August)
- **Other Tests** (e.g., dynamic dropdown, drag and drop)
  - Time spent: ~2h
- **Note**: Tests typically take around 30m to write, possibly 20m.

## Failures / Difficult Scenarios

- Frames nested
- Iframes
- File download with plugin
- File upload
- Secure file download
- Shadow DOM (or skipped, uncertain on how to handle)
