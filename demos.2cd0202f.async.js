(self.webpackChunk_quansitech_pallas_h5=self.webpackChunk_quansitech_pallas_h5||[]).push([[433],{44559:function(O,e,a){"use strict";a.r(e);var u=a(6136),n=a(67294),o=a(85893);e.default=function(){return(0,o.jsx)(u.w,{action:"https://raw.githubusercontent.com/quansitech/pallas-h5/master/mock/upload.json?cate=image",uploadTo:"cos"})}},53303:function(O,e,a){"use strict";a.r(e);var u=a(6136),n=a(67294),o=a(85893);e.default=function(){return(0,o.jsx)(u.w,{action:"https://raw.githubusercontent.com/quansitech/pallas-h5/master/mock/upload.json?cate=image",hashCheck:!1})}},8022:function(O,e,a){"use strict";a.r(e);var u=a(6136),n=a(67294),o=a(85893);e.default=function(){return(0,o.jsx)(u.w,{action:"https://raw.githubusercontent.com/quansitech/pallas-h5/master/mock/upload.json?cate=image"})}},49889:function(O,e,a){"use strict";a.r(e);var u=a(6136),n=a(67294),o=a(85893);e.default=function(){return(0,o.jsx)(u.w,{action:"https://raw.githubusercontent.com/quansitech/pallas-h5/master/mock/upload.json?cate=image",uploadTo:"oss"})}},7052:function(O,e,a){"use strict";a.r(e);var u=a(6136),n=a(67294),o=a(85893);e.default=function(){return(0,o.jsx)(u.w,{action:"https://raw.githubusercontent.com/quansitech/pallas-h5/master/mock/upload.json?cate=image",uploadTo:"tos"})}},42233:function(O,e,a){"use strict";a.r(e),a.d(e,{default:function(){return c}});var u=a(17061),n=a.n(u),o=a(861),p=a.n(o),y=a(17156),M=a.n(y),I=a(27424),A=a.n(I),W=a(6136),g=a(67294),B={delayRun:function(){var i=M()(n()().mark(function t(r,T){var h;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return h=new Promise(function(R,m){setTimeout(M()(n()().mark(function E(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,r();case 3:R(),s.next=9;break;case 6:s.prev=6,s.t0=s.catch(0),m(s.t0);case 9:case"end":return s.stop()}},E,null,[[0,6]])})),T)}),f.abrupt("return",h);case 2:case"end":return f.stop()}},t)}));function l(t,r){return i.apply(this,arguments)}return l}(),sleep:function(l){return new Promise(function(t){return setTimeout(t,l)})}},U=B,j=a(85893),$=function(l){for(var t=[],r=l*10+1;t.length<=5;r++)t.push(r);return t},P=0,c=function(){var i=g.useState(!1),l=A()(i,2),t=l[0],r=l[1],T=g.useState($(P++)),h=A()(T,2),C=h[0],f=h[1],R=function(){var m=M()(n()().mark(function E(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:P>5?(r(!0),P=0):U.delayRun(M()(n()().mark(function v(){return n()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:f([].concat(p()(C),p()($(P++))));case 1:case"end":return D.stop()}},v)})),1e3);case 1:case"end":return s.stop()}},E)}));return function(){return m.apply(this,arguments)}}();return(0,j.jsxs)("div",{className:"sample-loadmore",children:[C.map(function(m,E){return(0,j.jsx)("div",{className:"item-number",children:m},E)}),(0,j.jsx)("div",{className:"load-more-wrap",children:(0,j.jsx)(W.f,{onLoadMore:R,end:t})})]})}},6136:function(O,e,a){"use strict";a.d(e,{w:function(){return $},f:function(){return B}});var u=a(17061),n=a.n(u),o=a(17156),p=a.n(o),y=a(27424),M=a.n(y),I=a(67294),A=a(63978),W=a(42532),g=a(85893),B=function(c){var i=c.onLoadMore,l=c.end,t=l===void 0?!1:l,r=c.className,T=r===void 0?"pallas-load-more":r,h=(0,I.useRef)(null),C=(0,W.Z)(h),f=M()(C,1),R=f[0];(0,I.useEffect)(function(){!t&&R&&m()});var m=function(){var E=p()(n()().mark(function L(){return n()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,i();case 2:case"end":return v.stop()}},L)}));return function(){return E.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:T,ref:h,children:[!t&&(0,g.jsxs)("div",{className:"load-more-loading",children:[(0,g.jsx)(A.wW,{}),(0,g.jsx)("span",{className:"loading-tips",children:"\u52A0\u8F7D\u4E2D..."})]}),t&&(0,g.jsx)("div",{className:"load-more-finished",children:"\u5DF2\u7ECF\u5230\u5E95\u4E86"})]})},U=a(74956),j=function(){var P=p()(n()().mark(function c(i){var l;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a(35678)("./".concat(i));case 2:return l=r.sent,r.abrupt("return",l.default);case 4:case"end":return r.stop()}},c)}));return function(i){return P.apply(this,arguments)}}(),$=function(c){var i=c.className,l=i===void 0?"pallas-image-uploader":i,t=c.value,r=t===void 0?[]:t,T=c.hashCheck,h=T===void 0?!0:T,C=c.uploadTo,f=C===void 0?"server":C,R=c.action,m=c.onChange,E=function(){var s=p()(n()().mark(function v(N){var D,K,S;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(D={file:N,action:R,hashId:""},!h){d.next=7;break}return d.next=4,(0,U.ZP)();case 4:return d.next=6,(0,U.UM)(N);case 6:D.hashId=d.sent;case 7:return d.next=9,j(f);case 9:return K=d.sent,d.next=12,K.upload(D.file,D.action,D.hashId);case 12:return S=d.sent,d.abrupt("return",S);case 14:case"end":return d.stop()}},v)}));return function(N){return s.apply(this,arguments)}}(),L=function(v){m&&m(v)};return(0,g.jsx)(A.wA,{className:l,value:r,onChange:L,upload:E,multiple:!0})}},35678:function(O,e,a){var u={"./cos":[729,729],"./cos.ts":[729,729],"./oss":[86575,575],"./oss.ts":[86575,575],"./server":[95878,878],"./server.ts":[95878,878],"./tos":[9840,840],"./tos.ts":[9840,840]};function n(o){if(!a.o(u,o))return Promise.resolve().then(function(){var M=new Error("Cannot find module '"+o+"'");throw M.code="MODULE_NOT_FOUND",M});var p=u[o],y=p[0];return a.e(p[1]).then(function(){return a(y)})}n.keys=function(){return Object.keys(u)},n.id=35678,O.exports=n}}]);
