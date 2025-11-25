import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap'; // <-- 1. IMPORT THE SITEMAP PLUGIN

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // Define the custom plugins array
  const customPlugins = [
    react(),
    sitemap({ // <-- 2. ADD THE SITEMAP CONFIG
      hostname: 'https://qlavo.in', // IMPORTANT: Use your deployed domain
      outDir: './dist',            // Netlify's publish directory
    }),
  ];

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    // 3. USE THE CUSTOM PLUGIN ARRAY
    plugins: customPlugins,

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});