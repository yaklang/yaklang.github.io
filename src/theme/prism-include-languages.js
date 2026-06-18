/**
 * 自定义 prism-include-languages（swizzle 覆盖默认实现）。
 * 在原有逻辑基础上额外注册 Yaklang(.yak) 语言的语法高亮。
 *
 * 关键字 / 类型 / 操作符 取自 yakit 的 Monaco 语言定义
 * (yakit: utils/monacoSpec/yakEditor.ts)，配色在 src/css/custom.css 中
 * 参照 yakit 主题(utils/monacoSpec/theme.ts)进行映射。
 *
 * 关键词: prism yak language, yaklang syntax highlight, prism-react-renderer
 */
import siteConfig from "@generated/docusaurus.config";

// 基于 go 语法扩展出 yak：复用 Go 的数字/运算符等规则，
// 覆盖字符串(支持 f-string / x-string / 反引号原始串)、关键字与内置类型。
function registerYakLanguage(Prism) {
  if (!Prism || Prism.languages.yak) {
    return;
  }
  const base = Prism.languages.go ? "go" : "clike";

  Prism.languages.yak = Prism.languages.extend(base, {
    comment: [
      {pattern: /\/\*[\s\S]*?\*\//, greedy: true},
      {pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true},
    ],
    // f"..." / x"..." 前缀串、反引号原始串、单双引号串
    string: [
      {pattern: /[fx]?`[^`]*`/, greedy: true, alias: "template-string"},
      {pattern: /[fx]?"(?:\\.|[^"\\\r\n])*"/, greedy: true},
      {pattern: /[fx]?'(?:\\.|[^'\\\r\n])*'/, greedy: true},
    ],
    keyword:
      /\b(?:break|case|catch|chan|class|continue|def|default|defer|elif|else|finally|fn|for|func|go|if|import|in|include|map|range|return|select|switch|try|type|var)\b/,
    boolean: /\b(?:true|false)\b/,
    // nil / undefined 等空值常量
    constant: /\b(?:nil|undefined|null)\b/,
    // 内置基础类型，对应 yakit 中的 basic.type(品红色)
    builtin:
      /\b(?:uint|uint8|uint16|uint32|uint64|byte|int|int8|int16|int32|int64|float|float32|float64|double|string|bool|omap|any|error)\b/,
    // 全局内置函数(对应 yakit 的 globals, 橙色)。即使不带括号(如语句式 assert)也高亮。
    "function-builtin": {
      pattern:
        /\b(?:print|printf|println|sprint|sprintf|sprintln|dump|sdump|desc|descStr|assert|assertf|assertTrue|assertEmpty|isEmpty|panic|panicf|die|fail|recover|sleep|wait|randn|randstr|randbytes|uuid|timestamp|nanotimestamp|now|date|datetime|timestampToDatetime|timestampToTime|datetimeToTimestamp|parseTime|typeof|callable|max|min|loglevel|logquiet|logdiscard|logrecover|len|cap|append|make|copy|delete|get|set|chr|ord|atoi|parseInt|parseFloat|parseBool|parseBoolean|parseStr|parseString|input|yakfmt)\b/,
      alias: "function",
    },
    // 函数调用位置：标识符后紧跟左括号
    function: /\b[a-zA-Z_]\w*(?=\s*\()/,
    operator:
      /[*\/%^!=]=?|\+[+=]?|-[-=]?|&[&=]?|\|[|=]?|<(?:[=<]|-)?|>[=>]?|:=|\.\.\.|[~?]/,
  });
}

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages} = prism;
  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;
  (additionalLanguages ?? []).forEach((lang) => {
    if (lang === "php") {
      // eslint-disable-next-line global-require
      require("prismjs/components/prism-markup-templating.js");
    }
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });
  registerYakLanguage(PrismObject);
  delete globalThis.Prism;
  if (typeof PrismBefore !== "undefined") {
    globalThis.Prism = PrismObject;
  }
}
