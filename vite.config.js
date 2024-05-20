import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Added to make listen it in other device within same network otherwise remove server 
  server: {
    host: '0.0.0.0',  // This allows the server to be accessed externally
    port: 5173,       // The port number you want to use
  },
})
