import{_ as i,r,o as d,c as h,a as t,e as o,w as a,F as p,d as n,b as e}from"./app.0847e722.js";const u={},x=n('<h1 id="\u670D\u52A1-service" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1-service" aria-hidden="true">#</a> \u670D\u52A1 (Service)</h1><h2 id="\u5185\u7F6E\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u670D\u52A1" aria-hidden="true">#</a> \u5185\u7F6E\u670D\u52A1</h2><p>\u4E0B\u9762\u7684\u5C5E\u6027\u4E3A\u4E86\u8BBF\u95EE\u65B9\u4FBF\u800C\u7ED1\u5B9A\uFF0C\u4E25\u683C\u4E0A\u5B83\u4EEC\u5BF9\u4E00\u4E2A App \u5B9E\u4F8B\u4E0B\u7684\u6240\u6709\u4E0A\u4E0B\u6587\u90FD\u662F\u76F8\u540C\u7684\u3002</p><h3 id="ctx-bots" tabindex="-1"><a class="header-anchor" href="#ctx-bots" aria-hidden="true">#</a> ctx.bots</h3>',4),_=e("\u7C7B\u578B: "),b=t("code",null,"Bot[]",-1),f=t("p",null,"\u4E00\u4E2A\u4FDD\u5B58\u4E86\u5F53\u524D\u5168\u90E8 Bot \u7684\u6570\u7EC4\u3002",-1),F=t("h3",{id:"ctx-database",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ctx-database","aria-hidden":"true"},"#"),e(" ctx.database")],-1),m=t("ul",null,[t("li",null,[e("\u7C7B\u578B: "),t("code",null,"Database")])],-1),g=e("\u5F53\u524D\u5E94\u7528\u7684 "),y=e("Database"),D=e(" \u5BF9\u8C61\u3002"),E=n('<h3 id="ctx-i18n" tabindex="-1"><a class="header-anchor" href="#ctx-i18n" aria-hidden="true">#</a> ctx.i18n</h3><h3 id="ctx-model" tabindex="-1"><a class="header-anchor" href="#ctx-model" aria-hidden="true">#</a> ctx.model</h3><h3 id="ctx-router" tabindex="-1"><a class="header-anchor" href="#ctx-router" aria-hidden="true">#</a> ctx.router</h3><ul><li>\u7C7B\u578B: <code>KoaRouter</code></li></ul>',4),v=e("\u5982\u679C\u4F60\u914D\u7F6E\u4E86 "),R=e("port"),B=e(" \u9009\u9879\uFF0C\u5219\u8FD9\u4E2A\u5C5E\u6027\u5C06\u4F5C\u4E3A\u4E00\u4E2A "),C={href:"https://github.com/koajs/router/blob/master/API.md",target:"_blank",rel:"noopener noreferrer"},k=e("KoaRouter"),S=e(" \u5B9E\u4F8B\u3002\u4F60\u53EF\u4EE5\u5728\u4E0A\u9762\u81EA\u5B9A\u4E49\u65B0\u7684\u8DEF\u7531\uFF1A"),w=t("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[t("div",{class:"code-container"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},[t("data-lsp",{lsp:"const ctx: Context"},"ctx"),e("."),t("data-lsp",{lsp:"(property) Context.router: Router"},"router"),e(".")]),t("span",{style:{color:"#A6E22E"}},[t("data-lsp",{lsp:"(method) Router<DefaultState, DefaultContext>.get<{}, {}>(path: string | RegExp | (string | RegExp)[], ...middleware: Router<StateT = DefaultState, ContextT = DefaultContext>.Middleware<DefaultState, DefaultContext>[]): Router<...> (+1 overload)"},"get")]),t("span",{style:{color:"#F8F8F2"}},"("),t("span",{style:{color:"#E6DB74"}},"'/path'"),t("span",{style:{color:"#F8F8F2"}},", ("),t("span",{style:{color:"#FD971F"}},[t("data-lsp",{lsp:"(parameter) ctx: ParameterizedContext<DefaultState, DefaultContext & Router.RouterParamContext<DefaultState, DefaultContext>, any>"},"ctx")]),t("span",{style:{color:"#F8F8F2"}},", "),t("span",{style:{color:"#FD971F"}},[t("data-lsp",{lsp:"(parameter) next: Next"},"next")]),t("span",{style:{color:"#F8F8F2"}},") "),t("span",{style:{color:"#66D9EF"}},"=>"),t("span",{style:{color:"#F8F8F2"}}," {")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"  "),t("span",{style:{color:"#88846F"}},"// handle request")]),e(`
`),t("span",{class:"line"},[t("span",{style:{color:"#F8F8F2"}},"})")]),e(`
`)])])],-1),A=n('<h2 id="\u670D\u52A1-botlist" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1-botlist" aria-hidden="true">#</a> \u670D\u52A1\uFF1ABotList</h2><p>\u9664\u4E86\u53EF\u4EE5\u4F7F\u7528 <code>ctx.bot.forEach()</code> \u8FD9\u6837\u7684\u65B9\u6CD5\u5916\uFF0C\u6211\u4EEC\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u989D\u5916\u7684\u63A5\u53E3\uFF1A</p><h4 id="ctx-bots-get-sid" tabindex="-1"><a class="header-anchor" href="#ctx-bots-get-sid" aria-hidden="true">#</a> ctx.bots.get(sid)</h4><ul><li><strong>sid:</strong> <code>string</code> \u673A\u5668\u4EBA\u7684 sid</li><li>\u8FD4\u56DE\u503C: <code>Bot</code> \u673A\u5668\u4EBA\u5B9E\u4F8B</li></ul><p>\u4F7F\u7528 sid \u83B7\u53D6\u673A\u5668\u4EBA\u5B9E\u4F8B\u3002</p><h4 id="ctx-bots-remove-id" tabindex="-1"><a class="header-anchor" href="#ctx-bots-remove-id" aria-hidden="true">#</a> ctx.bots.remove(id)</h4><ul><li><strong>sid:</strong> <code>string</code> \u673A\u5668\u4EBA\u7684 id</li><li>\u8FD4\u56DE\u503C: <code>boolean</code> \u673A\u5668\u4EBA\u5B9E\u4F8B\u662F\u5426\u5B58\u5728</li></ul><p>\u79FB\u9664\u4E00\u4E2A\u673A\u5668\u4EBA\u5B9E\u4F8B\u3002</p><h4 id="ctx-bots-create-platform-options-constructor" tabindex="-1"><a class="header-anchor" href="#ctx-bots-create-platform-options-constructor" aria-hidden="true">#</a> ctx.bots.create(platform, options, constructor?)</h4><ul><li><strong>platform:</strong> <code>string</code> \u9002\u914D\u5668\u540D</li><li><strong>options:</strong> <code>object</code> \u914D\u7F6E\u9879</li><li><strong>constructor:</strong> <code>Function</code> \u6784\u9020\u51FD\u6570</li></ul><p>\u65B0\u589E\u4E00\u4E2A\u673A\u5668\u4EBA\u5B9E\u4F8B\u3002</p><h2 id="\u670D\u52A1-registry" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1-registry" aria-hidden="true">#</a> \u670D\u52A1\uFF1ARegistry</h2>',12);function L(N,V){const s=r("RouterLink"),c=r("ExternalLinkIcon"),l=r("panel-view");return d(),h(p,null,[x,t("ul",null,[t("li",null,[_,o(s,{to:"/api/core/bot.html"},{default:a(()=>[b]),_:1})])]),f,F,m,t("p",null,[g,o(s,{to:"/api/core/database.html#%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AF%B9%E8%B1%A1"},{default:a(()=>[y]),_:1}),D]),E,t("p",null,[v,o(s,{to:"/api/core/app.html#option-port"},{default:a(()=>[R]),_:1}),B,t("a",C,[k,o(c)]),S]),o(l,{class:"code",title:"",style:{}},{default:a(()=>[w]),_:1}),A],64)}var P=i(u,[["render",L],["__file","service.html.vue"]]);export{P as default};
