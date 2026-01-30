import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../server/dist/public", // Change 'my_custom_dist' to your desired folder name
    emptyOutDir: true, // Optional: Clears the directory before each build
  },
  server: {
    proxy: {
      "/api": "http://localhost:3001/",
    },
  },
});
