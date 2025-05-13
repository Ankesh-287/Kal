import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build:{
    rollupOptions:{
      output:{
        manualChunks(id) {
          if(id.includes('node_modules')) {
            return 'venor'
          }
        }
      }
    }
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // 👈 Add this!
    },
  },
})
