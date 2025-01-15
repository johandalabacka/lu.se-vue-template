import neostandard from 'neostandard'
import pluginVue from 'eslint-plugin-vue'
import pluginNoAutofix from 'eslint-plugin-no-autofix'
import pluginPromise from 'eslint-plugin-promise'
import * as cssPlugin from 'eslint-plugin-css'

export default [
  ...neostandard(),
  // vue 2 use flat/vue2-recommended
  ...pluginVue.configs['flat/recommended'],
  pluginPromise.configs['flat/recommended'],
  cssPlugin.configs['flat/standard'],
  {
    plugins: { 'no-autofix': pluginNoAutofix },
    rules: { 'prefer-const': 'off', 'no-autofix/prefer-const': 'error' }
  },
  {
    rules: {
      // neostandard rule overrides
      'comma-dangle': ['error', 'never'],

      // vue rule overrides
      'vue/max-attributes-per-line': 'off',
      // Component name must match name of file
      'vue/match-component-file-name': [
        'error',
        {
          extensions: ['vue'],
          shouldMatchCase: true
        }
      ],

      // Use PascalCase in templates
      'vue/component-name-in-template-casing': 'error'

      // Possible useful exceptions
      // Turn off error on mutating objects sent in as props
      // 'vue/no-mutating-props': 'off',
      // Turn off error for using v-html tag
      // 'vue/no-v-html': 'off',
    }
  }
]
