// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  // NOTE: Flat Config ではスプレッド不可。要素として追加
  next.configs["core-web-vitals"],
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      import: importPlugin,
      "@next/next": next,
    },
    settings: {
      "import/resolver": {
        typescript: { project: "./tsconfig.json" },
      },
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];