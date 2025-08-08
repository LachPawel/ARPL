import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Root path for custom domain (arpl.dev)
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})