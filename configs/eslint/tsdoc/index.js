const { CONFIG } = require('../const');

module.exports = {
  plugins: ['eslint-plugin-tsdoc'],
  rules: {
    // TSDocの構文エラーがないか判別
    'tsdoc/syntax': CONFIG.WARN,
  },
};
