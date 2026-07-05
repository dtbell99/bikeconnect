import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Shorthand for simple target routing
      "/api": {
        target: "http://localhost:3001",
      },
    },
  },
  plugins: [react()],
});
