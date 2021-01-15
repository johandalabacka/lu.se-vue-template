module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ['standard', 'plugin:vue/recommended'],
  plugins: ['no-autofix'],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'prefer-const': 'off',
    'no-autofix/prefer-const': 'error',

    // Component name must match name of file
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true
      }
    ]

    // Possible useful exceptions
    // Turn off error on mutating objects sent in as props
    // 'vue/no-mutating-props': 'off',
    // Turn off error for using v-html tag
    // 'vue/no-v-html': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
