import { defineConfig } from "vite";

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      base: "/",
    };
  } else {
    return {
      base: "https://danialnoaein.github.io/filter-app-front/",
    };
  }
});
