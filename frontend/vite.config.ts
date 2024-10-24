import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Permitir conexões de qualquer IP
    port: 5173,
  },
});
