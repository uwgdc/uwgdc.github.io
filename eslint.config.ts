// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([{
  rules: {
    "react/react-in-jsx-scope": "off",
  },
}, {
  files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  plugins: { js },
  extends: ["js/recommended"],
  languageOptions: { globals: globals.browser },
}, tseslint.configs.recommended, {
  files: ["**/*.{js,jsx,ts,tsx}"],
  plugins: {
    react: pluginReact,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    ...pluginReact.configs.recommended.rules,
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
}, {
  files: ["**/*.json"],
  plugins: { json },
  language: "json/json",
  extends: ["json/recommended"],
}, {
  files: ["**/*.jsonc"],
  plugins: { json },
  language: "json/jsonc",
  extends: ["json/recommended"],
}, {
  files: ["**/*.md"],
  plugins: { markdown },
  language: "markdown/gfm",
  extends: ["markdown/recommended"],
}, {
  files: ["**/*.css"],
  plugins: { css },
  language: "css/css",
  extends: ["css/recommended"],
}, ...storybook.configs["flat/recommended"]]);
