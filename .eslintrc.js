module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/no-unused-vars': [1], // 解决ts函数定义参数传参问题
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    'object-curly-spacing': ['error', 'always'],
    'no-multi-spaces': 'error',
    '@typescript-eslint/no-invalid-this': ['off'],
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 1,
    // indent: [
    //   'error',
    //   2,
    //   {
    //     SwitchCase: 1,
    //   },
    // ],
    'react/jsx-indent': ['error', 2],
    'no-param-reassign': 0,
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    quotes: [1, 'single'], // 引号类型 `` "" ''
    'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
  },
};
