const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rhfpqw',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {

    },
  },
});
