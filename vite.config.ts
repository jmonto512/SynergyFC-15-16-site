import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SynergyFC-15-16-site/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        policies: './policies.html',
        playerDevelopment: './player-development.html',
      },
    },
  },
})
