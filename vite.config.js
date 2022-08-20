import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

import { viteMockServe } from "vite-plugin-mock";

import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      viteMockServe({
        // default
        mockPath: "mock",
        localEnabled: command === "serve",
      }),
      eslint(),
    ],
    server: {
      open: true,
      host: "localhost",
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
