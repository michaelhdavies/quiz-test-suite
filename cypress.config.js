import { defineConfig } from 'cypress';
import customViteConfig from './vite.config.js';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:3001',
  },
});
