const react = require("eslint-plugin-react");
const tseslint = require("typescript-eslint");
const globals = require("globals");
const reactPlugin = require("eslint-plugin-react");

module.exports = [
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    ignores: [
      "**/*.d.ts",
      "**/*.config.js",
      "node_modules/**",
    ],
    plugins: {
      react,
    },
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      semi: "error",
    },
  },
  reactPlugin.configs.flat.recommended,
  ...tseslint.configs.recommended,
];
