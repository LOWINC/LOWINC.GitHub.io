(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{18:function(e,a,t){e.exports={box:"reciver-main_box__Te1-j",item:"reciver-main_item__33peM",elementWrapper:"reciver-main_elementWrapper__389OI"}},2:function(e,a,t){e.exports={"form-cell":"form_form-cell__1ji9n","form-label":"form_form-label__3h0FD","form-value":"form_form-value__uMANL",submit:"form_submit__28v-7"}},28:function(e,a,t){e.exports={box:"reciver-element_box__F0elu"}},35:function(e,a,t){e.exports={btn:"component_btn__3xI-F"}},36:function(e,a,t){e.exports={btn:"element_btn__2MCOl"}},43:function(e,a,t){e.exports={position:"sort_position__1Fv_-",move:"sort_move__2x9ou"}},47:function(e,a,t){e.exports=t(94)},9:function(e,a,t){e.exports={layout:"jigsaw_layout__c2xAh",form:"jigsaw_form__1Io7R",operater:"jigsaw_operater__113OR",preview:"jigsaw_preview__3BObr",components:"jigsaw_components__2p1N8",elements:"jigsaw_elements__-dPss",iframe:"jigsaw_iframe__2MOlz",reset:"jigsaw_reset__2oXwJ"}},94:function(e,a,t){"use strict";t.r(a);var n,l=t(0),c=t.n(l),r=t(42),m=t.n(r),o=t(5),i=t(37),s=t(4),u=t(3),d=t(11),v=t(8),p=t.n(v),f=t(97),E=t(45),b=t(98),g=t(6),N=(n={},Object(g.a)(n,u.JigsawComponents.Swiper,{multiple:!0,elements:[u.JigsawElements.Card]}),Object(g.a)(n,u.JigsawComponents.Block,{multiple:!0,elements:[u.JigsawElements.Goods]}),Object(g.a)(n,u.JigsawComponents.Line,{multiple:!0,elements:[u.JigsawElements.Goods,u.JigsawElements.Banner]}),Object(g.a)(n,u.JigsawComponents.Title,{multiple:!1,elements:[u.JigsawElements.Text]}),n),O=t(13),j=t(99),x=t(43),y=t.n(x),_=function(e){var a=e.index,t=e.move,n=Object(l.useRef)(null),r=Object(b.a)({accept:Object.keys(e.acceptType),hover:function(e,l){var c;if(n.current){var r=e.index,m=a;if(r!==m){var o=null===(c=n.current)||void 0===c?void 0:c.getBoundingClientRect(),i=(o.bottom-o.top)/2,s=l.getClientOffset().y-o.top;r<m&&s<i||r>m&&s>i||(t(r,m),e.index=m)}}}}),m=Object(s.a)(r,2)[1],o=Object(j.a)({item:{type:e.type,index:a},collect:function(e){return{isDragging:e.isDragging()}}});return(0,Object(s.a)(o,2)[1])(m(n)),c.a.createElement("div",{ref:n,className:y.a.position},e.children)},w=t(28),h=t.n(w),C=function(e){var a=Object(b.a)({accept:N[e.componentType].elements,drop:function(){return{index:e.index,name:"ReciverElement"}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),t=Object(s.a)(a,2)[1],n=function(a,t){e.onElementMove({componentIndex:e.index,dragIndex:a,hoverIndex:t})};return c.a.createElement("div",{ref:t,className:h.a.component},c.a.createElement("div",{className:h.a.box},c.a.createElement(O.a,{componentType:e.componentType},e.value.map((function(a,t){return a?c.a.createElement(_,{key:"".concat(a.type,"-").concat(t),index:t,type:a.type,move:n,acceptType:u.JigsawElements},c.a.createElement("div",{className:h.a.item,onClick:function(){return e.onElementSelect({elementIndex:t,elementType:a.type})}},e.componentType===u.JigsawComponents.Title&&c.a.createElement(O.e,{name:p()(e.value[t],"value.title","\u8bf7\u8f93\u5165\u6807\u9898"),desc:p()(e.value[t],"value.desc")}),e.componentType===u.JigsawComponents.Line&&c.a.createElement(O.d,{name:p()(e.value[t],"value.title"),desc:p()(e.value[t],"value.desc"),img:p()(e.value[t],"value.img")}),e.componentType===u.JigsawComponents.Block&&c.a.createElement(O.c,{name:p()(e.value[t],"value.title"),desc:p()(e.value[t],"value.desc"),img:p()(e.value[t],"value.img")}),e.componentType===u.JigsawComponents.Swiper&&c.a.createElement(O.b,{img:p()(e.value[t],"value.img")}))):null})))))},J=t(18),I=t.n(J),S=function(e){var a=Object(b.a)({accept:Object.keys(u.JigsawComponents),drop:function(){return{name:"ReciverMain"}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),t=Object(s.a)(a,2)[1];return c.a.createElement("div",{ref:t,className:I.a.component},c.a.createElement("div",{className:I.a.box},e.value.map((function(a,t){return a?c.a.createElement(_,{key:a.__key,index:t,type:a.type,acceptType:u.JigsawComponents,move:function(a,n){return e.onComponentMove({componentIndex:t,dragIndex:a,hoverIndex:n})}},c.a.createElement("div",{className:I.a.elementWrapper},a.type,c.a.createElement("div",{className:I.a.item},c.a.createElement(C,{index:t,componentType:a.type,value:a.value||[],onElementMove:e.onElementMove,onElementSelect:function(a){var n=a.elementIndex,l=a.elementType;return e.onElementSelect({elementIndex:n,elementType:l,componentIndex:t})}})))):null}))))};function k(e){var a=Object(l.useState)([]),t=Object(s.a)(a,2),n=t[0],c=t[1];return Object(l.useEffect)((function(){var e=function(){try{var e=localStorage.getItem("cache-data")||"[]";return JSON.parse(e)}catch(a){return[]}}();console.log("data:",e),c(e)}),[]),Object(l.useEffect)((function(){0!==e.length&&localStorage.setItem("cache-data",JSON.stringify(e))}),[e]),{data:n,clear:function(){localStorage.setItem("cache-data",JSON.stringify([])),c([])}}}var T=t(9),D=t.n(T),M=t(35),B=t.n(M),R=function(e){var a=Object(j.a)({item:{name:e.name,type:e.name},end:function(a,t){var n=t.getDropResult();a&&n&&e.onEnd(a,n)},collect:function(e){return{isDragging:e.isDragging()}}}),t=Object(s.a)(a,2)[1];return c.a.createElement("div",{ref:t,className:B.a.component},c.a.createElement("button",{className:B.a.btn},e.children))},G=function(e){var a=e.handleComponentDropEnd,t=[{Element:c.a.createElement(R,{name:u.JigsawComponents.Swiper,onEnd:a},u.JigsawComponents.Swiper)},{Element:c.a.createElement(R,{name:u.JigsawComponents.Title,onEnd:a},u.JigsawComponents.Title)},{Element:c.a.createElement(R,{name:u.JigsawComponents.Block,onEnd:a},u.JigsawComponents.Block)},{Element:c.a.createElement(R,{name:u.JigsawComponents.Line,onEnd:a},u.JigsawComponents.Line)}];return c.a.createElement("div",null,t.map((function(e,a){return c.a.createElement("div",{key:a},e.Element)})))},L=t(36),W=t.n(L),F=function(e){var a=Object(j.a)({item:{name:e.name,type:e.name},end:function(a,t){var n=t.getDropResult();a&&n&&e.onEnd(a,n)},collect:function(e){return{isDragging:e.isDragging()}}}),t=Object(s.a)(a,2)[1];return c.a.createElement("div",{ref:t,className:W.a.component},c.a.createElement("button",{className:W.a.btn},e.children))},A=function(e){var a=e.handleElementDropEnd,t=[{Element:c.a.createElement(F,{name:u.JigsawElements.Banner,onEnd:a},u.JigsawElements.Banner)},{Element:c.a.createElement(F,{name:u.JigsawElements.Card,onEnd:a},u.JigsawElements.Card)},{Element:c.a.createElement(F,{name:u.JigsawElements.Goods,onEnd:a},u.JigsawElements.Goods)},{Element:c.a.createElement(F,{name:u.JigsawElements.Text,onEnd:a},u.JigsawElements.Text)}];return c.a.createElement("div",null,t.map((function(e,a){return c.a.createElement("div",{key:a},e.Element)})))},z=t(2),P=t.n(z),X=function(e){var a=Object(l.useState)(e.data),t=Object(s.a)(a,2),n=t[0],r=t[1];Object(l.useEffect)((function(){return r(e.data),function(){return r({})}}),[e.data]);var m=function(e){return function(a){return r(Object(o.a)(Object(o.a)({},n),{},Object(g.a)({},e,a.target.value)))}};return c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u6807\u9898"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.title,placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",onChange:m("title")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u63cf\u8ff0"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.desc,placeholder:"\u8bf7\u8f93\u5165\u63cf\u8ff0",onChange:m("desc")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u56fe\u7247"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.img,placeholder:"\u8bf7\u8f93\u5165\u56fe\u7247",onChange:m("img")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u94fe\u63a5"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.link,placeholder:"\u8bf7\u8f93\u5165\u94fe\u63a5",onChange:m("link")})),c.a.createElement("button",{className:P.a.submit,onClick:function(){e.onSubmit(n)}},"\u786e\u5b9a"))},$=function(e){var a=Object(l.useState)(e.data),t=Object(s.a)(a,2),n=t[0],r=t[1];Object(l.useEffect)((function(){return r(e.data),function(){return r({})}}),[e.data]);var m=function(e){return function(a){return r(Object(o.a)(Object(o.a)({},n),{},Object(g.a)({},e,a.target.value)))}};return c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u6807\u9898"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.vipCardId,placeholder:"\u8bf7\u8f93\u5165\u4f1a\u5458\u5361id",onChange:m("vipCardId")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u6807\u9898"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.title,placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",onChange:m("title")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u63cf\u8ff0"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.desc,placeholder:"\u8bf7\u8f93\u5165\u63cf\u8ff0",onChange:m("desc")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u56fe\u7247"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.img,placeholder:"\u8bf7\u8f93\u5165\u56fe\u7247",onChange:m("img")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u94fe\u63a5"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.link,placeholder:"\u8bf7\u8f93\u5165\u94fe\u63a5",onChange:m("link")})),c.a.createElement("button",{className:P.a.submit,onClick:function(){e.onSubmit(n)}},"\u786e\u5b9a"))},q=function(e){var a=Object(l.useState)(e.data),t=Object(s.a)(a,2),n=t[0],r=t[1];Object(l.useEffect)((function(){return r(e.data),function(){return r({})}}),[e.data]);var m=function(e){return function(a){return r(Object(o.a)(Object(o.a)({},n),{},Object(g.a)({},e,a.target.value)))}};return c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u6807\u9898"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.goodsId,placeholder:"\u8bf7\u8f93\u5165\u5546\u54c1id",onChange:m("goodsId")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u6807\u9898"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.title,placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",onChange:m("title")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u63cf\u8ff0"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.desc,placeholder:"\u8bf7\u8f93\u5165\u63cf\u8ff0",onChange:m("desc")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u56fe\u7247"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.img,placeholder:"\u8bf7\u8f93\u5165\u56fe\u7247",onChange:m("img")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u94fe\u63a5"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.link,placeholder:"\u8bf7\u8f93\u5165\u94fe\u63a5",onChange:m("link")})),c.a.createElement("button",{className:P.a.submit,onClick:function(){e.onSubmit(n)}},"\u786e\u5b9a"))},H=function(e){var a=Object(l.useState)(e.data),t=Object(s.a)(a,2),n=t[0],r=t[1];Object(l.useEffect)((function(){return r(e.data),function(){return r({})}}),[e.data]);var m=function(e){return function(a){return r(Object(o.a)(Object(o.a)({},n),{},Object(g.a)({},e,a.target.value)))}};return c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u6807\u9898"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.title,placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",onChange:m("title")})),c.a.createElement("div",{className:P.a["form-cell"]},c.a.createElement("div",{className:P.a["form-label"]},"\u63cf\u8ff0"),c.a.createElement("input",{type:"text",className:P.a["form-value"],value:n.desc,placeholder:"\u8bf7\u8f93\u5165\u63cf\u8ff0",onChange:m("desc")})),c.a.createElement("button",{className:P.a.submit,onClick:function(){e.onSubmit(n)}},"\u786e\u5b9a"))},K=function(e){var a=e.data,t=e.type,n=e.onSubmit;return console.log(a),c.a.createElement("div",null,t===u.JigsawElements.Banner&&c.a.createElement(X,{data:a,onSubmit:n}),t===u.JigsawElements.Card&&c.a.createElement($,{data:a,onSubmit:n}),t===u.JigsawElements.Goods&&c.a.createElement(q,{data:a,onSubmit:n}),t===u.JigsawElements.Text&&c.a.createElement(H,{data:a,onSubmit:n}))},Q=function(){var e=Object(l.useState)([]),a=Object(s.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)({}),m=Object(s.a)(r,2),v=m[0],b=m[1],g=Object(l.useMemo)((function(){return p()(t[v.componentIndex],"value[".concat(v.elementIndex,"].value"),{})}),[t,v.componentIndex,v.elementIndex]),O=k(t);Object(l.useEffect)((function(){n(O.data)}),[O.data]);return c.a.createElement(f.a,{backend:E.a},c.a.createElement("div",{className:D.a.page},c.a.createElement("div",{className:D.a.layout},c.a.createElement("div",{className:D.a.operater},c.a.createElement("button",{className:D.a.reset,onClick:O.clear},"\u91cd\u7f6e"),c.a.createElement("div",{className:D.a.components},c.a.createElement(G,{handleComponentDropEnd:function(e,a){var l=Object(d.default)(t,(function(a){return[].concat(Object(i.a)(a),[Object(o.a)(Object(o.a)({},e),{},{__key:(new Date).getTime()})])}));n(l.filter((function(e){return!!e})))}})),c.a.createElement("div",{className:D.a.elements},c.a.createElement(A,{handleElementDropEnd:function(e,a){if(void 0!==a.index){var l=t[a.index].type,c=N[l].multiple,r=Object(d.default)(t,(function(n){if(!c)return n[a.index].value=[Object(o.a)(Object(o.a)({},e),{},{__key:(new Date).getTime(),value:[]})],n;var l=t[a.index].value||[],r=[].concat(Object(i.a)(l),[Object(o.a)(Object(o.a)({},e),{},{__key:(new Date).getTime(),value:[]})]);return n[a.index].value=r,n}));n(r.filter((function(e){return!!e})))}}}))),c.a.createElement("div",{className:D.a.preview},c.a.createElement("div",{className:D.a.json},c.a.createElement(S,{value:t,onElementMove:function(e){var a=e.componentIndex,l=e.dragIndex,c=e.hoverIndex;"number"===typeof l&&"number"===typeof c&&n(Object(d.default)(t,(function(e){e[a].value=Object(u.swap)(t[a].value,l,c)})))},onElementSelect:function(e){b({componentIndex:e.componentIndex,elementIndex:e.elementIndex,elementType:e.elementType})},onComponentMove:function(e){var a=e.dragIndex,l=e.hoverIndex;"number"===typeof a&&"number"===typeof l&&n(Object(u.swap)(t,a,l))}}))),c.a.createElement("div",{className:D.a.form},c.a.createElement(K,{data:g,type:v.elementType,onSubmit:function(e){n(Object(d.default)(t,(function(a){a[v.componentIndex].value[v.elementIndex].value=e})))}})))))};var U=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.060715ac.chunk.js.map