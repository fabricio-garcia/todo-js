!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=20)}([function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function s(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var i=n[o],c=e.base?i[0]+e.base:i[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=s(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:b(f,e),references:1}),t.push(d)}return t}function l(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function f(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,m=0;function b(n,e){var r,t,o;if(e.singleton){var i=m++;r=h||(h=l(e)),t=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=l(e),t=p.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=s(r[t]);a[o].references--}for(var i=c(n,e),l=0;l<r.length;l++){var d=s(r[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=i}}}},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([o]).join("\n")}var a,s,c;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},function(n,e,r){var t=r(0),o=r(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(t(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,r){(e=r(1)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),n.exports=e},function(n,e,r){var t=r(0),o=r(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(t(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,r){(e=r(1)(!1)).push([n.i,"html,\r\nbody {\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  background-color: #3d6db4;\r\n  color: #2c302f;\r\n  font-weight: 400;\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nnav {\r\n  width: 100vw;\r\n  display: block;\r\n  color: white;\r\n  background-color: #305287;\r\n  padding: 7px;\r\n}\r\n\r\nnav > ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\nnav li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: xx-large;\r\n  font-weight: 900;\r\n}\r\nnav img {\r\n  width: 40px;\r\n  margin: 0 10px;\r\n  filter: invert(98%) sepia(1%) saturate(76%) hue-rotate(336deg)\r\n    brightness(120%) contrast(100%);\r\n}\r\n\r\nmain {\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n\r\nmain .search {\r\n  max-width: 800px;\r\n  background-color: #305287;\r\n  flex: 1 70%;\r\n  border-radius: 20px;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  display: none;\r\n  justify-content: center;\r\n}\r\n\r\n.search input {\r\n  border-radius: 15px;\r\n  padding: 3px 10px;\r\n  width: 50%;\r\n}\r\n\r\n.search span {\r\n  border-radius: 50%;\r\n  background-color: white;\r\n  color: black;\r\n  width: 36px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.project-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(4, 1fr);\r\n  grid-gap: 15px;\r\n}\r\n\r\n.project {\r\n  height: 300px;\r\n}\r\n\r\n.card {\r\n  background-color: white;\r\n  border-radius: 20px;\r\n  padding: 2em;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.card-header {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.card .add-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  filter: invert(76%) sepia(0%) saturate(0%) hue-rotate(227deg) brightness(97%) contrast(93%);\r\n}\r\n\r\n.card .add-text {\r\n  text-align: center;\r\n  color: #b7b7b7;\r\n  font-size: 1.3rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.project-title {\r\n  flex: 1 auto;\r\n  color: #305287;\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n}\r\n\r\n.card-menu {\r\n  flex: 1 20%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.card-menu div {\r\n  font-weight: 900;\r\n  color: #305287;\r\n}\r\n\r\n.description {\r\n  color: #525650;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.progress progress {\r\n  border-radius: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.progress p {\r\n  text-align: center;\r\n  color: #305287;\r\n  margin-bottom: 2px;\r\n}\r\n\r\nprogress::-webkit-progress-bar {\r\n  border-radius: 15px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;\r\n}\r\n\r\n.date-picker {\r\n  border: none;\r\n  font-weight: 900;\r\n  color: #305287;\r\n}\r\n\r\n.blue-pills{\r\n  margin: 20px 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  color: white;;\r\n}\r\n\r\n.blue-pill {\r\n  background-color: #305287;\r\n  display: flex;\r\n  border-radius: 20px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: xx-large;\r\n  font-weight: 900;\r\n}\r\n\r\n.title-pill {\r\n  flex: 1 40%;\r\n}\r\n\r\n.action-pill {\r\n  flex: 1 60%;\r\n}",""]),n.exports=e},,,,,,,,,,,,,,,function(n,e,r){r(2),r(4),r(21),document.addEventListener("DOMContentLoaded",(function(){console.log("DOMContentLoaded","page-contacts")}))},function(n,e,r){var t=r(0),o=r(22);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(t(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,r){(e=r(1)(!1)).push([n.i,'main {\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.task-description {\r\n  min-width: 500px;\r\n  max-width: 900px;\r\n}\r\n\r\n.card-menu img {\r\n  width: 25px;\r\n  margin: 0 5px;\r\n}\r\n\r\n.erase-icon {\r\n  filter: invert(14%) sepia(94%) saturate(4845%) hue-rotate(351deg) brightness(86%) contrast(108%);\r\n}\r\n\r\n.edit-icon {\r\n  filter: invert(40%) sepia(19%) saturate(1656%) hue-rotate(176deg) brightness(96%) contrast(93%);\r\n}\r\n\r\nform input, form textarea {\r\n  border: none;\r\n  border-radius: 1em;\r\n  background-color: #dbdbdb;\r\n  padding: 20px;\r\n  margin: 1em 0;\r\n  resize: none;\r\n}\r\n.card-body fieldset {\r\n  border: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform input[type="submit"]{\r\n  background-color: #478844;\r\n  color: white;\r\n  font-weight: 900;\r\n  cursor: pointer;\r\n}',""]),n.exports=e}]);
//# sourceMappingURL=newTask.js.map