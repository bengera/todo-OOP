import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    htmlPurge(),
  ],
  build: {
    rollupOptions: {
      input: {
        // Define your entry points here
        index: resolve(__dirname, 'index.html'),
        mainJS: resolve(__dirname, 'main.js'),
        
      }
    }
  }
});
