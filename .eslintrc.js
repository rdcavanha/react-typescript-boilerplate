const typeScriptFileExtensions = ['.ts', '.tsx'];
const javaScriptFileExtensions = ['.js', '.jsx'];
const allScriptFileExtensions = [...javaScriptFileExtensions, ...typeScriptFileExtensions];

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/extensions': allScriptFileExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': typeScriptFileExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allScriptFileExtensions,
      },
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    'react/jsx-filename-extension': ['error', { extensions: allScriptFileExtensions }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-useless-constructor': 'off',
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
      files: ['webpack.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
