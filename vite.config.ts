import { defineConfig } from "vite";

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      // dev specific config
      base: "/",
    };
  } else {
    // command === 'build'
    return {
      // build specific config
      base: "https://danialnoaein.github.io/filter-app-front/",
    };
  }
});
