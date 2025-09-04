// eslint.config.mjs
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import next from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/out/**", "**/build/**", "next-env.d.ts"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,

  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  },

  next.configs["core-web-vitals"],

  {
    plugins: { import: importPlugin },
    rules: {
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          "groups": [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
          "alphabetize": { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];