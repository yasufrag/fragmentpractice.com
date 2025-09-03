import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
  },
  {
    rules: {
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          "groups": [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
          "alphabetize": { order: "asc", caseInsensitive: true }
        }
      ]
    }
  }
];