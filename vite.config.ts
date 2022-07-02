// vue3
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "path";
export default ({ mode }) => {
  const __DEV__ = mode === "development";
  return defineConfig({
    alias: {
      "@": resolve("src"),
    },
    plugins: [
      vue(),
      qiankun("vue3_ts_vite", {
        useDevMode: true,
      }),
    ],
    base: "./",
    server: {
      port: 3000,
      cors: true,
      proxy: {},
    },
  });
};
