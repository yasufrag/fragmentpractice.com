// eslint.config.mjs
import js from "@eslint/js";
import * as tseslint from "typescript-eslint"; // ← parser と plugin を使う
import nextPlugin from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import globals from "globals";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  // 1) 無視（JSの設定ファイルは対象外に）
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/dist/**",
      "**/.turbo/**",
      "eslint.config.mjs",
    ],
  },

  // 2) JS 基本
  {
    ...js.configs.recommended,
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // 3) Next Core Web Vitals（.eslintrc 形式は互換レイヤで）
  ...compat.extends("plugin:@next/next/core-web-vitals"),

  // 4) TS/TSX 専用（ここでだけ型付きLintを有効化）
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@next/next": nextPlugin,
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: { project: "./tsconfig.json", alwaysTryTypes: true },
        node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      },
    },
    rules: {
      // JSベースのルールはTSでは無効化
      "no-unused-vars": "off",
      "no-undef": "off",

      // Next
      "@next/next/no-html-link-for-pages": "off",

      // import 並び
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          pathGroups: [{ pattern: "@/**", group: "internal", position: "before" }],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // TS推奨（型必須）
      "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }
      ],

      // console
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];