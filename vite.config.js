import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react'; // Plugin to manage JSX & React
import purgecss from 'vite-plugin-purgecss'; // Plugin to delete useless CSS

export default defineConfig({
  plugins: [
    react(), // React integration with Vite
    purgecss(),
  ],
  base: '/portfolio/', // For Github Page, to find the right fiels
});
