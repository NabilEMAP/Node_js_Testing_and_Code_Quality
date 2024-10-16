// eslint.config.js
module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2020, // equivalent to "es2020": true
      globals: {
        // you can define globals here if needed
        // e.g., "globalVariableName": "readonly"
      }
    },
    rules: {
      "no-empty": "error",
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error"
    }
  }
];
