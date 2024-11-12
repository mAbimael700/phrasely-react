import path from "path"
import Unfonts from 'unplugin-fonts/vite'
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), Unfonts({ /* options */ 
    google:{
      families: [
        {
          name: "Josefin Sans",
          styles: 'ital,wght@0,100..700;1,100..700'
        },
        {
          name: 'Montserrat',
          styles: 'ital,wght@0,100..900;1,100..900'
        }
        
      ],
      injectTo: 'head-prepend',
    }
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
