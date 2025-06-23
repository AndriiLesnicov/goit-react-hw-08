import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Проксі для API-запитів на /api
      "/api": {
        target: "https://connections-api.goit.global",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // прибираємо /api при проксуванні
      },
    },
  },
});
