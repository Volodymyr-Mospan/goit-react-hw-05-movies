"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{310:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r,a=n(439),u=n(791),i=n(87),c=n(689),s=n(390),o=n(787),l=n(168),f=n(444).default.li(r||(r=(0,l.Z)(["\n  padding: 5px;\n\n  &:nth-child(odd) {\n    background-color: rgb(255, 231, 203);\n  }\n"]))),p=n(483),d=n(184),v=new s.V,h=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),n=t[0],r=t[1],s=(0,u.useState)((function(){var e;return null!==(e=n.get("query"))&&void 0!==e?e:""})),l=(0,a.Z)(s,2),h=l[0],g=l[1],b=(0,u.useState)(null),x=(0,a.Z)(b,2),m=x[0],Z=x[1],k=(0,u.useState)(!1),y=(0,a.Z)(k,2),w=y[0],_=y[1],j=(0,c.TH)();(0,u.useEffect)((function(){var e=n.get("query"),t=new AbortController;if(e)return g(e),_(!0),v.getMovie(e,t).then((function(e){return Z(e)})).then((function(){return _(!1)})),function(){t.abort()}}),[n]);return(0,d.jsxs)(o.W2,{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(""!==h?{query:h}:{})},children:[(0,d.jsx)("input",{type:"text",value:h,onChange:function(e){g(e.currentTarget.value)}}),(0,d.jsx)("button",{children:"Search"})]}),w&&(0,d.jsx)(p.a,{}),!w&&m&&(0,d.jsx)("ul",{children:m.map((function(e){var t;return(0,d.jsx)(f,{children:(0,d.jsxs)(i.OL,{to:"".concat(e.id),state:{from:j},children:[null!==(t=e.title)&&void 0!==t?t:e.name," (",Number.parseInt(e.release_date)||"no date",")"]})},e.id)}))}),!w&&!!m&&!m.length&&(0,d.jsx)("p",{children:"Nothing found"})]})}},390:function(e,t,n){n.d(t,{V:function(){return f}});var r=n(683),a=n(861),u=n(671),i=n(144),c=n(757),s=n.n(c),o=n(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var l={api_key:"ee11dca6bb556f59ebf7af76deb30565"},f=function(){function e(){(0,u.Z)(this,e)}return(0,i.Z)(e,[{key:"getTrending",value:function(){var e=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("trending/movie/day",{signal:t.signal,params:l});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:if(e.prev=7,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code){e.next=11;break}return e.abrupt("return");case 11:console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovie",value:function(){var e=(0,a.Z)(s().mark((function e(t,n){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("search/movie",{signal:n.signal,params:(0,r.Z)((0,r.Z)({},l),{},{query:t})});case 3:return a=e.sent,e.abrupt("return",a.data.results);case 7:if(e.prev=7,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code){e.next=11;break}return e.abrupt("return");case 11:console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,a.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(t,{signal:n.signal,params:l});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=310.e1ea5feb.chunk.js.map