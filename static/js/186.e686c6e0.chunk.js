"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{155:function(e,r,t){t.d(r,{Z:function(){return u}});t(791);var n=t(689),a=t(87),c={movieLink:"MoviesList_movieLink__QlD4H"},s=t(184),u=function(e){var r=e.moviesList,t=(0,n.TH)();return(0,s.jsx)("ul",{className:c.moviesList,children:r.map((function(e){var r=e.id,n=e.title,u=e.name;return(0,s.jsx)("li",{className:c.movieItem,children:(0,s.jsx)(a.rU,{className:c.movieLink,to:"/movies/".concat(r),state:{from:t},children:(0,s.jsx)("h2",{children:null!==n&&void 0!==n?n:u})})},r)}))})}},211:function(e,r,t){t.d(r,{G:function(){return n}});var n={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}},216:function(e,r,t){t.d(r,{Ai:function(){return l},Hx:function(){return v},Y5:function(){return f},wr:function(){return i},xc:function(){return p}});var n=t(861),a=t(757),c=t.n(a),s=t(243),u="https://api.themoviedb.org/3",o="d2ed1712f75ea64103909f0dfb022753",i=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/trending/all/day?api_key=").concat(o));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query='").concat(r,"'"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(r,"?api_key=").concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(r,"/credits?api_key=").concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},186:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(791),o=t(596),i=t(211),l=t(643),f=t(216),p=t(155),v={},m=t(184),d=function(e){var r=e.onChange,t=(0,u.useState)(""),n=(0,a.Z)(t,2),c=n[0],s=n[1];return(0,m.jsxs)("form",{className:v.form,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;if(""===c.trim())return o.Am.warn("Please enter movie search query",i.G);r(c),t.reset()},children:[(0,m.jsx)("input",{className:v.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",required:!0,defaultValue:c,onChange:function(e){s(e.currentTarget.value.toLowerCase())}}),(0,m.jsx)("button",{type:"submit",className:v.button,children:(0,m.jsx)("span",{className:v.buttonLabel,children:"Search"})})]})},h=t(87),x=function(){var e=(0,u.useState)(null),r=(0,a.Z)(e,2),t=r[0],c=r[1],v=(0,u.useState)(!1),x=(0,a.Z)(v,2),g=x[0],w=x[1],y=(0,u.useState)(null),k=(0,a.Z)(y,2),b=k[0],Z=k[1],j=(0,h.lr)(),_=(0,a.Z)(j,2),C=_[0],L=_[1],A=C.get("query"),N=Array.isArray(t)&&0!==t.length;(0,u.useEffect)((function(){if(A){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,f.Ai)(A);case 4:r=e.sent,c(r),o.Am.success("Movies were successfully fetched!",i.G),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0.message),o.Am.error(e.t0.message,i.G);case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[A,N]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(d,{onChange:function(e){if(""===e)return L({}),o.Am.warn("Please enter movie search query",i.G);L({query:e})}}),null!==b&&(0,m.jsxs)("p",{className:"c-error",children:["Oops, some error occured. Please, try again later. Error: ",b]}),g&&(0,m.jsx)(l.VF,{height:"100",width:"100",color:"#5800a5",secondaryColor:"#e08e00",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),N&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(p.Z,{moviesList:t})})]})}}}]);
//# sourceMappingURL=186.e686c6e0.chunk.js.map