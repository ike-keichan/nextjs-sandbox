const { CONFIG } = require('../const');

module.exports = {
  plugins: ['strict-dependencies'],
  rules: {
    // 特定のファイルのimport先を指定、誤ったimportがないか判別
    'strict-dependencies/strict-dependencies': [CONFIG.ERROR, []],
  },
};
