(this.webpackJsonpmobile=this.webpackJsonpmobile||[]).push([[0],{25:function(e,t,n){e.exports=n(77)},77:function(e,t,n){"use strict";n.r(t);var a,l=n(0),o=n.n(l),s=n(23),c=n.n(s),i=(n(19),n(24)),r=n(1),m=n(3),u=n(2),y=n.n(u);!function(e){e.UPDATE_DATA="UPDATE_DATA",e.UPDATE_EVENT="UPDATE_EVENT"}(a||(a={}));var E=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(l.useCallback)((function(e){!function(e,t){var n=e.data,l=n.type,o=n.payload;l!==a.UPDATE_DATA?l!==a.UPDATE_EVENT?console.warn("type:".concat(l," \u672a\u5339\u914d")):t.UPDATE_EVENT(o):t.UPDATE_DATA(o)}(e,{UPDATE_DATA:function(e){s(e)},UPDATE_EVENT:function(e){console.log(e)}})}),[]);return Object(l.useEffect)((function(){return window.addEventListener("message",c),function(){return window.removeEventListener("message",c)}}),[c]),o.a.createElement("div",{className:"Index"},n.map((function(e){return o.a.createElement(m.a,{style:e.style,componentType:e.type,key:e.__key},(e.value||[]).map((function(t){return e.type===r.JigsawComponents.Title?o.a.createElement(m.h,{style:e.style,key:t.__key,name:y()(t,"value.title"),desc:y()(t,"value.desc")}):e.type===r.JigsawComponents.Cube||e.type===r.JigsawComponents.CubeRow4?o.a.createElement(m.e,{key:t.__key,img:y()(t,"value.img")}):e.type===r.JigsawComponents.Roll?o.a.createElement(m.g,{style:e.style,key:t.__key,name:y()(t,"value.title"),desc:y()(t,"value.desc"),img:y()(t,"value.img")}):e.type===r.JigsawComponents.Big?o.a.createElement(m.c,{key:t.__key,style:e.style,img:y()(t,"value.img"),name:y()(t,"value.title"),desc:y()(t,"value.desc")}):e.type===r.JigsawComponents.Line?o.a.createElement(m.f,{key:t.__key,style:e.style,name:y()(t,"value.title"),desc:y()(t,"value.desc"),img:y()(t,"value.img")}):e.type===r.JigsawComponents.Block?o.a.createElement(m.d,{key:t.__key,style:e.style,name:y()(t,"value.title"),desc:y()(t,"value.desc"),img:y()(t,"value.img")}):e.type===r.JigsawComponents.Swiper?o.a.createElement(m.b,{style:e.style,key:t.__key,img:y()(t,"value.img")}):null})))})))};var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);