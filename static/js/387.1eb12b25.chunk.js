"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n,a=t(861),c=t(439),u=t(757),s=t.n(u),i=t(390),o=t(689),p=t(791),l=t(168),f=t(444).default.div(n||(n=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n\n  &:nth-child(odd) {\n    background-color: rgb(255, 231, 203);\n  }\n"]))),d=t(184),v=new i.V,h=function(){var e=(0,o.UO)().movieId,r=(0,p.useState)(null),t=(0,c.Z)(r,2),n=t[0],u=t[1],i=(0,o.s0)();return(0,p.useEffect)((function(){var r=new AbortController;function t(){return(t=(0,a.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.getMovieDetails("movie/".concat(e,"/credits"),r);case 3:n=t.sent,u(n),t.next=12;break;case 7:if(t.prev=7,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code){t.next=11;break}return t.abrupt("return");case 11:console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){r.abort()}}),[e,i]),(0,d.jsx)(d.Fragment,{children:n?null===n||void 0===n?void 0:n.cast.map((function(e){return(0,d.jsxs)(f,{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:"".concat(e.name),width:"100"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:["Name: ",e.name]}),(0,d.jsxs)("p",{children:["Character: ",e.character]})]})]},e.id)})):"We don't have any cast for this movie"})}},390:function(e,r,t){t.d(r,{V:function(){return l}});var n=t(683),a=t(861),c=t(671),u=t(144),s=t(757),i=t.n(s),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p={api_key:"ee11dca6bb556f59ebf7af76deb30565"},l=function(){function e(){(0,c.Z)(this,e)}return(0,u.Z)(e,[{key:"getTrending",value:function(){var e=(0,a.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("trending/movie/day",{signal:r.signal,params:p});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:if(e.prev=7,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code){e.next=11;break}return e.abrupt("return");case 11:console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},{key:"getMovie",value:function(){var e=(0,a.Z)(i().mark((function e(r,t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("search/movie",{signal:t.signal,params:(0,n.Z)((0,n.Z)({},p),{},{query:r})});case 3:return a=e.sent,e.abrupt("return",a.data.results);case 7:if(e.prev=7,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code){e.next=11;break}return e.abrupt("return");case 11:console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,t){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,a.Z)(i().mark((function e(r,t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(r,{signal:t.signal,params:p});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=387.1eb12b25.chunk.js.map