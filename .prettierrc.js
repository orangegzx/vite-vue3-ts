/*
 * @Author: gezuxia
 * @Descripttion: 
 * @Date: 2022-05-27 16:01:35
 * @LastEditors: gezuxia
 * @LastEditTime: 2022-05-30 00:22:38
 */
// 具体配置可以参考 https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 200, // 超过最大值换行
  tabWidth: 2,
  useTabs: false, // 缩进不使用tab，使用空格
  singleQuote: true, // 使用单引号代替双引号
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  semi: false, // 句尾添加分号
  vueIndentScriptAndStyle: true,
  quoteProps: 'as-needed', // 对象的key是否用引号括起来,"as-needed" | "consistent" | "preserve"
  bracketSpacing: true, // 是否在对象的{}内部两侧加空格 true - { foo: bar } false - {foo: bar}.
  trailingComma: 'none', // 未尾分号 all
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  arrowParens: 'always', // avoid // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  insertPragma: false, // 当requirePragma参数为true时,此参数为true将向@format标记后面添加一个换行符
  requirePragma: false, // 若为true，文件顶部加了 /*** @prettier */或/*** @format */的文件才会被格式化
  proseWrap: 'never', // always | never | preserve。当 Markdown 文本超过printWidth时,是否换行,always-换行 never-不换行 preserve保持原样
  htmlWhitespaceSensitivity: 'strict', // 是否显示HTML文件中的空格。  'css'： 尊重CSS display属性的设置。 'strict'： 空格被认为是敏感的。 'ignore'： 空格被认为是不敏感的
  endOfLine: 'lf', // 结尾是 lf-\n cr-\r lfcr-\n\r  auto-保持现有的行尾设置
}
