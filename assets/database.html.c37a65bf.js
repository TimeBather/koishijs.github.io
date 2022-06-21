import{_ as t,r as p,o as n,c,e as l,w as r,F as y,d as o,a as e,b as s}from"./app.0847e722.js";const F={},d=o('<h1 id="\u6570\u636E\u5E93\u64CD\u4F5C-database" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u64CD\u4F5C-database" aria-hidden="true">#</a> \u6570\u636E\u5E93\u64CD\u4F5C (Database)</h1><p>\u4E00\u4E2A Database \u5BF9\u8C61\u4EE3\u7406\u4E86 Koishi \u4E0A\u4E0B\u6587\u7ED1\u5B9A\u7684\u5E94\u7528\u5B9E\u4F8B\u6709\u5173\u7684\u6240\u6709\u6570\u636E\u5E93\u8BBF\u95EE\u3002\u540C\u65F6\u5B83\u5177\u6709\u6CE8\u5165\u7279\u6027\uFF0C\u4EFB\u4F55\u63D2\u4EF6\u90FD\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u6570\u636E\u5E93\u4E0A\u7684\u65B9\u6CD5\u3002\u672C\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u6570\u636E\u5E93\u7684\u5B98\u65B9\u63A5\u53E3\u3002\u6CE8\u610F\uFF1A<strong>\u5B83\u4EEC\u5E76\u4E0D\u7531 Koishi \u81EA\u8EAB\u5B9E\u73B0\uFF0C\u800C\u662F\u7531\u6BCF\u4E2A\u6570\u636E\u5E93\u5206\u522B\u5B9E\u73B0\u7684</strong>\u3002Koishi \u53EA\u662F\u63D0\u4F9B\u4E86\u4E00\u5957\u6807\u51C6\u3002</p><h2 id="database-drop" tabindex="-1"><a class="header-anchor" href="#database-drop" aria-hidden="true">#</a> database.drop()</h2><h2 id="database-stats" tabindex="-1"><a class="header-anchor" href="#database-stats" aria-hidden="true">#</a> database.stats()</h2><h2 id="database-get-table-query-modifier" tabindex="-1"><a class="header-anchor" href="#database-get-table-query-modifier" aria-hidden="true">#</a> database.get(table, query, modifier?)</h2><ul><li><strong>table:</strong> <code>keyof Tables</code> \u6CE8\u518C\u5728 ORM \u4E2D\u7684\u8868\u540D</li><li><strong>query:</strong> <code>QueryExpr&lt;Tables[T]&gt; | QueryShorthand</code> \u641C\u7D22\u8868\u8FBE\u5F0F</li><li><strong>modifier:</strong> <code>QueryModifier&lt;keyof Tables[T]&gt;</code> \u8BF7\u6C42\u4FEE\u9970\u7B26</li><li>\u8FD4\u56DE\u503C: <code>Promise&lt;Tables[T][]&gt;</code> \u7528\u6237\u6570\u636E</li></ul><p>\u53C2\u6570 query \u652F\u6301\u6B63\u5219\u4EE5\u53CA\u8868\u8FBE\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u590D\u6742\u7684\u5D4C\u5957\u66F4\u7EC6\u81F4\u5316\u7684\u53BB\u5B8C\u6210\u4F60\u5BF9\u6570\u636E\u5E93\u7684\u67E5\u627E\u670D\u52A1\u3002\u5B9E\u73B0\u4E0A\u4E0E mongo \u8FD1\u4F3C\uFF0C\u5982\u679C\u4F60\u6709\u4F7F\u7528\u8FC7 mongodb \u7ECF\u9A8C\uFF0C\u90A3\u4E48\u4F7F\u7528 Koishi ORM \u5BF9\u4F60\u6765\u8BF4\u4FBF\u4E0D\u662F\u4E00\u4EF6\u96BE\u4E8B\u3002</p>',7),i=e("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[e("div",{class:"code-container"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface FieldQueryExpr<T>"},"FieldQueryExpr")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"> {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$regex?: RegExp"},"$regex")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface RegExp"},"RegExp")])]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$in?: T[]"},"$in")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$nin?: T[]"},"$nin")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$eq?: T"},"$eq")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")])]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$ne?: T"},"$ne")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")])]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$gt?: T"},"$gt")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")])]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$gte?: T"},"$gte")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")])]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$lt?: T"},"$lt")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")])]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) FieldQueryExpr<T>.$lte?: T"},"$lte")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in FieldQueryExpr<T>"},"T")])]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"},"\xA0"),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface LogicalQueryExpr<T>"},"LogicalQueryExpr")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in LogicalQueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"> {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) LogicalQueryExpr<T>.$or?: QueryExpr<T>[]"},"$or")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type QueryExpr<T> = LogicalQueryExpr<T> & { [K in keyof T]?: FieldQuery<T[K]>; }"},"QueryExpr")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in LogicalQueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},">[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) LogicalQueryExpr<T>.$and?: QueryExpr<T>[]"},"$and")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type QueryExpr<T> = LogicalQueryExpr<T> & { [K in keyof T]?: FieldQuery<T[K]>; }"},"QueryExpr")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in LogicalQueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},">[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) LogicalQueryExpr<T>.$not?: QueryExpr<T>"},"$not")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type QueryExpr<T> = LogicalQueryExpr<T> & { [K in keyof T]?: FieldQuery<T[K]>; }"},"QueryExpr")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in LogicalQueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"},"\xA0"),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type QueryShorthand<T> = RegExp | T[]"},"QueryShorthand")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryShorthand<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryShorthand<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"[] "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface RegExp"},"RegExp")])]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type FieldQuery<T> = FieldQueryExpr<T> | QueryShorthand<T>"},"FieldQuery")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type FieldQuery<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface FieldQueryExpr<T>"},"FieldQueryExpr")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type FieldQuery<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type QueryShorthand<T> = RegExp | T[]"},"QueryShorthand")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type FieldQuery<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type QueryExpr<T> = LogicalQueryExpr<T> & { [K in keyof T]?: FieldQuery<T[K]>; }"},"QueryExpr")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface LogicalQueryExpr<T>"},"LogicalQueryExpr")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"&"),e("span",{style:{color:"#F8F8F2"}}," {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"  ["),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) K"},"K")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"in"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"keyof"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"]"),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type FieldQuery<T> = FieldQueryExpr<T> | QueryShorthand<T>"},"FieldQuery")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryExpr<T>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"["),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) K"},"K")]),e("span",{style:{color:"#F8F8F2"}},"]>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"},"\xA0"),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"interface"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface QueryOptions<T extends string>"},"QueryOptions")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in QueryOptions<T extends string>"},"T")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"extends"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"string"),e("span",{style:{color:"#F8F8F2"}},"> {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) QueryOptions<T extends string>.limit?: number"},"limit")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"number")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) QueryOptions<T extends string>.offset?: number"},"offset")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"number")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) QueryOptions<T extends string>.fields?: T[]"},"fields")]),e("span",{style:{color:"#F92672"}},"?:"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in QueryOptions<T extends string>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"}")]),s(`
`),e("span",{class:"line"},"\xA0"),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"type"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"type QueryModifier<T extends string> = QueryOptions<T> | T[]"},"QueryModifier")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryModifier<T extends string>"},"T")]),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"extends"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#66D9EF"}},"string"),e("span",{style:{color:"#F8F8F2"}},"> "),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryModifier<T extends string>"},"T")]),e("span",{style:{color:"#F8F8F2"}},"[] "),e("span",{style:{color:"#F92672"}},"|"),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"interface QueryOptions<T extends string>"},"QueryOptions")]),e("span",{style:{color:"#F8F8F2"}},"<"),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:"(type parameter) T in type QueryModifier<T extends string>"},"T")]),e("span",{style:{color:"#F8F8F2"}},">")]),s(`
`)])])],-1),u=e("p",null,"\u4E0B\u9762\u662F\u4E00\u4E9B\u7B80\u5355\u7684\u793A\u4F8B\uFF1A",-1),E=e("pre",{class:"shiki monokai twoslash lsp",style:{"background-color":"#272822",color:"#F8F8F2"}},[e("div",{class:"code-container"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// \u83B7\u53D6\u540D\u4E3A schedule \u7684\u8868\u4E2D id \u4E3A 1 \u6216\u8005 2 \u7684\u6570\u636E\u884C")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// Koishi ORM \u81EA\u52A8\u89E3\u6790\u4F60\u7684 primary key")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"const"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-err",null,[e("data-err",null,[e("data-err",null,[e("data-err",null,[e("data-err",null,[e("data-lsp",{lsp:"const rows: Result<Schedule, Keys<Schedule, any>, (...args: any) => any>[]"},"rows")])])])])]),s()]),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"await"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-lsp",{lsp:"const ctx: Context"},"ctx"),s("."),e("data-lsp",{lsp:"(property) Context.database: DatabaseService"},"database"),s(".")]),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:'(method) Database<Tables>.get<"schedule", Keys<Schedule, any>>(table: "schedule", query: Query<Schedule>, cursor?: Driver.Cursor<Keys<Schedule, any>>): Promise<...>'},"get")]),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'schedule'"),e("span",{style:{color:"#F8F8F2"}},", ["),e("span",{style:{color:"#AE81FF"}},"1"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#AE81FF"}},"2"),e("span",{style:{color:"#F8F8F2"}},"])")]),s(`
`),e("span",{class:"error"},[e("span",null,`Cannot redeclare block-scoped variable 'rows'.
Cannot redeclare block-scoped variable 'rows'.
Cannot redeclare block-scoped variable 'rows'.
Cannot redeclare block-scoped variable 'rows'.
Cannot redeclare block-scoped variable 'rows'.`),e("span",{class:"code"},[s("2451"),e("br"),s("2451"),e("br"),s("2451"),e("br"),s("2451"),e("br"),s("2451")])]),e("span",{class:"error-behind"},`Cannot redeclare block-scoped variable 'rows'.
Cannot redeclare block-scoped variable 'rows'.
Cannot redeclare block-scoped variable 'rows'.
Cannot redeclare block-scoped variable 'rows'.
Cannot redeclare block-scoped variable 'rows'.`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"const"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-err",null,[e("data-lsp",{lsp:"const rows: Result<Schedule, Keys<Schedule, any>, (...args: any) => any>[]"},"rows")]),s()]),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"await"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-lsp",{lsp:"const ctx: Context"},"ctx"),s("."),e("data-lsp",{lsp:"(property) Context.database: DatabaseService"},"database"),s(".")]),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:'(method) Database<Tables>.get<"schedule", Keys<Schedule, any>>(table: "schedule", query: Query<Schedule>, cursor?: Driver.Cursor<Keys<Schedule, any>>): Promise<...>'},"get")]),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'schedule'"),e("span",{style:{color:"#F8F8F2"}},[s(", { "),e("data-lsp",{lsp:"(property) id?: Query.FieldQuery<number>"},"id"),s(": [")]),e("span",{style:{color:"#AE81FF"}},"1"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#AE81FF"}},"2"),e("span",{style:{color:"#F8F8F2"}},"] })")]),s(`
`),e("span",{class:"error"},[e("span",null,"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"code"},"2451")]),e("span",{class:"error-behind"},"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"line"},"\xA0"),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// \u5F53\u7136 Koishi ORM \u4E5F\u652F\u6301\u4E86 mongo \u7684\u6B63\u5219\u5199\u6CD5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"const"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-err",null,[e("data-lsp",{lsp:"const rows: Result<Schedule, Keys<Schedule, any>, (...args: any) => any>[]"},"rows")]),s()]),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"await"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-lsp",{lsp:"const ctx: Context"},"ctx"),s("."),e("data-lsp",{lsp:"(property) Context.database: DatabaseService"},"database"),s(".")]),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:'(method) Database<Tables>.get<"schedule", Keys<Schedule, any>>(table: "schedule", query: Query<Schedule>, cursor?: Driver.Cursor<Keys<Schedule, any>>): Promise<...>'},"get")]),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'schedule'"),e("span",{style:{color:"#F8F8F2"}},[s(", { "),e("data-lsp",{lsp:"(property) command?: Query.FieldQuery<string>"},"command"),s(":")]),e("span",{style:{color:"#E6DB74"}}," /echo"),e("span",{style:{color:"#AE81FF"}},"."),e("span",{style:{color:"#F92672"}},"*"),e("span",{style:{color:"#E6DB74"}},"/"),e("span",{style:{color:"#F8F8F2"}}," })")]),s(`
`),e("span",{class:"error"},[e("span",null,"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"code"},"2451")]),e("span",{class:"error-behind"},"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"line"},"\xA0"),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// \u83B7\u53D6\u540D\u4E3A schedule \u7684\u8868\u4E2D id \u5927\u4E8E 2 \u4F46\u662F\u5C0F\u4E8E\u7B49\u4E8E 5 \u7684\u6570\u636E\u884C")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"const"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-err",null,[e("data-lsp",{lsp:"const rows: Result<Schedule, Keys<Schedule, any>, (...args: any) => any>[]"},"rows")]),s()]),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"await"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-lsp",{lsp:"const ctx: Context"},"ctx"),s("."),e("data-lsp",{lsp:"(property) Context.database: DatabaseService"},"database"),s(".")]),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:'(method) Database<Tables>.get<"schedule", Keys<Schedule, any>>(table: "schedule", query: Query<Schedule>, cursor?: Driver.Cursor<Keys<Schedule, any>>): Promise<...>'},"get")]),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'schedule'"),e("span",{style:{color:"#F8F8F2"}},[s(", { "),e("data-lsp",{lsp:"(property) id?: Query.FieldQuery<number>"},"id"),s(": { "),e("data-lsp",{lsp:"(property) Query<T = any>.FieldExpr<number>.$gt?: number"},"$gt"),s(": ")]),e("span",{style:{color:"#AE81FF"}},"2"),e("span",{style:{color:"#F8F8F2"}},[s(", "),e("data-lsp",{lsp:"(property) Query<T = any>.FieldExpr<number>.$lte?: number"},"$lte"),s(": ")]),e("span",{style:{color:"#AE81FF"}},"5"),e("span",{style:{color:"#F8F8F2"}}," } })")]),s(`
`),e("span",{class:"error"},[e("span",null,"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"code"},"2451")]),e("span",{class:"error-behind"},"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"line"},"\xA0"),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// \u83B7\u53D6\u540D\u4E3A schedule \u7684\u8868\u4E2D")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// id \u5927\u4E8E 2 \u4F46\u662F\u5C0F\u4E8E\u7B49\u4E8E 5 \u6216\u8005 id \u5927\u4E8E 100 \u7684\u6570\u636E\u884C")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"const"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-err",null,[e("data-lsp",{lsp:"const rows: Result<Schedule, Keys<Schedule, any>, (...args: any) => any>[]"},"rows")]),s()]),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"await"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-lsp",{lsp:"const ctx: Context"},"ctx"),s("."),e("data-lsp",{lsp:"(property) Context.database: DatabaseService"},"database"),s(".")]),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:'(method) Database<Tables>.get<"schedule", Keys<Schedule, any>>(table: "schedule", query: Query<Schedule>, cursor?: Driver.Cursor<Keys<Schedule, any>>): Promise<...>'},"get")]),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'schedule'"),e("span",{style:{color:"#F8F8F2"}},", {")]),s(`
`),e("span",{class:"error"},[e("span",null,"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"code"},"2451")]),e("span",{class:"error-behind"},"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) id?: Query.FieldQuery<number>"},"id"),s(": { "),e("data-lsp",{lsp:"(property) Query<T = any>.FieldExpr<number>.$gt?: number"},"$gt"),s(": ")]),e("span",{style:{color:"#AE81FF"}},"2"),e("span",{style:{color:"#F8F8F2"}},[s(", "),e("data-lsp",{lsp:"(property) Query<T = any>.FieldExpr<number>.$lte?: number"},"$lte"),s(": ")]),e("span",{style:{color:"#AE81FF"}},"5"),e("span",{style:{color:"#F8F8F2"}}," },")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},[s("  "),e("data-lsp",{lsp:"(property) Query<T = any>.LogicalExpr<Schedule>.$or?: Query.Expr<Schedule>[]"},"$or"),s(": [{ "),e("data-lsp",{lsp:"(property) id?: Query.FieldQuery<number>"},"id"),s(": { "),e("data-lsp",{lsp:"(property) Query<T = any>.FieldExpr<number>.$gt?: number"},"$gt"),s(": ")]),e("span",{style:{color:"#AE81FF"}},"100"),e("span",{style:{color:"#F8F8F2"}}," } }],")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#F8F8F2"}},"})")]),s(`
`),e("span",{class:"line"},"\xA0"),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#88846F"}},"// \u53EA\u83B7\u53D6 id \u548C command \u5B57\u6BB5\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5C06\u83B7\u53D6\u5168\u90E8\u5B57\u6BB5\uFF09")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#66D9EF"}},"const"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-err",null,[e("data-lsp",{lsp:'const rows: Result<Schedule, "id" | "command", (...args: any) => any>[]'},"rows")]),s()]),e("span",{style:{color:"#F92672"}},"="),e("span",{style:{color:"#F8F8F2"}}," "),e("span",{style:{color:"#F92672"}},"await"),e("span",{style:{color:"#F8F8F2"}},[s(),e("data-lsp",{lsp:"const ctx: Context"},"ctx"),s("."),e("data-lsp",{lsp:"(property) Context.database: DatabaseService"},"database"),s(".")]),e("span",{style:{color:"#A6E22E"}},[e("data-lsp",{lsp:'(method) Database<Tables>.get<"schedule", "id" | "command">(table: "schedule", query: Query<Schedule>, cursor?: Driver.Cursor<"id" | "command">): Promise<Result<Schedule, "id" | "command", (...args: any) => any>[]>'},"get")]),e("span",{style:{color:"#F8F8F2"}},"("),e("span",{style:{color:"#E6DB74"}},"'schedule'"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#AE81FF"}},"1"),e("span",{style:{color:"#F8F8F2"}},", ["),e("span",{style:{color:"#E6DB74"}},"'id'"),e("span",{style:{color:"#F8F8F2"}},", "),e("span",{style:{color:"#E6DB74"}},"'command'"),e("span",{style:{color:"#F8F8F2"}},"])")]),s(`
`),e("span",{class:"error"},[e("span",null,"Cannot redeclare block-scoped variable 'rows'."),e("span",{class:"code"},"2451")]),e("span",{class:"error-behind"},"Cannot redeclare block-scoped variable 'rows'.")])])],-1),b=o('<h2 id="database-set-table-query-updater" tabindex="-1"><a class="header-anchor" href="#database-set-table-query-updater" aria-hidden="true">#</a> database.set(table, query, updater)</h2><h2 id="database-remove-table-query" tabindex="-1"><a class="header-anchor" href="#database-remove-table-query" aria-hidden="true">#</a> database.remove(table, query)</h2><h2 id="database-create-table-data" tabindex="-1"><a class="header-anchor" href="#database-create-table-data" aria-hidden="true">#</a> database.create(table, data)</h2><h2 id="database-upsert-table-data-keys" tabindex="-1"><a class="header-anchor" href="#database-upsert-table-data-keys" aria-hidden="true">#</a> database.upsert(table, data, keys?)</h2><h2 id="database-eval-table-expr-query" tabindex="-1"><a class="header-anchor" href="#database-eval-table-expr-query" aria-hidden="true">#</a> database.eval(table, expr, query?)</h2>',5);function T(h,x){const a=p("panel-view");return n(),c(y,null,[d,l(a,{class:"code",title:"",style:{}},{default:r(()=>[i]),_:1}),u,l(a,{class:"code",title:"",style:{}},{default:r(()=>[E]),_:1}),b],64)}var m=t(F,[["render",T],["__file","database.html.vue"]]);export{m as default};
