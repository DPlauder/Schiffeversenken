(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n#content {\n\n    height: 100vh;\n    width: 100vw;\n    grid-template-columns: repeat(2, 1fr);\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n.gameboard{\n    width: 500px;\n    height: 500px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n\n}\n.box {\n    border: 1px solid black;\n}\n.player_ship {\n    background-color: green;\n}\n\n.ship_hit{\n    background-color: red;\n}\n\n.missed_shot{\n    background-color: blue;\n}\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var h=[].concat(e[l]);r&&i[h[0]]||(void 0!==s&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=s),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),o&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=o):h[4]="".concat(o)),t.push(h))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],h=s[l]||0,p="".concat(l," ").concat(h);s[l]=h+1;var d=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(u);else{var f=o(u,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=r(e,o),l=0;l<s.length;l++){var h=n(s[l]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),s=n(569),i=n.n(s),a=n(565),c=n.n(a),l=n(216),h=n.n(l),p=n(589),d=n.n(p),u=n(426),f={};f.styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=h(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;class g{constructor(){this.ships=[]}addShip(e){const t={coordinates:e,sunk:!1,length:e.length};this.ships.push(t)}updateShip(e,t){for(let n=0;n<this.ships.length;n++){const r=this.ships[n];if(-1!==r.coordinates.findIndex((n=>n[0]===e&&n[1]===t)))return r.length-=1,void(0===r.length&&(r.sunk=!0,console.log("Ship destroyed")))}}allShipsDestroyed(){return this.ships.every((e=>e.sunk))}}class m{constructor(e){this.size=e*e,this.overlay=document.getElementById("content"),this.gameboard=document.createElement("div"),this.gameboard.classList.add("gameboard"),this.overlay.appendChild(this.gameboard),this.createBox()}createBox(){for(let e=0;e<this.size;e++){const e=document.createElement("div");e.classList.add("box"),this.gameboard.appendChild(e)}}checkClick(){}}class v{constructor(e="",t=10,n=[2,2,3,3,3,4,4,5]){this.ships_length=n,this.player=e,this.grid=t,this.board=[],this.ships=new g,this.shipCount=0,this.createBoxes()}createBoxes(){new m(this.grid);for(let e=0;e<this.grid;e++){let e=[];for(let t=0;t<this.grid;t++)e.push(t);this.board.push(e)}this.getShipStartpoint()}getShipStartpoint(){for(let e=0;e<this.ships_length.length;e++){const t=this.ships_length[e];let n=!1;for(;!n;){let e=[],r=null,o=null;this.player?(r=[prompt("zeile")],o=[prompt("reihe")]):(r=Math.floor(10*Math.random()),o=Math.floor(Math.random()*(10-t))),e.push(r),e.push(o);const s=this.createFullShip(e,t);s&&this.placeShip(s)?(this.placeShip(s),n=!0,this.ships.addShip(s),this.shipCount+=1):console.log("Platzieren nicht möglich")}}this.checkAllShipsPlaced()}createFullShip(e,t){let n=parseInt(e[0]),r=parseInt(e[1]);const o=[];for(let e=0;e<t;e++){if("O"===this.board[n][r])return null;let e=[n,r];o.push(e),r+=1}return o}placeShip(e){for(let t=0;t<e.length;t++){const n=e[t][0],r=e[t][1];if("O"===this.board[n][r])return!1;this.board[n][r]="O"}return!0}checkAllShipsPlaced(){this.shipCount===this.ships_length.length&&console.log("All ships placed on the board.")}checkHit(e,t){"O"===this.board[e][t]?(this.board[e][t]="X",console.log("Hit"),this.ships.updateShip(e,t)):"X"===this.board[e][t]||"M"===this.board[e][t]?console.log("Already Shot There"):(console.log("Miss"),this.board[e][t]="M")}checkGameOver(){if(!0===this.ships.allShipsDestroyed())return console.log("Alle Schiffe versenkt"),!0}}class b{constructor(e=""){this.player=e,this.board=new v(this.player)}}(()=>{const e=new b,t=new b;console.log("p1",e),console.log("p2",t)})()})()})();