export default [
  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    ignores: ["src/**/*.d.ts", "**/*.config.js", "node_modules/**"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    plugins: ["react", "@typescript-eslint"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
  },
];
