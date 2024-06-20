module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  plugins: ['import', 'prettier', '@typescript-eslint'],
  parserOptions: {
    project: '../tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
  },
};
