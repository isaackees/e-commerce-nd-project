module.exports = {
  root: true,
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
