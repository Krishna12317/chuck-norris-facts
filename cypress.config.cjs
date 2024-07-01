/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const { defineConfig } = require('cypress');

// eslint-disable-next-line no-undef
module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
    supportFile: false
  },
  env: {
    // environment variables
  },
});
