import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // ← This fixes asset paths
  build: {
    outDir: 'dist'
  },
  server: {
    port: process.env.PORT || 3000
  }
})
