module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx', './*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
