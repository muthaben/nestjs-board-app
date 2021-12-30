/*
개발자들이 특정한 규칙을 가고 코드를 깔끔하게 짤 수 있게 도와주는 라이브러리
TypeScript를 쓰는 가이드라인 제시, 문법 오류 알림 등
*/

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

/*
@ .prettierrc
주로 코드의 형식(사용할 따옴표의 종류, indent 값 등)을 맞추는 데 사용
오류를 찾는 것이 아니라 코드 포맷터 역할
*/