module.exports = {
  env: {
    browser: true,
    es2021: true,
    serviceworker: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': ['error', 'always']
  },
  globals: {
    'gtag': 'readonly',
    'ionicons': 'readonly',
    'performance': 'readonly',
    'IntersectionObserver': 'readonly',
    'PerformanceObserver': 'readonly'
  }
}