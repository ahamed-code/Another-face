import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Fixed for standard structure
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: ".",  // Standard root (not "client")
  build: {
    outDir: "dist",  // Standard Vercel path
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
