import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { plugin as markdownPlugin, Mode } from "vite-plugin-markdown";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    markdownPlugin({
      mode: [Mode.MARKDOWN, Mode.HTML, Mode.REACT], // here need define modes
    }),
  ],
  assetsInclude: ["**/*.md"],
});
