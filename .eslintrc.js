module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    '@typescript-eslint/quotes': ['error', 'single'],
    'no-unused-vars': 'off',
    'spaced-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/no-array-index-key': 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'off',
    'react/no-unescaped-entites': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-shadow': 'off',
    'operator-linebreak': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'global-require': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['./js', '.jsx', '.ts', 'tsx', '.d.ts'],
      },
    },
  },
};
