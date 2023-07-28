module.exports = {
  extends: ['next', 'next/core-web-vitals', 'airbnb', 'airbnb-typescript'],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  rules: {
    'no-console': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'object-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'no-confusing-arrow': 0,
    'operator-linebreak': 0,
    'arrow-body-style': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react'],
          // MUI imports
          ['^(@mui)(/.*|$)'],
          // Other packages come after.
          ['^@', '^\\w'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
  parser: '@typescript-eslint/parser',
};
