!function(n,t,e,o){"use strict";const r=e.findByProps("sendMessage"),c=function(n){n.content=function(n){return n.replace(t.HTTP_REGEX_MULTI,(function(n){let t;try{t=new URL(n)}catch{return n}return"x.com"===t.hostname&&(t.hostname="fxtwitter.com"),t.toString()}))}(n.content)};let u;var a={onLoad:function(){return u=function(){const n=new Array;return n.push(o.before("sendMessage",r,(function(n){c(n[1])}))),function(){n.forEach((function(n){return n()}))}}()},onUnload:function(){return u?.()}};n.default=a,Object.defineProperty(n,"__esModule",{value:!0})}({},vendetta.constants,vendetta.metro,vendetta.patcher);