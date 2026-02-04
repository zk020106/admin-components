import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: false,
  rules: {
    'vue/html-self-closing': 'off',
  },
});
