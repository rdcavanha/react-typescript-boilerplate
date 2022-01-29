const extensions = ['.ts', '.tsx'];

module.exports = {
  plugins: ['import'],
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
      extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
      settings: {
        'import/extensions': extensions,
        'import/parsers': {
          '@typescript-eslint/parser': extensions,
        },
        'import/resolver': {
          node: {
            extensions,
          },
          typescript: {},
        },
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'arrow-body-style': ['error', 'as-needed'],
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
    },
    {
      files: ['*.test.ts', '*.test.tsx', './*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
};
