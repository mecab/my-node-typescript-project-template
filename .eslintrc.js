module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'no-await-in-loop': 'warn',
    'no-template-curly-in-string': 'warn',
    '@typescript-eslint/explicit-function-return-type': [ 'error', { allowExpressions: true } ],
    '@typescript-eslint/no-unused-vars': [ 'warn', { argsIgnorePattern: "^_" } ]
  }
}
