(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/Decorate/StripeDivider/example/Basic.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=a("./node_modules/react/index.js"),c=a.n(r),i=a("./node_modules/@mdx-js/react/dist/esm.js"),b=a("./node_modules/docz/dist/index.esm.js"),s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),d=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),p=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),j=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=a("./node_modules/classnames/index.js"),O=a.n(m);a("./src/Decorate/StripeDivider/style.scss");var g=function(e){Object(p.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(j.a)(e);if(t()){var r=Object(j.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data.reduce((function(e,t){return e+t}),0),a=0,n=e.data.map((function(e,n){return(a+=e)/t}));return c.a.createElement("div",{style:e.style,className:O()("dui-strip",e.direction,e.className)},Array.from({length:e.count}).map((function(t,a){var r=(a+1)/e.count,i=n.findIndex((function(e){return r<=e})),b=Object(s.a)(Object(s.a)({},e.itemStyle||{}),{},{background:e.colors[i%e.colors.length]});return c.a.createElement("span",{key:a,style:b,className:O()("dui-strip-item",e.itemClass)})})))}}]),a}(c.a.Component);g.defaultProps={data:[],colors:["#8CD0F1","#00AAFF","#FBB62D"],count:48,direction:"horizon"},"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StripeDivider",filename:"src/Decorate/StripeDivider/StripeDivider.jsx"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StripeDivider",filename:"src/Decorate/StripeDivider/StripeDivider.jsx"}});var u=g;"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StripeDivider",filename:"src/Decorate/StripeDivider/index.js"}});var f={};function N(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"stripedivider"},"StripeDivider"),Object(i.b)("p",null,"\u6309\u6570\u636e\u6e90data\u6bd4\u4f8b\u5206\u9694"),Object(i.b)("h2",{id:"\u57fa\u672c\u5c5e\u6027"},"\u57fa\u672c\u5c5e\u6027"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u5c5e\u6027\u540d"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u63cf\u8ff0"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u7c7b\u578b"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u5fc5\u586b\u9879"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"data"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6570\u636e"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Array"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"[]"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u662f")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"count"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6761\u603b\u6570"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"number"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"20"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"colors"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u989c\u8272\u96c6"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Array"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"['#8CD0F1', '#00AAFF', '#FBB62D']"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"style"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6839\u7ed3\u70b9style"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Object"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"className"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6839\u7ed3\u70b9\u7c7b\u540d"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"string"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"itemStyle"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u5355\u9879style"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Object"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"itemClassName"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u5355\u9879\u7684\u7c7b\u540d"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"string"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}))))),Object(i.b)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(i.b)(b.c,{__position:0,__code:"<StripeDivider data={[2, 4, 5]} style={{ height: 10 }} />\n<StripeDivider style={{ height: 20, marginTop: 20 }} data={[2, 4, 5, 8]} />",__scope:{props:this?this.props:a,Playground:b.c,StripeDivider:u},mdxType:"Playground"},Object(i.b)(u,{data:[2,4,5],style:{height:10},mdxType:"StripeDivider"}),Object(i.b)(u,{style:{height:20,marginTop:20},data:[2,4,5,8],mdxType:"StripeDivider"})))}N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Decorate/StripeDivider/example/Basic.mdx"}}),N.isMDXComponent=!0},"./src/Decorate/StripeDivider/style.scss":function(e,t,a){}}]);
//# sourceMappingURL=src-decorate-stripe-divider-example-basic.86bcc47ebb5106a8d08d.js.map