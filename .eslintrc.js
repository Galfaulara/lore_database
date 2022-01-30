/* eslint-disable no-magic-numbers */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'prefer-promise-reject-errors': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'indent': 'off',
    'semi': ['error', 'never'],
    'require-jsdoc': 'off',
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'brace-style': 'error',
    'camelcase': [
      'error',
      {
        'ignoreDestructuring': true,
        'ignoreImports': true,
        'allow': ['^UNSAFE_'],
      },
    ],
    'complexity': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'grouped-accessor-pairs': 'error',
    'no-empty-function': 'error',
    'no-implicit-globals': 'error',
    'no-magic-numbers': [
      'error',
      {ignore: [0, 1, 2], ignoreArrayIndexes: true},
    ],
    'no-nested-ternary': 'error',
    'no-shadow': 'error',
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-promise-reject-errors': 'error',
    'react/display-name': 'off',
    'sort-imports': 'error',
  },
}
