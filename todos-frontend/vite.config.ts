import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows external access
    port: 5173,
    strictPort: true,
    allowedHosts: ['.gitpod.io'], // Allows Gitpod subdomains
  }
})
