import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path  = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
     '@':path.join(__dirname,'/src/')
    }
  },
  server: {
    // host: "0.0.0.0",
    port: 3000,
    open: false,
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    manifest: false,
    
  base:"/Paper-Scissors-Stone-Online/",
  },
});
