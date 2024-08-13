import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'


export default [
  { files: ['**/*.ts'] },
  {
    languageOptions: {
      globals: globals.browser, parser: tsParser, parserOptions: {
        ecmaVersion:"ES2020",
        sourceType: 'module',
      }
    }    
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended

]