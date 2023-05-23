const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
