(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/Text/ScrollText/example/Basic.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),c=n.n(r),s=n("./node_modules/@mdx-js/react/dist/esm.js"),l=n("./node_modules/docz/dist/index.esm.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),j=n("./node_modules/react-dom/index.js"),O=n.n(j),u=n("./node_modules/classnames/index.js"),g=n.n(u),f=(n("./src/Text/ScrollText/style.scss"),n("./node_modules/animejs/lib/anime.es.js"));var x=function(e){Object(d.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(m.a)(e);if(t()){var r=Object(m.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(p.a)(this,n)}}(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).onUpdate=function(){var e=a.props.gap,t=O.a.findDOMNode(Object(o.a)(a)).offsetHeight,n=a.cnt.current.offsetHeight;if(t>=n)return a.state.overflow&&a.setState({overflow:!1}),f.a.remove(a.cnt.current),void f.a.remove(a.cnt2.current);a.speed=n/a.props.duration,a.setState({overflow:!0},(function(){a.cnt.current.style.transform="translateY(0px)",Object(f.a)({targets:a.cnt.current,translateY:-n-e,easing:"linear",duration:(n+e)/a.speed,complete:a.complete}),a.cnt2.current.style.transform="translateY(".concat(n+e,"px)"),Object(f.a)({targets:a.cnt2.current,translateY:-n-e,easing:"linear",duration:(n+n+e+e)/a.speed,complete:a.complete})}))},a.complete=function(e){var t=e.animatables[0].target,n=a.props.gap,r=t.offsetHeight;t.style.transform="translateY(".concat(r+n,"px)"),Object(f.a)({targets:t,translateY:-r-n,easing:"linear",duration:(r+r+n+n)/a.speed,complete:a.complete})},a.state={overflow:!1},a.cnt=c.a.createRef(),a.cnt2=c.a.createRef(),a.speed=1,a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.onUpdate()}},{key:"componentDidUpdate",value:function(e,t){e.children===this.props.children&&e.duration===this.props.duration||this.onUpdate()}},{key:"componentWillUnmount",value:function(){f.a.remove(this.cnt.current),f.a.remove(this.cnt2.current)}},{key:"render",value:function(){var e=this.props,t=this.state;return c.a.createElement("div",{className:g()("dui-scroll-text",e.className),style:e.style},c.a.createElement("div",{ref:this.cnt,className:g()("dui-scroll-text-cnt",e.textClassName),style:e.textStyle},e.children),t.overflow&&c.a.createElement("div",{ref:this.cnt2,className:g()("dui-scroll-text-cnt",e.textClassName),style:e.textStyle},e.children))}}]),n}(c.a.PureComponent);"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollText",filename:"src/Text/ScrollText/ScrollText.jsx"}}),"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollText",filename:"src/Text/ScrollText/ScrollText.jsx"}}),x.defaultProps={children:"\u6eda\u52a8\u6587\u672c\uff0c\u6ea2\u51fa\u65f6\u6eda\u52a8",duration:5e3,gap:5,style:{}};var N=x;"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScrollText",filename:"src/Text/ScrollText/index.js"}});var h={};function y(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"scrolltext-\u6ea2\u51fa\u6eda\u52a8\u6587\u672c"},"ScrollText \u6ea2\u51fa\u6eda\u52a8\u6587\u672c"),Object(s.b)("p",null,"\u591a\u884c\u6587\u672c\uff0c\u5f53\u6ea2\u51fa\u65f6\uff0c\u5c06\u6eda\u52a8"),Object(s.b)("h2",{id:"\u57fa\u672c\u5c5e\u6027"},"\u57fa\u672c\u5c5e\u6027"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u5c5e\u6027\u540d"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u63cf\u8ff0"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u7c7b\u578b"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u5fc5\u586b\u9879"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"children"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6587\u672c\u5185\u5bb9"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"string"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u662f")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"duration"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6eda\u52a8\u6301\u7eed\u65f6\u95f4"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"number"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"5000ms"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u662f")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"gap"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6ea2\u51fa\u6eda\u52a8\u65f6\uff0c\u4e24\u4e2a\u6eda\u52a8\u5185\u5bb9\u7684\u4e0a\u4e0b\u95f4\u8ddd"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"number"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"5"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"style"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6839\u6837\u5f0f"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Object"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u5426")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"className"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6839\u7c7b\u540d"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"String"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u5426")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"textClassName"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6eda\u52a8\u6587\u672c\u7684\u7c7b\u540d"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"String"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"textStyle"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6eda\u52a8\u6587\u672c\u7684\u6837\u5f0f"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"object"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"center"}))))),Object(s.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(s.b)(l.c,{__position:0,__code:"<ScrollText style={{ width: 400, height: 300, border: '1px red solid' }}>\n  CECDATA\n  \u63d0\u4f9b\u8fd0\u8425\u52a8\u6001\u76f4\u64ad\u3001\u6570\u636e\u7efc\u5408\u5c55\u793a\u3001\u8bbe\u5907\u76d1\u63a7\u9884\u8b66\u7b49\u591a\u79cd\u573a\u666f\u6a21\u677f\uff0c\u7a0d\u52a0\u4fee\u6539\u5c31\u80fd\u591f\u76f4\u63a5\u670d\u52a1\u4e8e\u60a8\u7684\u53ef\u89c6\u5316\u9700\u6c42\u3002\u901a\u8fc7\u62d6\u62fd\u5373\u53ef\u5b9e\u73b0\u7075\u6d3b\u7684\u53ef\u89c6\u5316\u5e03\u5c40\uff0c\u5728\u6a21\u677f\u7684\u57fa\u7840\u4e0a\u4efb\u4f55\u4eba\u90fd\u80fd\u591f\u53d1\u6325\u521b\u610f\uff0c\u5b9e\u73b0\u60a8\u81ea\u5df1\u7684\u53ef\u89c6\u5316\u5e94\u7528\u3002\u652f\u6301\u963f\u91cc\u4e91\u5206\u6790\u6570\u636e\u5e93\u3001\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3001Restful\n  API\u3001CSV\u3001\u9759\u6001JSON\u7b49\u591a\u79cd\u6570\u636e\u6765\u6e90\uff0c\u4e14\u80fd\u591f\u52a8\u6001\u8f6e\u8be2\u3002\u80fd\u591f\u5b9e\u73b0\u591a\u4e2a\u6570\u636e\u6e90\u6c47\u805a\u4e8e\u4e00\u4e2a\u53ef\u89c6\u5316\u754c\u9762\u4e2d\n</ScrollText>\n<ScrollText\n  style={{ width: 300, height: 200, border: '1px red solid', marginTop: 10 }}\n>\n  CECDATA\n  \u63d0\u4f9b\u8fd0\u8425\u52a8\u6001\u76f4\u64ad\u3001\u6570\u636e\u7efc\u5408\u5c55\u793a\u3001\u8bbe\u5907\u76d1\u63a7\u9884\u8b66\u7b49\u591a\u79cd\u573a\u666f\u6a21\u677f\uff0c\u7a0d\u52a0\u4fee\u6539\u5c31\u80fd\u591f\u76f4\u63a5\u670d\u52a1\u4e8e\u60a8\u7684\u53ef\u89c6\u5316\u9700\u6c42\u3002\u901a\u8fc7\u62d6\u62fd\u5373\u53ef\u5b9e\u73b0\u7075\u6d3b\u7684\u53ef\u89c6\u5316\u5e03\u5c40\uff0c\u5728\u6a21\u677f\u7684\u57fa\u7840\u4e0a\u4efb\u4f55\u4eba\u90fd\u80fd\u591f\u53d1\u6325\u521b\u610f\uff0c\u5b9e\u73b0\u60a8\u81ea\u5df1\u7684\u53ef\u89c6\u5316\u5e94\u7528\u3002\u652f\u6301\u963f\u91cc\u4e91\u5206\u6790\u6570\u636e\u5e93\u3001\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3001Restful\n  API\u3001CSV\u3001\u9759\u6001JSON\u7b49\u591a\u79cd\u6570\u636e\u6765\u6e90\uff0c\u4e14\u80fd\u591f\u52a8\u6001\u8f6e\u8be2\u3002\u80fd\u591f\u5b9e\u73b0\u591a\u4e2a\u6570\u636e\u6e90\u6c47\u805a\u4e8e\u4e00\u4e2a\u53ef\u89c6\u5316\u754c\u9762\u4e2d\n</ScrollText>",__scope:{props:this?this.props:n,Playground:l.c,ScrollText:N},mdxType:"Playground"},Object(s.b)(N,{style:{width:400,height:300,border:"1px red solid"},mdxType:"ScrollText"},"CECDATA \u63d0\u4f9b\u8fd0\u8425\u52a8\u6001\u76f4\u64ad\u3001\u6570\u636e\u7efc\u5408\u5c55\u793a\u3001\u8bbe\u5907\u76d1\u63a7\u9884\u8b66\u7b49\u591a\u79cd\u573a\u666f\u6a21\u677f\uff0c\u7a0d\u52a0\u4fee\u6539\u5c31\u80fd\u591f\u76f4\u63a5\u670d\u52a1\u4e8e\u60a8\u7684\u53ef\u89c6\u5316\u9700\u6c42\u3002\u901a\u8fc7\u62d6\u62fd\u5373\u53ef\u5b9e\u73b0\u7075\u6d3b\u7684\u53ef\u89c6\u5316\u5e03\u5c40\uff0c\u5728\u6a21\u677f\u7684\u57fa\u7840\u4e0a\u4efb\u4f55\u4eba\u90fd\u80fd\u591f\u53d1\u6325\u521b\u610f\uff0c\u5b9e\u73b0\u60a8\u81ea\u5df1\u7684\u53ef\u89c6\u5316\u5e94\u7528\u3002\u652f\u6301\u963f\u91cc\u4e91\u5206\u6790\u6570\u636e\u5e93\u3001\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3001Restful API\u3001CSV\u3001\u9759\u6001JSON\u7b49\u591a\u79cd\u6570\u636e\u6765\u6e90\uff0c\u4e14\u80fd\u591f\u52a8\u6001\u8f6e\u8be2\u3002\u80fd\u591f\u5b9e\u73b0\u591a\u4e2a\u6570\u636e\u6e90\u6c47\u805a\u4e8e\u4e00\u4e2a\u53ef\u89c6\u5316\u754c\u9762\u4e2d"),Object(s.b)(N,{style:{width:300,height:200,border:"1px red solid",marginTop:10},mdxType:"ScrollText"},"CECDATA \u63d0\u4f9b\u8fd0\u8425\u52a8\u6001\u76f4\u64ad\u3001\u6570\u636e\u7efc\u5408\u5c55\u793a\u3001\u8bbe\u5907\u76d1\u63a7\u9884\u8b66\u7b49\u591a\u79cd\u573a\u666f\u6a21\u677f\uff0c\u7a0d\u52a0\u4fee\u6539\u5c31\u80fd\u591f\u76f4\u63a5\u670d\u52a1\u4e8e\u60a8\u7684\u53ef\u89c6\u5316\u9700\u6c42\u3002\u901a\u8fc7\u62d6\u62fd\u5373\u53ef\u5b9e\u73b0\u7075\u6d3b\u7684\u53ef\u89c6\u5316\u5e03\u5c40\uff0c\u5728\u6a21\u677f\u7684\u57fa\u7840\u4e0a\u4efb\u4f55\u4eba\u90fd\u80fd\u591f\u53d1\u6325\u521b\u610f\uff0c\u5b9e\u73b0\u60a8\u81ea\u5df1\u7684\u53ef\u89c6\u5316\u5e94\u7528\u3002\u652f\u6301\u963f\u91cc\u4e91\u5206\u6790\u6570\u636e\u5e93\u3001\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3001Restful API\u3001CSV\u3001\u9759\u6001JSON\u7b49\u591a\u79cd\u6570\u636e\u6765\u6e90\uff0c\u4e14\u80fd\u591f\u52a8\u6001\u8f6e\u8be2\u3002\u80fd\u591f\u5b9e\u73b0\u591a\u4e2a\u6570\u636e\u6e90\u6c47\u805a\u4e8e\u4e00\u4e2a\u53ef\u89c6\u5316\u754c\u9762\u4e2d")))}y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Text/ScrollText/example/Basic.mdx"}}),y.isMDXComponent=!0},"./src/Text/ScrollText/style.scss":function(e,t,n){}}]);
//# sourceMappingURL=src-text-scroll-text-example-basic.86bcc47ebb5106a8d08d.js.map