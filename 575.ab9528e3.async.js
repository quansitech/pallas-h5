"use strict";(self.webpackChunk_quansitech_pallas_h5=self.webpackChunk_quansitech_pallas_h5||[]).push([[575],{86575:function(M,m,_){_.r(m);var v=_(17061),i=_.n(v),E=_(42122),c=_.n(E),b=_(17156),p=_.n(b),f=_(86327);m.default={upload:function(){var n=p()(i()().mark(function t(r,d,e){var u,o,h,O,s,D,y,g,T,P;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(u=new FormData,o=new URLSearchParams(d),e&&o.append("hash_id",e),h=r.type,h){a.next=8;break}return a.next=7,f.Z.getFileType.start(r);case 7:h=a.sent;case 8:return o.append("vendor_type","aliyun_oss"),o.append("file_type",h),o.append("title",r.name),a.next=13,fetch(decodeURIComponent(o.toString()));case 13:return O=a.sent,a.next=16,O.json();case 16:if(s=a.sent,parseInt(s.status)!==2){a.next=19;break}return a.abrupt("return",{file_id:s.file_id,url:s.file_url});case 19:D=s.oss_meta?JSON.parse(s.oss_meta):{},y=c()(c()({key:s.dir+f.Z.getSuffix(r.name),policy:s.policy,OSSAccessKeyId:s.accessid,success_action_status:"200",callback:s.callback,signature:s.signature},JSON.parse(s.callback_var)),D);for(g in y)u.append(g,y[g]);return u.append("file",r),a.next=25,fetch(s.host,{method:"POST",body:u});case 25:return T=a.sent,a.next=28,T.json();case 28:return P=a.sent,a.abrupt("return",P);case 30:case"end":return a.stop()}},t)}));function l(t,r,d){return n.apply(this,arguments)}return l}()}},86327:function(M,m,_){var v=_(17061),i=_.n(v),E=_(17156),c=_.n(E),b={getFileType:{fileToArrayBuffer:function(){var p=c()(i()().mark(function n(l,t){var r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=new FileReader,r.onload=function(u){if(typeof t=="function")return t(u.target.result)},r.readAsArrayBuffer(l);case 3:case"end":return e.stop()}},n)}));function f(n,l){return p.apply(this,arguments)}return f}(),getFileTypeViaHeader:function(f){for(var n=new Uint8Array(f),l=n.slice(0,4),t=n.slice(0,16),r="",d="",e,u=0;u<l.length;u++)r+=l[u].toString(16);for(var o=0;o<t.length;o++)d+=t[o].toString(16);switch(r){case"89504e47":e="image/png";break;case"47494638":e="image/gif";break;case"ffd8ffDB":case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":e="image/jpeg";break;case"00020":case"00018":case"00024":case"0001c":d.lastIndexOf("000")===22?e="image/heic":e="unknown";break;default:e="unknown";break}return e},start:function(){var p=c()(i()().mark(function n(l){var t,r;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,r=new Promise(function(u){t.fileToArrayBuffer(l,function(o){var h=t.getFileTypeViaHeader(o);u(h)})}),e.abrupt("return",r);case 3:case"end":return e.stop()}},n,this)}));function f(n){return p.apply(this,arguments)}return f}()},getSuffix:function(f){var n=f.lastIndexOf("."),l="";return n!==-1&&(l=f.substring(n)),l}};m.Z=b}}]);
