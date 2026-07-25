import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from the root of its own custom domain, not a /part-time-labs/ subpath
  base: "/",
})
