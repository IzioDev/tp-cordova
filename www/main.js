!function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});t.exports=i},function(t,e,a){"use strict";var n,r,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=(r={},function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}),f=[];function p(t){for(var e=-1,n=0;n<f.length;n++)if(f[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],l=n[i]||0,c="".concat(i," ").concat(l);n[i]=l+1;var s=p(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(f[s].references++,f[s].updater(u)):f.push({identifier:c,updater:v(u,e),references:1}),r.push(c)}return r}function l(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=a.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])}),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,u=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}var h=null,y=0;function v(e,t){var n,r,o;if(t.singleton){var a=y++;n=h=h||l(t),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=l(t),r=function(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,t),o=function(){var t;null!==(t=n).parentNode&&t.parentNode.removeChild(t)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}t.exports=function(t,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=o());var l=c(t=t||[],i);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<l.length;e++){var n=p(l[e]);f[n].references--}for(var r=c(t,i),o=0;o<l.length;o++){var a=p(l[o]);0===f[a].references&&(f[a].updater(),f.splice(a,1))}l=r}}}},function(t,e,n){(e=n(3)(!1)).push([t.i,"html,body{height:100%}body{margin:0;background-color:#fffdd0}.centered-horizontally{padding:0;margin:0;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;align-items:center;justify-content:center}.centered{height:100vh;padding:0;margin:0;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;align-items:center;justify-content:center}.player-avatar-image{margin-left:auto;margin-right:auto;display:block}#start-play-button{display:none}.primary-btn{background-color:#28a745}.board{border:1px solid black;margin:2px;margin-left:0;padding:2px;display:inline-block;background:#69c}.board .row{margin:0;padding:0}.board .row .cell{display:inline-block;width:calc(100vw / 4);height:calc(100vh / 4);margin:3px;padding:0;background:#e6e6e6;border:1px solid #999}.board .row .cell:not([player]){cursor:pointer}.board .row .cell:not([player]):hover{background:#d9d9d9}.image-container{display:none}.error-message{display:none;color:red}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(n){var c=[];return c.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}(r),a=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},c.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<t.length;i++){var l=[].concat(t[i]);n&&r[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),c.push(l))}},c}},function(t,e,n){"use strict";n.r(e),n.d(e,"Application",function(){return N});n(0);var r=(o.prototype.switchToPage=function(t,e){console.log("ROUTER - switch to page",t);var n=this.controllers.get(t);if(!n)throw new Error("Cannot find controller named: "+t);this.activeController&&this.activeController.onHide(),$.mobile.changePage("#page-"+t),n.onShow(e),this.activeController=n},o.prototype.setControllers=function(t){this.controllers=t},o);function o(){}var a=(i.prototype.onShow=function(t){},i.prototype.onHide=function(){},i.prototype.switchToPage=function(t,e){void 0===e&&(e=null),this.router.switchToPage(t,e)},i);function i(t){if(!t)throw new Error("If you overrided the constructor controller, make sure to pass the router in the super call");this.router=t}var l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(t,i,l,c){return new(l=l||Promise)(function(n,e){function r(t){try{a(c.next(t))}catch(t){e(t)}}function o(t){try{a(c.throw(t))}catch(t){e(t)}}function a(t){var e;t.done?n(t.value):((e=t.value)instanceof l?e:new l(function(t){t(e)})).then(r,o)}a((c=c.apply(t,i||[])).next())})},s=function(n,r){var o,a,i,t,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,a&&(i=2&e[0]?a.return:e[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,e[1])).done)return i;switch(a=0,i&&(e=[2&e[0],i.value]),e[0]){case 0:case 1:i=e;break;case 4:return l.label++,{value:e[1],done:!1};case 5:l.label++,a=e[1],e=[0];continue;case 7:e=l.ops.pop(),l.trys.pop();continue;default:if(!(i=0<(i=l.trys).length&&i[i.length-1])&&(6===e[0]||2===e[0])){l=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){l.label=e[1];break}if(6===e[0]&&l.label<i[1]){l.label=i[1],i=e;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(e);break}i[2]&&l.ops.pop(),l.trys.pop();continue}e=r.call(n,l)}catch(t){e=[6,t],a=0}finally{o=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},d=(u.prototype.takeAvatarPicture=function(){return c(this,void 0,void 0,function(){var r,o,a=this;return s(this,function(t){return r=window.innerWidth&&document.documentElement.clientWidth?Math.min(window.innerWidth,document.documentElement.clientWidth):window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth,o=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),[2,new Promise(function(e,n){window.navigator.camera.getPicture(function(t){a.avatarBase64Image=t,e(t)},function(t){return n(t)},{allowEdit:!0,targetWidth:r/4,targetHeight:o/4})})]})})},u.fromLocalStorage=function(t){var e=localStorage.getItem("player-"+t);if(!e)return null;try{var n=JSON.parse(e);return new u(l({},n))}catch(t){return null}},u.allFromLocalStorage=function(){for(var t=[],e=0;;){var n=localStorage.key(e);if(null===n)return t;if(-1!==n.indexOf("player")){var r=u.fromLocalStorage(n.replace("player-",""));r&&t.push(r)}e++}},u.prototype.saveToLocalStorage=function(){localStorage.setItem("player-"+this.nickName,JSON.stringify({nickName:this.nickName,avatarBase64Image:this.avatarBase64Image,victoryCount:this.victoryCount,defeatCount:this.defeatCount}))},u);function u(t){var e=t.playerNumber,n=t.nickName,r=t.avatarBase64Image,o=t.victoryCount,a=t.defeatCount;this.number=e,this.nickName=n,this.avatarBase64Image=r,this.victoryCount=null!=o?o:0,this.defeatCount=null!=a?a:0}var f,p,h,y,v=(f=function(t,e){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}f(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),g=function(t,i,l,c){return new(l=l||Promise)(function(n,e){function r(t){try{a(c.next(t))}catch(t){e(t)}}function o(t){try{a(c.throw(t))}catch(t){e(t)}}function a(t){var e;t.done?n(t.value):((e=t.value)instanceof l?e:new l(function(t){t(e)})).then(r,o)}a((c=c.apply(t,i||[])).next())})},m=function(n,r){var o,a,i,t,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,a&&(i=2&e[0]?a.return:e[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,e[1])).done)return i;switch(a=0,i&&(e=[2&e[0],i.value]),e[0]){case 0:case 1:i=e;break;case 4:return l.label++,{value:e[1],done:!1};case 5:l.label++,a=e[1],e=[0];continue;case 7:e=l.ops.pop(),l.trys.pop();continue;default:if(!(i=0<(i=l.trys).length&&i[i.length-1])&&(6===e[0]||2===e[0])){l=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){l.label=e[1];break}if(6===e[0]&&l.label<i[1]){l.label=i[1],i=e;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(e);break}i[2]&&l.ops.pop(),l.trys.pop();continue}e=r.call(n,l)}catch(t){e=[6,t],a=0}finally{o=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}},b=(v(w,p=a),w.prototype.isThereMissingAvatarOnPlayers=function(){return!!this.players.find(function(t){return!t.avatarBase64Image})},w.prototype.onShow=function(t){var e=$(".add-image-button"),n=$(".confirm-nickname"),l=this;n.on("click",function(){var t=parseInt($(this).attr("player")),e=$("#nickname-"+t).val(),n=$("#error-message-"+t);if(""===e)return n.text("Le pseudo ne peut pas être vide.").show();if(e.length<3)return n.text("Le pseudo doit contenir au moins 3 caractères.").show();for(var r=0,o=l.players;r<o.length;r++){var a=o[r];if(a.nickName===e&&a.number!==t)return n.text("Les deux joueurs ne peuvent pas avoir le même pseudo.").show()}n.hide();var i=d.fromLocalStorage(e);null!==i?(i.number=t,l.players[t-1]=i,$("#image-p"+t).attr("src","data:image/png;base64,"+i.avatarBase64Image),l.isThereMissingAvatarOnPlayers()||l.displayStartPlayButton()):l.players[t-1].nickName=e,$("#image-container-"+t).show()}),e.on("click",function(){return g(this,void 0,void 0,function(){var e,n;return m(this,function(t){switch(t.label){case 0:return e=parseInt($(this).attr("player")),[4,l.players[e-1].takeAvatarPicture()];case 1:return n=t.sent(),$("#image-p"+e).attr("src","data:image/png;base64,"+n),l.isThereMissingAvatarOnPlayers()||l.displayStartPlayButton(),[2]}})})})},w.prototype.displayStartPlayButton=function(){var n=this;$("#start-play-button").show().on("click",function(){for(var t=0,e=n.players;t<e.length;t++)e[t].saveToLocalStorage();n.switchToPage("game",n.players)})},w.prototype.onHide=function(){$("#start-play-button").hide().off(),$(".add-image-button").off(),$(".confirm-nickname").off(),$("#image-p1").attr("src",""),$("#image-p2").attr("src",""),$("#nickname-1").off(),$("#nickname-2").off()},w);function w(t){var e=p.call(this,t)||this;return e.name="home",e.players=[new d({playerNumber:1}),new d({playerNumber:2})],e}(y=h=h||{})[y.VIDE=0]="VIDE",y[y.P1=1]="P1",y[y.P2=2]="P2";var P=(x.prototype.viderGrille=function(){this.cases=[[h.VIDE,h.VIDE,h.VIDE],[h.VIDE,h.VIDE,h.VIDE],[h.VIDE,h.VIDE,h.VIDE]],console.log("Grille vidée : ",this.cases)},x.prototype.getCaseStatus=function(t,e){if(t<0||2<t)throw new Error("X out of range: "+t);if(e<0||2<e)throw new Error("Y out of range: "+e);return this.cases[t][e]},x.prototype.setCaseStatus=function(t,e,n){if(t<0||2<t)throw new Error("X out of range");if(e<0||2<e)throw new Error("Y out of range");return this.cases[t][e]=n,this},x.prototype.getCases=function(){return this.cases},x.prototype.areAllCellsPlayed=function(){for(var t=0,e=this.cases;t<e.length;t++)for(var n=0,r=e[t];n<r.length;n++)if(r[n]===h.VIDE)return!1;return!0},x);function x(){this.viderGrille()}var C,k,S,E,I=(O.prototype.getGrille=function(){return this.grille},O.prototype.playOnCell=function(t,e){this.lastPlay&&2!==this.lastPlay.number?(this.lastPlay=this.players[1],this.grille.setCaseStatus(t,e,h.P2)):(this.lastPlay=this.players[0],this.grille.setCaseStatus(t,e,h.P1))},O.prototype.isCellPlayedByPlayer=function(t,e,n){var r=this.grille.getCaseStatus(t,e);return r!==h.VIDE&&(r===h.P1&&1===n.number||r===h.P2&&2===n.number)},O.prototype.getPlayerFromPlayedCell=function(t,e){return this.grille.getCaseStatus(t,e)===h.P1?this.players[0]:this.players[1]},O.prototype.getWinnerIfExists=function(){for(var o=this,t=0,e=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]];t<e.length;t++){var n=e[t].reduce(function(t,e){var n=e[0],r=e[1];return null===t||o.grille.getCaseStatus(n,r)===h.VIDE||void 0!==t&&!o.isCellPlayedByPlayer(n,r,t)?null:t||o.getPlayerFromPlayedCell(n,r)},void 0);if(n)return n}return null},O);function O(t){this.players=t,this.grille=new P}function _(){var t=null!==k&&k.apply(this,arguments)||this;return t.name="game",t}function T(t){var e=E.call(this,t)||this;return e.name="score",e}var j=[b,((C=function(t,e){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}C(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(_,k=a),_.prototype.onShow=function(t){this.game=new I(t),this.displayGrille()},_.prototype.onHide=function(){$(".cell").off(),$("#board-container").html("")},_.prototype.displayGrille=function(){function t(t,e,n){return n===h.VIDE?'<div x="'+(t+1)+'" y="'+(e+1)+'" class="cell"></div>':'<div x="'+(t+1)+'" y="'+(e+1)+'" player='+(n===h.P1?1:2)+' class="cell"></div>'}var a=this,e=this.game.getGrille().getCases();$("#board-container").html('\n      <div class="board">\n        <div class="row">\n          '+t(0,0,e[0][0])+"\n          "+t(1,0,e[1][0])+"\n          "+t(2,0,e[2][0])+'\n        </div>\n        <div class="row">\n          '+t(0,1,e[0][1])+"\n          "+t(1,1,e[1][1])+"\n          "+t(2,1,e[2][1])+'\n        </div>\n        <div class="row">\n          '+t(0,2,e[0][2])+"\n          "+t(1,2,e[1][2])+"\n          "+t(2,2,e[2][2])+"\n        </div>\n      </div>\n    "),e.map(function(t,o){t.map(function(t,e){if(t!==h.VIDE){var n=$(".cell[x="+(o+1)+"][y="+(e+1)+"]"),r=t===h.P1?a.game.players[0]:a.game.players[1];n.css("background-image",'url("data:image/png;base64,'+r.avatarBase64Image+'")')}})}),this.initClickHandlersForGrille()},_.prototype.initClickHandlersForGrille=function(){var r=this;$(".cell").on("click",function(){var t=$(this),e=parseInt(t.attr("x"))-1,n=parseInt(t.attr("y"))-1;t.attr("player")||(r.game.playOnCell(e,n),r.displayGrille(),r.processNewGameState())})},_.prototype.processNewGameState=function(){var t=this.game.getWinnerIfExists();t?this.router.switchToPage("score",{players:this.game.players,winner:t}):this.game.grille.areAllCellsPlayed()&&this.router.switchToPage("score",{players:this.game.players,winner:null})},_),((S=function(t,e){return(S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}S(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(T,E=a),T.prototype.onHide=function(){$("#play-again-button").off(),$("#winner-message").text(""),$("#winner-avatar").attr("src","").css("display","none")},T.prototype.onShow=function(t){var e=this,n=t.players,r=t.winner;console.log("winner",r);var o=$("#winner-message");if(r){var a=$("#winner-avatar");r.victoryCount++,o.text("Le gagnant est "+r.nickName+", il a maintenant "+r.victoryCount+" victoires."),a.attr("src","data:image/png;base64,"+r.avatarBase64Image).css("display","block");for(var i=0,l=n;i<l.length;i++)(p=l[i])!==r&&p.defeatCount++,p.saveToLocalStorage()}else o.text("Match nul !");var c=d.allFromLocalStorage(),s=$("#score-table-container");s.html("");for(var u=0,f=c;u<f.length;u++){var p=f[u];s.append("\n        <tr>\n            <th>"+p.nickName+"</th>\n            <th>"+p.victoryCount+"</th>\n            <th>"+p.defeatCount+"</th>\n        </tr>\n      ")}$("#play-again-button").on("click",function(){console.log("play again (to home)"),e.switchToPage("home")})},T)],N=(M.prototype.initiateControllers=function(){this.router=new r;for(var t=0,e=j;t<e.length;t++){var n=new e[t](this.router);if(!n.name)throw new Error("Controller should have a name property.");this.controllers.set(n.name,n)}this.router.setControllers(this.controllers)},M.prototype.onDeviceReady=function(){var t=this;this.receivedEvent("deviceready"),window.location.hash&&"#page-loading"!==window.location.hash?this.router.switchToPage("home"):setTimeout(function(){t.router.switchToPage("home")},2e3)},M.prototype.receivedEvent=function(t){console.log("[Application#receivedEvent] id = ",t)},M);function M(){this.controllers=new Map,console.log("Hello HelloWorldssss"),document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1),this.initiateControllers()}document.addEventListener("DOMContentLoaded",function(){console.log("jQuery Ready, now instantiate the Application"),new N},!1)}]);