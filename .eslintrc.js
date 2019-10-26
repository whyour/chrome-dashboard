module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "semi": [2, 'never'],
    'no-console': 'off',
    'no-unused-vars': 'off'
  }
}
