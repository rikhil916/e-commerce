import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/e-commerce',  // Add this line, replace 'e-commerce' with your repo name
});
