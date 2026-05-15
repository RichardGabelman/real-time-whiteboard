import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
    proxy: {
      "/api": {
        target: "http://nginx:80",
        changeOrigin: true,
      },
      "/socket.io": {
        target: "http://nginx:80",
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
