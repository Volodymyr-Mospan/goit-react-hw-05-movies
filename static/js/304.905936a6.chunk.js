"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{304:function(e,r,n){n.r(r),n.d(r,{default:function(){return x}});var t,a=n(861),u=n(439),c=n(757),s=n.n(c),i=n(87),o=n(689),l=n(791),p=n(390),f=n(787),d=n(168),v=n(444).default.li(t||(t=(0,d.Z)(["\n  padding: 5px;\n\n  &:nth-child(odd) {\n    background-color: rgb(255, 231, 203);\n  }\n"]))),h=n(483),g=n(184),b=new p.V,x=function(){var e=(0,l.useState)(null),r=(0,u.Z)(e,2),n=r[0],t=r[1],c=(0,o.TH)(),p=(0,l.useState)(!1),d=(0,u.Z)(p,2),x=d[0],k=d[1];return(0,l.useEffect)((function(){var e=new AbortController;function r(){return(r=(0,a.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,b.getTrending(e);case 3:n=r.sent,t(n),k(!1),r.next=13;break;case 8:if(r.prev=8,r.t0=r.catch(0),"ERR_CANCELED"!==r.t0.code){r.next=12;break}return r.abrupt("return");case 12:console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}return k(!0),function(){r.apply(this,arguments)}(),function(){e.abort()}}),[]),(0,g.jsxs)(f.W2,{children:[(0,g.jsx)("h1",{children:"Trending today"}),x&&(0,g.jsx)(h.a,{}),(0,g.jsx)("ul",{children:!!n&&n.map((function(e){var r;return(0,g.jsx)(v,{children:(0,g.jsx)(i.OL,{to:"/movies/".concat(e.id),state:{from:c},children:null!==(r=e.title)&&void 0!==r?r:e.name})},e.id)}))})]})}},390:function(e,r,n){n.d(r,{V:function(){return p}});var t=n(683),a=n(861),u=n(671),c=n(144),s=n(757),i=n.n(s),o=n(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var l={api_key:"ee11dca6bb556f59ebf7af76deb30565"},p=function(){function e(){(0,u.Z)(this,e)}return(0,c.Z)(e,[{key:"getTrending",value:function(){var e=(0,a.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("trending/movie/day",{signal:r.signal,params:l});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:if(e.prev=7,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code){e.next=11;break}return e.abrupt("return");case 11:console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},{key:"getMovie",value:function(){var e=(0,a.Z)(i().mark((function e(r,n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("search/movie",{signal:n.signal,params:(0,t.Z)((0,t.Z)({},l),{},{query:r})});case 3:return a=e.sent,e.abrupt("return",a.data.results);case 7:if(e.prev=7,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code){e.next=11;break}return e.abrupt("return");case 11:console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,n){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,a.Z)(i().mark((function e(r,n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(r,{signal:n.signal,params:l});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=304.905936a6.chunk.js.map