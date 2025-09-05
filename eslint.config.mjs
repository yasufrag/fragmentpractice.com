// eslint.config.mjs（最小・Next公式推奨寄り）
import nextPlugin from "@next/eslint-plugin-next";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
    languageOptions: {
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    },
  },
];