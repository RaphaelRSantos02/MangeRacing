const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
  viewportHeight: 950,
  viewportWidth: 1600,
});
