import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/tugas-tekweb-7/", 
  plugins: [react()],
  css: {
    postcss: false,
  },
});
