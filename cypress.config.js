const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
  },

  setupNodeEvents(on, config) {
    on("task", { downloadFile });
  },
});
