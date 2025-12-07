import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'

import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  build: {
    target: 'baseline-widely-available',
  },
  server: {
    host: true, // Listen on all interfaces (both IPv4 and IPv6)
    open: false,
  },
  test: {
    environment: 'happy-dom',
    globals: true,
  }
})
