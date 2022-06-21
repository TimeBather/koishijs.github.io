import{_ as d,r as c,o as i,c as r,a as e,e as s,w as l,F as p,d as n,b as o}from"./app.0847e722.js";const h={},F=n('<h1 id="\u6307\u4EE4-command" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4-command" aria-hidden="true">#</a> \u6307\u4EE4 (Command)</h1><p>\u6307\u4EE4\u7CFB\u7EDF\u662F Koishi \u7684\u6838\u5FC3\u529F\u80FD\u4E4B\u4E00\u3002\u901A\u8FC7 <code>ctx.command()</code> \u65B9\u6CD5\u83B7\u5F97\u7684\u662F\u6307\u4EE4\u7684\u5B9E\u4F8B\uFF0C\u5B83\u542B\u6709\u4E0B\u9762\u7684\u65B9\u6CD5\uFF1A</p><h2 id="argv-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#argv-\u5BF9\u8C61" aria-hidden="true">#</a> Argv \u5BF9\u8C61</h2><p>Argv \u5BF9\u8C61\u4F1A\u4F5C\u4E3A <code>cmd.action()</code>, <code>cmd.userFields()</code> \u7B49\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002\u5B83\u5177\u6709\u4EE5\u4E0B\u7684\u5C5E\u6027\uFF1A</p>',4),_=n("<li><strong>args:</strong> <code>any[]</code> \u53C2\u6570\u5217\u8868</li><li><strong>options:</strong> <code>{}</code> \u9009\u9879\u5217\u8868</li><li><strong>next:</strong> <code>Next</code> \u4E2D\u95F4\u4EF6\u7684 next \u56DE\u8C03\u51FD\u6570</li>",3),u=e("strong",null,"session:",-1),m=o(),g=e("code",null,"Session",-1),y=o(" \u6240\u5728\u7684\u4F1A\u8BDD\u5BF9\u8C61"),E=e("h2",{id:"\u5B9E\u4F8B\u65B9\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B9E\u4F8B\u65B9\u6CD5","aria-hidden":"true"},"#"),o(" \u5B9E\u4F8B\u65B9\u6CD5")],-1),f=e("h3",{id:"cmd-option-name-desc-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cmd-option-name-desc-config","aria-hidden":"true"},"#"),o(" cmd.option(name, desc?, config?)")],-1),A=e("li",null,[e("strong",null,"name:"),o(),e("code",null,"string"),o(" \u9009\u9879\u7684\u540D\u5B57")],-1),x=e("li",null,[e("strong",null,"desc:"),o(),e("code",null,"string"),o(" \u9009\u9879\u7684\u63CF\u8FF0")],-1),v=e("strong",null,"config:",-1),b=o(),B=e("code",null,"OptionConfig",-1),D=e("strong",null,"config.fallback:",-1),T=o(),C=e("code",null,"any",-1),w=o(" \u9009\u9879\u7684"),k=o("\u9ED8\u8BA4\u503C"),K=e("strong",null,"config.value:",-1),P=o(),R=e("code",null,"any",-1),S=o(" \u9009\u9879\u7684"),N=o("\u91CD\u8F7D\u503C"),V=e("strong",null,"config.type:",-1),I=o(),O=e("code",null,"DomainType",-1),z=o(" \u9009\u9879\u7684"),L=o("\u7C7B\u578B\u5B9A\u4E49"),U=e("strong",null,"config.hidden:",-1),j=o(),q=e("code",null,"boolean",-1),G=o(" \u662F\u5426"),H=o("\u9690\u85CF\u9009\u9879"),J=e("strong",null,"config.notUsage:",-1),M=o(),Q=e("code",null,"boolean",-1),W=o(" \u662F\u5426"),X=o("\u8BA1\u5165\u8C03\u7528"),Y=e("strong",null,"config.authority:",-1),Z=o(),$=e("code",null,"number",-1),ee=o(" \u9009\u9879\u7684"),oe=o("\u6743\u9650\u7B49\u7EA7"),se=e("li",null,[o("\u8FD4\u56DE\u503C: "),e("code",null,"this")],-1),le=e("p",null,"\u4E3A\u6307\u4EE4\u6DFB\u52A0\u4E00\u4E2A\u9009\u9879\u3002",-1),te=e("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[e("div",{class:"code-container"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type DomainType = string | RegExp | ((source: string) => any)"},"DomainType")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"string"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface RegExp"},"RegExp")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," (("),e("span",{style:{color:"#FD971F"}},[e("data-lsp",{lsp:"(parameter) source: string"},"source")]),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"string"),e("span",{style:{color:"#F8F8F2"}},") "),e("span",{style:{color:"#66D9EF"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"any"),e("span",{style:{color:"#F8F8F2"}},")")]),o(`
`)])])],-1),ne=n('<h3 id="cmd-removeoption-name" tabindex="-1"><a class="header-anchor" href="#cmd-removeoption-name" aria-hidden="true">#</a> cmd.removeOption(name)</h3><ul><li><strong>name:</strong> <code>string</code> \u6307\u4EE4\u7684\u540D\u79F0</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u5220\u9664\u4E00\u4E2A\u9009\u9879\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u4E3A\u4E00\u4E2A\u9009\u9879\u6CE8\u518C\u4E86\u591A\u4E2A\u522B\u540D\uFF0C\u5219\u5220\u9664\u4EFB\u4F55\u4E00\u4E2A\u522B\u540D\u90FD\u76F8\u5F53\u4E8E\u5220\u9664\u6574\u4E2A\u9009\u9879\u3002</p><h3 id="cmd-usage-text" tabindex="-1"><a class="header-anchor" href="#cmd-usage-text" aria-hidden="true">#</a> cmd.usage(text)</h3><ul><li><strong>text:</strong> <code>string</code> \u4F7F\u7528\u65B9\u6CD5\u8BF4\u660E</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u4E3A\u6307\u4EE4\u6DFB\u52A0\u4F7F\u7528\u65B9\u6CD5\u3002\u591A\u6B21\u8C03\u7528\u6B64\u65B9\u6CD5\u53EA\u4F1A\u4FDD\u7559\u6700\u540E\u4E00\u6B21\u7684\u5B9A\u4E49\u3002</p><h3 id="cmd-example-example" tabindex="-1"><a class="header-anchor" href="#cmd-example-example" aria-hidden="true">#</a> cmd.example(example)</h3><ul><li><strong>example:</strong> <code>text</code> \u4F7F\u7528\u793A\u4F8B</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u4E3A\u6307\u4EE4\u6DFB\u52A0\u4F7F\u7528\u793A\u4F8B\u3002\u591A\u6B21\u8C03\u7528\u6B64\u65B9\u6CD5\u4F1A\u4E00\u5E76\u4FDD\u7559\u5E76\u663E\u793A\u5728\u5E2E\u52A9\u7684\u6700\u540E\u9762\u3002</p><h3 id="cmd-action-action-prepend" tabindex="-1"><a class="header-anchor" href="#cmd-action-action-prepend" aria-hidden="true">#</a> cmd.action(action, prepend?)</h3><ul><li><strong>action:</strong> <code>CommandAction</code> \u6267\u884C\u51FD\u6570</li><li><strong>prepend:</strong> <code>boolean</code> \u662F\u5426\u524D\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u4E3A\u6307\u4EE4\u6DFB\u52A0\u6267\u884C\u51FD\u6570\u3002</p>',12),ae=e("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[e("div",{class:"code-container"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type Awaitable<T> = [T] extends [Promise<unknown>] ? T : T | Promise<T>"},"Awaitable")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type Awaitable<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type Awaitable<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"] "),e("span",{style:{color:"#F92672"}},"extends"),e("span",{style:{color:"#F8F8F2"}}," ["),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#66D9EF"}},"unknown"),e("span",{style:{color:"#F8F8F2"}},">] "),e("span",{style:{color:"#F92672"}},"?"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type Awaitable<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type Awaitable<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type Awaitable<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},">")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type CommandAction = (argv: Argv, ...args: any[]) => Awaitable<string | void>"},"CommandAction")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," ("),e("span",{style:{color:"#FD971F"}},[e("data-lsp",{lsp:"(parameter) argv: Argv<never, never, any[], {}>"},"argv")]),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type Argv = Argv<never, never, any[], {}>"},"Argv")]),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#F92672"}},"..."),e("span",{style:{color:"#FD971F"}},[e("data-lsp",{lsp:"(parameter) args: any[]"},"args")]),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"any"),e("span",{style:{color:"#F8F8F2"}},"[]) "),e("span",{style:{color:"#66D9EF"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type Awaitable<T> = [T] extends [Promise<unknown>] ? T : T | Promise<T>"},"Awaitable")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#66D9EF"}},"string"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"void"),e("span",{style:{color:"#F8F8F2"}},">")]),o(`
`)])])],-1),ce=n('<h3 id="cmd-before-action-append" tabindex="-1"><a class="header-anchor" href="#cmd-before-action-append" aria-hidden="true">#</a> cmd.before(action, append?)</h3><ul><li><strong>action:</strong> <code>CommandAction</code> \u6267\u884C\u51FD\u6570</li><li><strong>append:</strong> <code>boolean</code> \u662F\u5426\u540E\u7F6E</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u4E3A\u6307\u4EE4\u6DFB\u52A0\u68C0\u6D4B\u51FD\u6570\u3002</p><h3 id="cmd-userfields-fields" tabindex="-1"><a class="header-anchor" href="#cmd-userfields-fields" aria-hidden="true">#</a> cmd.userFields(fields)</h3><ul><li><strong>fields:</strong> <code>FieldCollector&lt;UserField&gt;</code> \u8981\u8BF7\u6C42\u7684\u7528\u6237\u5B57\u6BB5</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul>',5),de=o("\u5982\u679C\u6307\u4EE4\u9700\u8981\u7528\u5230\u7528\u6237\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u63D0\u524D\u58F0\u660E\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u5408\u5E76\u591A\u6B21\u8BF7\u6C42\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002 \u53C2\u89C1"),ie=o("\u6309\u9700\u52A0\u8F7D"),re=o("\u7AE0\u8282\u3002"),pe=e("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[e("div",{class:"code-container"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type FieldCollector<K extends string> = Iterable<K> | ((argv: Argv, fields: Set<K>) => void)"},"FieldCollector")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) K in type FieldCollector<K extends string>"},"K")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"extends"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"string"),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"=")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface Iterable<T>"},"Iterable")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) K in type FieldCollector<K extends string>"},"K")]),e("span",{style:{color:"#F8F8F2"}},">")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," (("),e("span",{style:{color:"#FD971F"}},[e("data-lsp",{lsp:"(parameter) argv: Argv<never, never, any[], {}>"},"argv")]),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type Argv = Argv<never, never, any[], {}>"},"Argv")]),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#FD971F"}},[e("data-lsp",{lsp:"(parameter) fields: Set<K>"},"fields")]),e("span",{style:{color:"#F92672"}},":"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface Set<T>"},"Set")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) K in type FieldCollector<K extends string>"},"K")]),e("span",{style:{color:"#F8F8F2"}},">) "),e("span",{style:{color:"#66D9EF"}},"=>"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"void"),e("span",{style:{color:"#F8F8F2"}},")")]),o(`
`)])])],-1),he=e("h3",{id:"cmd-channelfields-fields",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cmd-channelfields-fields","aria-hidden":"true"},"#"),o(" cmd.channelFields(fields)")],-1),Fe=e("ul",null,[e("li",null,[e("strong",null,"fields:"),o(),e("code",null,"FieldCollector<ChannelField>"),o(" \u8981\u8BF7\u6C42\u7684\u9891\u9053\u5B57\u6BB5")]),e("li",null,[o("\u8FD4\u56DE\u503C: "),e("code",null,"this")])],-1),_e=o("\u5982\u679C\u6307\u4EE4\u9700\u8981\u7528\u5230\u9891\u9053\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u63D0\u524D\u58F0\u660E\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u5408\u5E76\u591A\u6B21\u8BF7\u6C42\uFF0C\u4ECE\u800C\u63D0\u9AD8\u6027\u80FD\u3002 \u53C2\u89C1"),ue=o("\u6309\u9700\u52A0\u8F7D"),me=o("\u7AE0\u8282\u3002"),ge=n('<h3 id="cmd-alias-names" tabindex="-1"><a class="header-anchor" href="#cmd-alias-names" aria-hidden="true">#</a> cmd.alias(...names)</h3><ul><li><strong>names:</strong> <code>string[]</code> \u8981\u8BBE\u7F6E\u7684\u522B\u540D</li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u8BBE\u7F6E\u6307\u4EE4\u522B\u540D\u3002</p><h3 id="cmd-shortcut-name-config" tabindex="-1"><a class="header-anchor" href="#cmd-shortcut-name-config" aria-hidden="true">#</a> cmd.shortcut(name, config?)</h3><ul><li><strong>name:</strong> <code>string | RegExp</code> \u5FEB\u6377\u65B9\u5F0F\u540D</li><li><strong>config:</strong> <code>ShortcutConfig</code><ul><li><strong>config.prefix:</strong> <code>boolean</code> \u8C03\u7528\u65F6\u8981\u6C42\u4FDD\u7559\u524D\u7F00</li><li><strong>config.fuzzy:</strong> <code>boolean</code> \u5141\u8BB8\u5728\u5FEB\u6377\u65B9\u5F0F\u540E\u5E26\u53C2\u6570</li><li><strong>config.greedy:</strong> <code>boolean</code> \u5C06\u6240\u6709\u540E\u9762\u7684\u5185\u5BB9\u89E3\u6790\u6210\u4E00\u4E2A\u53C2\u6570</li><li><strong>config.args:</strong> <code>any[]</code> \u8981\u5E26\u7684\u53C2\u6570\u5217\u8868\uFF0C\u5C06\u4E0E\u4F20\u5165\u7684\u53C2\u6570\u5408\u5E76</li><li><strong>config.options:</strong> <code>Record&lt;string, any&gt;</code> \u8981\u5E26\u7684\u9009\u9879\u5217\u8868\uFF0C\u5C06\u4E0E\u4F20\u5165\u7684\u9009\u9879\u5408\u5E76</li></ul></li><li>\u8FD4\u56DE\u503C: <code>this</code></li></ul><p>\u8BBE\u7F6E\u5FEB\u6377\u65B9\u5F0F\u3002</p><h3 id="cmd-subcommand-name-desc-config" tabindex="-1"><a class="header-anchor" href="#cmd-subcommand-name-desc-config" aria-hidden="true">#</a> cmd.subcommand(name, desc?, config?)</h3>',7),ye=e("li",null,[e("strong",null,"name:"),o(),e("code",null,"string"),o(" \u6307\u4EE4\u540D\u4EE5\u53CA\u53EF\u80FD\u7684\u53C2\u6570")],-1),Ee=e("li",null,[e("strong",null,"desc:"),o(),e("code",null,"string"),o(" \u6307\u4EE4\u7684\u63CF\u8FF0")],-1),fe=e("strong",null,"config:",-1),Ae=o(),xe=e("code",null,"CommandConfig",-1),ve=o(" \u6307\u4EE4\u7684\u914D\u7F6E"),be=e("li",null,[o("\u8FD4\u56DE\u503C\uFF1A"),e("code",null,"Command"),o(" \u6CE8\u518C\u6216\u4FEE\u6539\u7684\u6307\u4EE4")],-1),Be=o("\u6CE8\u518C\u6216\u4FEE\u6539\u5B50\u6307\u4EE4\u3002\u5B50\u6307\u4EE4\u4F1A\u7EE7\u627F\u5F53\u671F\u6307\u4EE4\u7684\u4E0A\u4E0B\u6587\u3002\u53C2\u89C1"),De=o("\u6307\u4EE4\u7684\u591A\u7EA7\u7ED3\u6784"),Te=o("\u7AE0\u8282\u3002"),Ce=n('<h3 id="cmd-parse-input" tabindex="-1"><a class="header-anchor" href="#cmd-parse-input" aria-hidden="true">#</a> cmd.parse(input)</h3><ul><li><strong>input:</strong> <code>Argv</code> \u4EE4\u724C\u5316\u7684\u8F93\u5165\uFF0C\u901A\u5E38\u662F <code>Argv.parse()</code> \u7684\u8FD4\u56DE\u503C</li><li>\u8FD4\u56DE\u503C: <code>Argv</code> \u89E3\u6790\u7ED3\u679C\uFF0C\u5305\u542B\u4E86 <code>args</code> \u548C <code>options</code> \u7B49\u5C5E\u6027</li></ul><p>\u89E3\u6790\u4E00\u6BB5\u6307\u4EE4\u8C03\u7528\u6587\u672C\u3002</p><h3 id="cmd-execute-argv-next" tabindex="-1"><a class="header-anchor" href="#cmd-execute-argv-next" aria-hidden="true">#</a> cmd.execute(argv, next?)</h3>',4),we=e("strong",null,"argv:",-1),ke=o(),Ke=e("code",null,"Argv",-1),Pe=o(" \u6267\u884C\u914D\u7F6E "),Re=e("li",null,[e("strong",null,"argv.args:"),o(),e("code",null,"any[]"),o(" \u6307\u4EE4\u7684\u53C2\u6570\u5217\u8868")],-1),Se=e("li",null,[e("strong",null,"argv.options:"),o(),e("code",null,"Record<string, any>"),o(" \u6307\u4EE4\u7684\u9009\u9879")],-1),Ne=e("strong",null,"argv.session:",-1),Ve=o(),Ie=e("code",null,"Session",-1),Oe=o(" \u5F53\u524D\u7684\u4F1A\u8BDD\u5BF9\u8C61"),ze=e("strong",null,"next:",-1),Le=o(),Ue=e("code",null,"Next",-1),je=o(" \u6240\u5904\u7684\u4E2D\u95F4\u4EF6\u7684 "),qe=e("code",null,"next",-1),Ge=o(" \u56DE\u8C03\u51FD\u6570"),He=e("li",null,[o("\u8FD4\u56DE\u503C: "),e("code",null,"Promise<string>"),o(" \u6267\u884C\u51FD\u6570\u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u53EF\u7528\u4E8E\u6307\u4EE4\u63D2\u503C")],-1),Je=n('<p>\u6267\u884C\u5F53\u524D\u6307\u4EE4\u3002</p><h3 id="cmd-dispose" tabindex="-1"><a class="header-anchor" href="#cmd-dispose" aria-hidden="true">#</a> cmd.dispose()</h3><ul><li>\u8FD4\u56DE\u503C: <code>void</code></li></ul><p>\u79FB\u9664\u5F53\u524D\u6307\u4EE4\u53CA\u5176\u6240\u6709\u5B50\u6307\u4EE4\u3002</p><h2 id="\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5</h2><p>\u8FD9\u91CC\u5305\u542B\u4E86\u4E0E Command \u7C7B\u76F8\u5173\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</p><h3 id="command-defaultconfig" tabindex="-1"><a class="header-anchor" href="#command-defaultconfig" aria-hidden="true">#</a> Command.defaultConfig</h3><p>\u9ED8\u8BA4\u7684\u6307\u4EE4\u914D\u7F6E\u3002</p><h3 id="command-defaultoptionconfig" tabindex="-1"><a class="header-anchor" href="#command-defaultoptionconfig" aria-hidden="true">#</a> Command.defaultOptionConfig</h3><p>\u9ED8\u8BA4\u7684\u9009\u9879\u914D\u7F6E\u3002</p>',10);function Me(Qe,We){const t=c("RouterLink"),a=c("panel-view");return i(),r(p,null,[F,e("ul",null,[_,e("li",null,[u,m,s(t,{to:"/api/core/session.html"},{default:l(()=>[g]),_:1}),y])]),E,f,e("ul",null,[A,x,e("li",null,[v,b,B,e("ul",null,[e("li",null,[D,T,C,w,s(t,{to:"/guide/command.html#%E9%80%89%E9%A1%B9%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC"},{default:l(()=>[k]),_:1})]),e("li",null,[K,P,R,S,s(t,{to:"/guide/command.html#%E9%80%89%E9%A1%B9%E7%9A%84%E9%87%8D%E8%BD%BD"},{default:l(()=>[N]),_:1})]),e("li",null,[V,I,O,z,s(t,{to:"/guide/command.html#%E9%80%89%E9%A1%B9%E7%9A%84%E4%B8%B4%E6%97%B6%E7%B1%BB%E5%9E%8B"},{default:l(()=>[L]),_:1})]),e("li",null,[U,j,q,G,s(t,{to:"/guide/help.html#%E9%9A%90%E8%97%8F%E6%8C%87%E4%BB%A4%E5%92%8C%E9%80%89%E9%A1%B9"},{default:l(()=>[H]),_:1})]),e("li",null,[J,M,Q,W,s(t,{to:"/guide/manage.html#%E6%8C%87%E4%BB%A4%E8%B0%83%E7%94%A8%E7%AE%A1%E7%90%86"},{default:l(()=>[X]),_:1})]),e("li",null,[Y,Z,$,ee,s(t,{to:"/guide/manage.html#%E8%AE%BE%E7%BD%AE%E8%B0%83%E7%94%A8%E6%9D%83%E9%99%90"},{default:l(()=>[oe]),_:1})])])]),se]),le,s(a,{class:"code",title:"",style:{}},{default:l(()=>[te]),_:1}),ne,s(a,{class:"code",title:"",style:{}},{default:l(()=>[ae]),_:1}),ce,e("p",null,[de,s(t,{to:"/guide/manage.html#%E5%A3%B0%E6%98%8E%E6%89%80%E9%9C%80%E5%AD%97%E6%AE%B5"},{default:l(()=>[ie]),_:1}),re]),s(a,{class:"code",title:"",style:{}},{default:l(()=>[pe]),_:1}),he,Fe,e("p",null,[_e,s(t,{to:"/guide/manage.html#%E5%A3%B0%E6%98%8E%E6%89%80%E9%9C%80%E5%AD%97%E6%AE%B5"},{default:l(()=>[ue]),_:1}),me]),ge,e("ul",null,[ye,Ee,e("li",null,[fe,Ae,s(t,{to:"/api/core/context.html#ctx-command"},{default:l(()=>[xe]),_:1}),ve]),be]),e("p",null,[Be,s(t,{to:"/guide/help.html#%E6%8C%87%E4%BB%A4%E7%9A%84%E5%A4%9A%E7%BA%A7%E7%BB%93%E6%9E%84"},{default:l(()=>[De]),_:1}),Te]),Ce,e("ul",null,[e("li",null,[we,ke,Ke,Pe,e("ul",null,[Re,Se,e("li",null,[Ne,Ve,s(t,{to:"/api/core/session.html"},{default:l(()=>[Ie]),_:1}),Oe])])]),e("li",null,[ze,Le,s(t,{to:"/guide/message.html#%E4%BD%BF%E7%94%A8%E4%B8%AD%E9%97%B4%E4%BB%B6"},{default:l(()=>[Ue]),_:1}),je,qe,Ge]),He]),Je],64)}var Ye=d(h,[["render",Me],["__file","command.html.vue"]]);export{Ye as default};
