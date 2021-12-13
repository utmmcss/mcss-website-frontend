module.exports = {
  extends: ['next', 'next/core-web-vitals', 'airbnb', 'airbnb-typescript'],
  rules: {
    'import/newline-after-import': ['error', { count: 1 }],
    'object-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
  },
  parser: '@typescript-eslint/parser',
  files: ['*.ts', '*.tsx'], // Your TypeScript files extension
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
};
