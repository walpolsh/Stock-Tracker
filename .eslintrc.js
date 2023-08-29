/* eslint-disable no-bitwise */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {endOfLine: 'auto', 'no-inline-styles': false},
    ],
    'react-native/no-inline-styles': 0,
    'react/no-unstable-nested-components': [
      'off' | 'warn' | 'error',
      {allowAsProps: true | false},
    ],
    'no-shadow': 'off',
  },
};
