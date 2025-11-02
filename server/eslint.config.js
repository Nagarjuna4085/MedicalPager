export default {
  env: {
    node: true,
    es2023: true,
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
};
