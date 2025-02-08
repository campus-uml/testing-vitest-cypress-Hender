const { defineConfig } = require('cypress')

module.exports = defineConfig({ 
  projectId: "nswmek",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})