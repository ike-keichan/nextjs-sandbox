module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    // CSSのプロパティをプロパティ順に並べる
    // 'order/properties-order': require('known-css-properties').all,
    // CSSのプロパティをアルファベット順に並べる
    'order/properties-alphabetical-order': true,
  },
};
