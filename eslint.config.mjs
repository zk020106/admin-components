import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    html: true,
    json: true,
  },
  rules: {
    'node/prefer-global/process': 'off',
  },
})
