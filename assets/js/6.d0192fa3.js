(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" Faq")]),t._v(" "),n("h2",{attrs:{id:"why-is-my-css-not-compiled"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-is-my-css-not-compiled","aria-hidden":"true"}},[t._v("#")]),t._v(" Why is my CSS not compiled?")]),t._v(" "),n("p",[t._v("You need to import the CSS in your JavaScript entry point so the dependency chain can be started.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./index.css"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("https://github.com/factorial-io/factorial-frontend-stack/blob/master/example/src/index.js#L3")])]),t._v(" "),n("h2",{attrs:{id:"how-do-i-setup-css-js-linting-in-my-ide-editor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-setup-css-js-linting-in-my-ide-editor","aria-hidden":"true"}},[t._v("#")]),t._v(" How do I setup CSS/JS linting in my IDE/editor?")]),t._v(" "),n("h3",{attrs:{id:"add-a-neutrinorc-js-to-the-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-a-neutrinorc-js-to-the-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Add a "),n("code",[t._v(".neutrinorc.js")]),t._v(" to the project.")]),t._v(" "),n("pre",[n("code",[t._v("touch .neutrinorc.js\n")])]),t._v(" "),n("p",[t._v("Then add the following to "),n("code",[t._v(".neutrinorc.js")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@factorial/frontend-stack-core"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("You can ommit the "),n("code",[t._v("--use")]),t._v(" flag in npm scripts then.")]),t._v(" "),n("blockquote",[n("p",[t._v("https://neutrinojs.org/usage.html#using-multiple-presets")])]),t._v(" "),n("h3",{attrs:{id:"setup-modules-of-stylelintrc-and-eslintrc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setup-modules-of-stylelintrc-and-eslintrc","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup modules of "),n("code",[t._v("stylelintrc")]),t._v(" and "),n("code",[t._v("eslintrc")])]),t._v(" "),n("p",[t._v("You need to setup a "),n("code",[t._v("stylelintrc.js")]),t._v(" and "),n("code",[t._v("eslintrc.js")]),t._v(" in your project that uses the configuration provided from the neutrino instance.\nThat way linting through CLI and editor is synced and no config is duplicated.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Neutrino "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'neutrino'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specify middleware to Neutrino prior to calling eslintrc.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Even if using .neutrinorc.js, you must specify it when using")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the API")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Neutrino")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.neutrinorc.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslintrc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("https://neutrinojs.org/packages/eslint/#eslintrc-config")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .stylelintrc.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Neutrino "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'neutrino'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specify middleware to Neutrino prior to calling stylelintrc.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Even if using .neutrinorc.js, you must specify it when using")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the API")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Neutrino")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.neutrinorc.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylelintrc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("https://neutrinojs.org/packages/stylelint/#stylelintrc-config")])]),t._v(" "),n("h2",{attrs:{id:"how-do-i-change-the-entry-and-output-paths-for-my-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-change-the-entry-and-output-paths-for-my-project","aria-hidden":"true"}},[t._v("#")]),t._v(" How do I change the entry and output paths for my project?")]),t._v(" "),n("p",[t._v("You can ovveride the defaults path options in "),n("code",[t._v(".neutrinorc.js")]),t._v(".")]),t._v(" "),n("blockquote",[n("p",[t._v("https://neutrinojs.org/customization/#overriding-neutrino-options")])]),t._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source/build"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mains"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"how-can-i-setup-multiple-entry-points-in-my-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-setup-multiple-entry-points-in-my-project","aria-hidden":"true"}},[t._v("#")]),t._v(" How can I setup multiple entry points in my project?")]),t._v(" "),n("p",[t._v("You can set multiple entry points through the mains option in "),n("code",[t._v(".neutrinorc.js")]),t._v(".")]),t._v(" "),n("blockquote",[n("p",[t._v("https://neutrinojs.org/customization/#optionsmains")])]),t._v(" "),n("h3",{attrs:{id:"example-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@factorial/frontend-stack-core"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mains"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);