import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
      allowedHosts: ['816f243a-8b8c-467a-bcc6-9407510ae17d-00-2goeyu383kc0d.picard.replit.dev'],
  }
})
