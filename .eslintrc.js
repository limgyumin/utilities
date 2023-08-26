module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["standard-with-typescript"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  globals: {
    Promise: "readonly",
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking", "plugin:prettier/recommended"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      excludedFiles: ["*.js"],
      rules: {
        "no-console": "off",
        "no-continue": "off",
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "import/no-named-as-default": "off",
        "import/prefer-default-export": "off",
        "require-await": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: ["PascalCase"],
          },
        ],
        "import/no-extraneous-dependencies": "off",
        "object-shorthand": ["error", "always"],
        curly: ["error", "all"],
      },
    },
  ],
};
