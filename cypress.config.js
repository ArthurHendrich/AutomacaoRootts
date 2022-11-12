const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporterOptions: {
    "overwrite": true,
    "html": true,
    "json": false,
    "code": true,
    "timestamp": "mmddyyyy-HHMMss",
  },
  e2e: {
    experimentalSessionAndOrigin: false,
  },
  chromeWebSecurity: false,
});