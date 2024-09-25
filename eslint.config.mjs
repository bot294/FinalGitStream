import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

export default [
  // For JS, TS, JSX, TSX files
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["snake_case"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },
        {
          selector: "function",
          format: ["snake_case", "PascalCase"],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      "space-before-blocks": ["error", "always"],
      "lines-between-class-members": ["error", "always"],
      "no-unused-vars": "error",
      "multiline-comment-style": ["error", "starred-block"],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // ESLint's recommended config for JavaScript
  pluginJs.configs.recommended,
  // Manually include recommended rules from typescript-eslint
  {
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  // Manually include recommended rules from eslint-plugin-react
  {
    rules: {
      ...pluginReact.configs.recommended.rules,
    },
  },
];
