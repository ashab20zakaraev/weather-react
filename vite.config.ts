import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/app/assets/scss/_vars.scss";
        @import "@/app/assets/scss/vendor/mixins.scss";`,
      }
    }
  },
  build: {
    cssCodeSplit: true,
    outDir: "./dist",
    target: "es2015",
  }
})
