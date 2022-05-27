/*
 * @Author: gezuxia
 * @Descripttion: 
 * @Date: 2022-05-27 16:01:35
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-27 17:52:21
 */
// 具体配置可以参考 https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 200,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true, // 单引号
  semi: false, // 未尾逗号
  vueIndentScriptAndStyle: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', // 未尾分号 all
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always', // avoid
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
}
