// eslint.config.mjs
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // 除外パス
  {
    ignores: ["node_modules", ".next", "dist"],
  },

  // TypeScript 推奨設定
  ...tseslint.configs.recommended,

  // プロジェクト用設定
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      // Next.js 公式推奨ルール
      ...nextPlugin.configs.recommended.rules,

      // React 最低限
      "react/react-in-jsx-scope": "off", // Next.js では不要
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      // JSX アクセシビリティ
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",

      // TypeScript 調整
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];