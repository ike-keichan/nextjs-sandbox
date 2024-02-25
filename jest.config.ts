import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/jest-globals'],
  testMatch: ['./src/**/*.test.ts(x)?$'],
  testPathIgnorePatterns: ['./node_modules/'],
  transform: {
    // ts,tsxファイルを@swc/jestでテスト
    '^.+\\.ts(x)?$': [
      '@swc/jest',
      {
        // テスト中のエラーなどをソースコードにマッピングし、エラーを見やすくする。（有効じゃないと内容がズレて表示されます）
        sourceMaps: true,
        // 出力するファイルをCommonJSとする
        module: {
          type: 'commonjs',
        },
        //
        jsc: {
          // パーサの設定
          parser: {
            // Typescriptとしてパースする
            syntax: 'typescript',
            // tsx記法を許可する
            tsx: true,
          },
          // コード変換の設定
          transform: {
            react: {
              // React17以降の新しいJSX変換に対応
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
