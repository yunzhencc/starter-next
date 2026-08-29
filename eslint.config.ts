import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
    indent: 2,
    quotes: 'single',
  },
  react: true,
  nextjs: true,
  ignores: [
    'components/ui/',
  ],
});
