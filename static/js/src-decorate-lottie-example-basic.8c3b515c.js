(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/Decorate/Lottie/example/Basic.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),i=n.n(r),c=n("./node_modules/@mdx-js/react/dist/esm.js"),s=n("./node_modules/docz/dist/index.esm.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),j=n("./node_modules/classnames/index.js"),d=n.n(j);n("./src/Decorate/Lottie/style.scss");var O=function(e){Object(l.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(p.a)(e);if(t()){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).destroy=function(){n.animation&&(clearTimeout(n.timerKey),n.animation.destroy(),n.animation=null)},n.startAnimation=function(){var e=n.props;n.state.errMsg&&n.setState({errMsg:null}),window.fetch(e.jsonUrl).then((function(e){return e.json()})).then((function(t){n.destroy(),n.animation=n.lottie.loadAnimation({container:n.root.current,renderer:e.renderer,loop:!0,autoplay:!1,animationData:t}),n.animation.setSpeed(e.speed),e.autoplay&&(e.animationDelay<=0?n.animation.play():n.timerKey=setTimeout((function(){n.animation.play()}),e.animationDelay)),e.onInitAnimation(n.animation)})).catch((function(e){n.setState({errMsg:"json\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u94fe\u63a5"})}))},n.state={loading:!0,errMsg:null},n.lottie=null,n.animation=null,n.timerKey=null,n.root=i.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;n.e(0).then(function(t){e.lottie=n("./node_modules/lottie-web/build/player/lottie.js"),e.startAnimation()}.bind(null,n)).catch(n.oe)}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"componentDidUpdate",value:function(e,t,n){e.jsonUrl!==this.props.jsonUrl&&this.startAnimation()}},{key:"render",value:function(){var e=this.props,t=this.state;return i.a.createElement("div",{ref:this.root,className:d()("dui-lottie",{err:t.errMsg},e.className),style:e.style},!!t.errMsg&&t.errMsg)}}]),a}(i.a.Component);O.defaultProps={jsonUrl:"https://cec-1256174840.cos.ap-shanghai.myqcloud.com/427-happy-birthday.json",speed:1,animationDelay:0,autoplay:!0,renderer:"svg",onInitAnimation:function(e){return e}},"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Lottie",filename:"src/Decorate/Lottie/Lottie.jsx"}}),"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Lottie",filename:"src/Decorate/Lottie/Lottie.jsx"}});var u=O;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Lottie",filename:"src/Decorate/Lottie/index.js"}});var g={};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"lottie"},"Lottie"),Object(c.b)("p",null,"Lottie \u662f Airbnb \u5f00\u6e90\u7684\u4e00\u5957\u8de8\u5e73\u53f0\u7684\u5b8c\u6574\u7684\u52a8\u753b\u6548\u679c\u89e3\u51b3\u65b9\u6848\uff0c\u8bbe\u8ba1\u5e08\u53ef\u4ee5\u4f7f\u7528 Adobe After Effects \u8bbe\u8ba1\u51fa\u6f02\u4eae\u7684\u52a8\u753b\u4e4b\u540e\uff0c\u4f7f\u7528 Lottie \u63d0\u4f9b\u7684 Bodymovin \u63d2\u4ef6\u5c06\u8bbe\u8ba1\u597d\u7684\u52a8\u753b\u5bfc\u51fa\u6210 JSON \u683c\u5f0f\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u8fd0\u7528\u5728 iOS\u3001Android\u3001Web \u548c React Native\u4e4b\u4e0a\uff0c\u65e0\u9700\u5176\u4ed6\u989d\u5916\u64cd\u4f5c\u3002"),Object(c.b)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://www.uisdc.com/lottie-dynamic-design-guide"}),"https://www.uisdc.com/lottie-dynamic-design-guide")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://airbnb.io/lottie/"}),"https://airbnb.io/lottie/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://lottiefiles.com/?lang=zh_CN"}),"https://lottiefiles.com/?lang=zh_CN")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://zhuanlan.zhihu.com/p/104751997"}),"https://zhuanlan.zhihu.com/p/104751997"))),Object(c.b)("h2",{id:"\u57fa\u672c\u5c5e\u6027"},"\u57fa\u672c\u5c5e\u6027"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u5c5e\u6027\u540d"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u63cf\u8ff0"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u7c7b\u578b"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"\u5fc5\u586b\u9879"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"jsonUrl"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"json\u7684url"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u662f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"speed"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u64ad\u653e\u901f\u5ea6"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"number"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"1"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"animationDelay"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u52a8\u753b\u5ef6\u8fdf\u591a\u5c11\u6beb\u79d2\u64ad\u653e"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"number"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"0"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"autoplay"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u662f\u5426\u81ea\u52a8\u64ad\u653e"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"bool"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"true"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"renderer"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6e32\u67d3\u65b9\u5f0f(svg\u6216html\u6216canvas)"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"svg"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"onInitAnimation"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"lottie\u52a8\u753b\u5bf9\u8c61\u521d\u59cb\u5316\u5b8c\u6210\u540e\u7684\u56de\u8c03\uff0conInitAnimation(lottieAnimation)"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"style"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6839\u7ed3\u70b9style"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Object"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"className"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"\u6839\u7ed3\u70b9\u7c7b\u540d"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(c.b)(s.c,{__position:0,__code:'<Lottie />\n<Lottie\n  jsonUrl="https://cec-1256174840.cos.ap-shanghai.myqcloud.com/72-favourite-app-icon.json"\n  renderer="canvas"\n  animationDelay={2000}\n/>\n<Lottie\n  jsonUrl="https://cec-1256174840.cos.ap-shanghai.myqcloud.com/1055-world-locations.json"\n  speed={1.2}\n/>',__scope:{props:this?this.props:n,Playground:s.c,Lottie:u},mdxType:"Playground"},Object(c.b)(u,{mdxType:"Lottie"}),Object(c.b)(u,{jsonUrl:"https://cec-1256174840.cos.ap-shanghai.myqcloud.com/72-favourite-app-icon.json",renderer:"canvas",animationDelay:2e3,mdxType:"Lottie"}),Object(c.b)(u,{jsonUrl:"https://cec-1256174840.cos.ap-shanghai.myqcloud.com/1055-world-locations.json",speed:1.2,mdxType:"Lottie"})))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Decorate/Lottie/example/Basic.mdx"}}),h.isMDXComponent=!0},"./src/Decorate/Lottie/style.scss":function(e,t,n){}}]);
//# sourceMappingURL=src-decorate-lottie-example-basic.86bcc47ebb5106a8d08d.js.map