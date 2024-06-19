// module.exports = {
//     extends: ['@commitlint/config-conventional'],
//     // 校验规则
//     rules: {
//       'type-enum': [
//         2,
//         'always',
//         [
//           'feat',
//           'fix',
//           'docs',
//           'style',
//           'refactor',
//           'perf',
//           'test',
//           'chore',
//           'revert',
//           'build',
//         ],
//       ],
//       'type-case': [0],
//       'type-empty': [0],
//       'scope-empty': [0],
//       'scope-case': [0],
//       'subject-full-stop': [0, 'never'],
//       'subject-case': [0, 'never'],
//       'header-max-length': [0, 'always', 72],
//     },
//   }

module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
  },
};