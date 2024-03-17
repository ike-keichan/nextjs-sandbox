module.exports = {
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    // 指定されたブラウザのサポート範囲に基づいて、CSSの使用がサポートされていないブラウザ機能を識別する
    'plugin/declaration-block-no-ignored-properties': true,
    // 特定のCSSプロパティが他のプロパティと組み合わせると効果が無視される場合を識別する
    'plugin/no-unsupported-browser-features': true,
  },
};
