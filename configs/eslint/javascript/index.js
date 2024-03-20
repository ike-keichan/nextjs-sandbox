const { OFF, ERROR, WARN } = require('../const');

module.exports = {
  rules: {
    'max-depth': [WARN, 3],
    'max-nested-callbacks': [WARN, 3],
    'max-statements': [WARN, 15],
    'multiline-comment-style': OFF,
    'no-magic-numbers': [WARN, { ignore: [-1, 0, 1] }],
    'no-undefined': WARN,
    'no-unused-vars': OFF,
    'no-use-before-define': OFF,
    complexity: [ERROR, 10],
  },
  overrides: [
    {
      files: ['**/*.{test,stories}.{ts,tsx}'],
      rules: Object.fromEntries(
        [
          'complexity',
          'max-lines',
          'max-nested-callbacks',
          'max-statements',
          'no-console',
          'no-magic-numbers',
          'no-undefined',
        ].map((rule) => [rule, OFF]),
      ),
    },
  ],
};
