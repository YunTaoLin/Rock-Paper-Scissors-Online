import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// const PrerenderSPAPlugin = require("prerender-spa-plugin");
const path = require("path");
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(__dirname, "/src/"),
    },
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
    outDir: "docs",
    assetsDir: "assets",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    manifest: false,
  },
  base: "/Rock-Paper-Scissors-Online/",
  plugins: [
    // new PrerenderSPAPlugin({
    //   staticDir: path.join(__dirname, "dist"),
    //   routes: ["/", "/zh-tw", "/en-us"],
    //   renderer: new Renderer({
    //     inject: {
    //       foo: "bar",
    //     },
    //     headless: true,
    //     renderAfterDocumentEvent: "render-event",
    //   }),
    // }),
    vue(),
  ],
  // ssgOptions: {
  //   format: 'cjs'
  // },
});
