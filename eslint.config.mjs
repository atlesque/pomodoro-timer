import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import astroPlugin from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  prettier,
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
];
