!function(n){var t={};function e(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return n[o].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)e.d(o,c,function(t){return n[t]}.bind(null,c));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s="e6Wu")}({"5+t+":function(n,t,e){},e6Wu:function(n,t,e){"use strict";e.r(t);e("5+t+");!function(){var n=!0,t=8,e="",o=[],c=[],r=null,a="Sprawdź swój refleks. Zobaczysz 8 figur geometrycznych. Twoim zadaniem jest każdą figurę jak najszybciej kliknąć. Na koniec gry zobaczysz swoje czasy reakcji i średnią wszystkich prób.",i=document.getElementById("submitName"),l=document.getElementById("userName"),u=document.getElementById("intro"),s=document.getElementById("playground"),d=document.getElementById("gameEndBtns"),y=document.getElementById("newPlayer"),f=document.getElementById("playAgain"),m=document.getElementById("shape"),p=document.getElementById("stats"),g=document.getElementById("instruction-box"),h=document.getElementById("instruction"),b=document.getElementById("startBtn"),k=[];function v(){o=[],c=[]}function j(){!function(){var n=function(){var n=[],t=1100*Math.random(),e=300*Math.random();return n.push(t),n.push(e),n}(),t=Math.floor(100*Math.random())+50;m.style.backgroundColor="rgb(".concat(B(),", ").concat(B(),", ").concat(B(),")"),m.style.width="".concat(t,"px"),m.style.height="".concat(t,"px"),m.style.borderRadius=Math.random()>.5?"50%":"0",m.style.top="".concat(n[1],"px"),m.style.left="".concat(n[0],"px"),m.style.display="block"}(),function(){var n=(new Date).getTime();console.log("start: ".concat(n)),c.push(n)}()}function w(){s.style.display="none",d.style.display="block",p.innerHTML=function(){var n="<p>".concat(e," - oto Twoje czasy reakcji:<br></p><p class='numbers'>"),c=0;o.forEach(function(t){c+=t,n+="".concat(t," ms<br>")});var a=Math.floor(c/t);n+="<p>Średni czas reakcji:</p><p class='numbers'>".concat(a," ms</p>"),r.setRecord(a);var i="";return console.log(k),k.forEach(function(n){i+="<span>".concat(n.name,"'s record: ").concat(n.record,"<br></span>")}),"<p>".concat(i,"</p>").concat(n)}(),p.style.display="block"}function E(){s.style.display="block",s.style.width="95%",s.style.minHeight="".concat(.75*window.innerHeight,"px")}function B(){return Math.floor(256*Math.random())}function z(){d.style.display="none",document.getElementById("stats").style.display="none"}function I(){u.style.display="none";var t=new function(n,t){var e=this;this.name=n,this.record=t,this.setRecord=function(n){n<e.record&&(e.record=n)}}(e=""===(e=l.value)||void 0===e?"Nieznajomy":e,1e5);r=t,k.push(r),l.value="",E(),n?h.textContent="Witaj ".concat(e,"! ").concat(a):j()}i.onclick=function(){I()},l.onkeypress=function(n){13===(n.which||n.keyCode)&&I()},m.onclick=function(){!function(){var n=(new Date).getTime();console.log("end: ".concat(n)),c.push(n)}(),function(){var n=c[1]-c[0];console.log("".concat(c[1]," minus ").concat(c[0])),o.push(n),c=[],console.log(o)}(),o.length<t?j():w()},f.onclick=function(n){z(),v(),E(),j()},y.onclick=function(t){n=!1,z(),v(),e=""===e||void 0===e?"Nieznajomy":e,u.style.display="block"},b.onclick=function(){g.style.display="none",j()},v()}()}});
//# sourceMappingURL=index-239a4c71c52ed37960dc.js.map