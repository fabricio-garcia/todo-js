!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=30)}([function(n,e){},function(n,e,t){"use strict";t(0);function r(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(n,e){try{var t=function(n,e){try{var t=r(e);return e.some((function(e){return e.id===n.id}))?{success:!1,error:"The element ".concat(n.name," is already on Storage. Do you want to update it?")}:(t.push(n),{success:!0,msg:"Item added to Storage",data:t})}catch(n){return{success:!1,error:n.message}}}(n,JSON.parse(window.localStorage.getItem(e))),o=t.success,i=t.error,a=t.data;if(!o)throw new Error(i);return window.localStorage.setItem(e,JSON.stringify(a)),{success:!0,msg:"Element added to ".concat(e),data:a}}catch(i){return{success:!1,error:i.message}}},i=function(n){try{return{success:!0,msg:"Storage retrieved!",data:JSON.parse(window.localStorage.getItem(n))}}catch(n){return{success:!1,error:n.message}}},a=function(n,e){try{var t=JSON.parse(window.localStorage.getItem(e)).filter((function(e){return e.id===Number(n)}));if(t.size<1)throw new Error("The Id given is not correct");return{success:!0,msg:"Storage retrieved!",data:t}}catch(n){return{success:!1,error:n.message}}};function c(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(n,e,t){try{var r=function(n,e,t){try{for(var r=c(t),o=!0,i=-1,a=0;o&&a<r.length;a+=1)r[a].id===n&&(i=a,o=!1);if(!(i>-1))throw new Error("The id provided was incorrect! Do you want to add it?");return r[i]=e,{success:!0,msg:"Element updated in Storage",data:r}}catch(n){return{success:!1,error:n.message}}}(n,e,JSON.parse(window.localStorage.getItem(t))),o=r.success,i=r.error,a=r.msg,s=r.data;if(!o)throw new Error(i);return window.localStorage.setItem(t,JSON.stringify(s)),{success:!0,msg:a,data:s}}catch(i){return{success:!1,error:i.message}}};function d(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(n,e){try{var t=function(n,e){try{var t=d(e),r=-1;if(t.forEach((function(e,t){e.id===n&&(r=t)})),!(r>-1))throw new Error("The element with the given id is not in the Storage. Do you want to add it?");return t.splice(r,1),{success:!0,msg:"Element removed from Storage",data:t}}catch(n){return{success:!1,error:n.message}}}(n,JSON.parse(window.localStorage.getItem(e))),r=t.success,o=t.error,i=t.msg,a=t.data;if(!r)throw new Error(o);return window.localStorage.setItem(e,JSON.stringify(a)),{success:!0,msg:i,data:a}}catch(o){return{success:!1,error:o.message}}};!function(){try{var n=JSON.parse(window.localStorage.getItem("projects"));n||window.localStorage.setItem("projects",JSON.stringify([]));var e=JSON.parse(window.localStorage.getItem("tasks"));e||window.localStorage.setItem("tasks",JSON.stringify([]))}catch(n){return{error:n.message}}}();e.a={add:o,readAll:i,readOne:a,remove:l,update:s}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:g(f,e),references:1}),r.push(l)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(n,e){var t,r,o;if(e.singleton){var i=h++;t=m||(m=d(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=d(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),d=0;d<t.length;d++){var l=c(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";function r(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.a=function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];var i=t.reduce((function(e,t,o){return[].concat(r(e),[t,n[o+1]])}),[n[0]]);return function(n){return i.map((function(e){return"function"==typeof e?e(n):e})).join("")}}},function(n,e,t){"use strict";var r=t(4);function o(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  .card {\n    background-color: white;\n    border-radius: 20px;\n    padding: 2em;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    ","\n  }\n\n  .card-header {\n    display: flex;\n    justify-content: flex-start;\n    ","\n  }\n\n  .card-header .title {\n    color: #305287;\n    font-size: 1.5rem;\n    font-weight: 900;\n  }\n"]);return o=function(){return n},n}var i=function(n){return Object(r.a)(o(),n&&n.card,n&&n.cardHeader)},a=function(n){var e=document.createElement("template");return e.innerHTML+="<style>".concat(i(n&&n)(),"</style>"),e.innerHTML+='\n        <div class="card">\n            <div class="card-header">\n                <slot name="card-title"></slot>\n                <slot name="card-menu"></slot>\n            </div>\n            <div class="card-body">\n                <slot>CARD BODY HERE</slot>\n            </div>\n            <div class="card-Footer">\n                <slot name="card-footer"></slot>\n            </div>\n        </div>\n    ',e};function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function d(n){var e="function"==typeof Map?new Map:void 0;return(d=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return u(n,arguments,p(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,n)})(n)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function u(n,e,t){return(u=l()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(n,r));return t&&f(o,t.prototype),o}).apply(null,arguments)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}t.d(e,"a",(function(){return m}));var m=function(n){function e(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=s(this,p(e).call(this))).date=n.getAttribute("date"),n.css=n.getAttribute("css"),n.shadowDOM=n.attachShadow({mode:"open"}),n.shadowDOM.appendChild(a(n.css,n.date).content.cloneNode(!0)),n}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}(e,n),e}(d(HTMLElement))},function(n,e,t){"use strict";t(0);e.a=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"An important Project",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Date.now()*Math.random(),o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=r||Date.now()*Math.random(),a=n,c=e||(new Date).toISOString().split("T")[0],s=t,d=o||[],l=function(){return i},u=function(){return a},f=function(){return c},p=function(){return s},m=function(){return d},h=function(n){try{if(!n)throw new Error("No Name to Set");return{success:!0,data:a=n}}catch(n){return{success:!1,error:n.message}}},g=function(n){try{if(!n)throw new Error("No Date to Set");return{success:!0,data:c=n}}catch(n){return{success:!1,error:n.message}}},b=function(n){try{if(!n)throw new Error("No Description to Set");return{success:!0,data:s=n}}catch(n){return{success:!1,error:n.message}}},y=function(n){try{if(!n)throw new Error("No Tasks to Set");if(!Array.isArray(n))throw new TypeError("Please provide an Array as parameter");return{success:!0,data:d=n}}catch(n){return{success:!1,error:n.message}}};return{id:l(),name:u(),description:p(),date:f(),tasks:m(),setName:h,setDescription:b,setDate:g,setTasks:y}}},function(n,e,t){var r=t(2),o=t(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){(e=t(3)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),n.exports=e},function(n,e,t){var r=t(2),o=t(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){(e=t(3)(!1)).push([n.i,"html,\nbody {\n  height: 100vh;\n}\n\nbody {\n  background-color: #3d6db4;\n  color: #2c302f;\n  font-weight: 400;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\nnav {\n  width: 100vw;\n  display: block;\n  color: white;\n  background-color: #305287;\n  padding: 7px;\n}\n\nnav > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\nnav li {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: xx-large;\n  font-weight: 900;\n}\nnav img {\n  width: 40px;\n  margin: 0 10px;\n  filter: invert(98%) sepia(1%) saturate(76%) hue-rotate(336deg)\n    brightness(120%) contrast(100%);\n}\n\nmain {\n  margin: 0 auto;\n  max-width: 1200px;\n}\n\n\nmain .search {\n  max-width: 800px;\n  background-color: #305287;\n  flex: 1 70%;\n  border-radius: 20px;\n  color: white;\n  padding: 10px 10px;\n  display: none;\n  justify-content: center;\n}\n\n.search input {\n  border-radius: 15px;\n  padding: 3px 10px;\n  width: 50%;\n}\n\n.search span {\n  border-radius: 50%;\n  background-color: white;\n  color: black;\n  width: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-list {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-gap: 15px;\n}\n\n.project {\n  height: 300px;\n}\n\n.add-icon {\n  display: flex;\n  justify-content: center;\n  filter: invert(76%) sepia(0%) saturate(0%) hue-rotate(227deg) brightness(97%) contrast(93%);\n}\n\n.add-text {\n  text-align: center;\n  color: #b7b7b7;\n  font-size: 1.3rem;\n  font-weight: 900;\n}\n\n.project-title {\n  flex: 1 auto;\n  color: #305287;\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n\n.card-menu {\n  flex: 1 20%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.card-menu div {\n  font-weight: 900;\n  color: #305287;\n}\n\n.description {\n  color: #525650;\n  margin-bottom: 10px;\n}\n\n.progress progress {\n  border-radius: 10px;\n  width: 100%;\n}\n\n.progress p {\n  text-align: center;\n  color: #305287;\n  margin-bottom: 2px;\n}\n\nprogress::-webkit-progress-bar {\n  border-radius: 15px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;\n}\n\n.date-picker {\n  border: none;\n  font-weight: 900;\n  color: #305287;\n}\n\n.blue-pills{\n  margin: 20px 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: white;;\n}\n\n.blue-pill {\n  background-color: #305287;\n  display: flex;\n  border-radius: 20px;\n  align-items: center;\n  justify-content: center;\n  font-size: xx-large;\n  font-weight: 900;\n}\n\n.title-pill {\n  flex: 1 40%;\n}\n\n.action-pill {\n  flex: 1 60%;\n}\n\n/* Dropdown Button */\n.dropbtn {\n  background-color: white;\n  color: #3d6db4;\n  padding: 2px 16px;\n  font-size: 16px;\n  border: none;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  border-radius: 15px;\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 120px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n/* Links inside the dropdown */\n.dropdown-content a {\n  border-radius: 15px;\n  color: #3d6db4;\n  padding: 8px 5px;\n  text-decoration: none;\n  display: block;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #ddd;}\n\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {display: block;}\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n\n.dialog-container {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  left: 50%;\n  top: -30%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 400px;\n  background: #fff;\n  padding: 10px;\n  box-shadow: 1px 1px 5px 1px #ccc;\n  border-radius: 10px;\n  opacity: 0;\n  transition: all 0.3s linear 0s;\n  z-index: 2;\n}\n\n.dialog-header {\n \n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #305287\n}\n\n.dialog-body {\n  padding: 10px;\n \n}\n\n\n.dialog-footer {\n  display: flex;\n  justify-content: space-between;\n  width: 35%;\n  padding: 5px 0;  \n}\n\n#cancel {\n  border-radius: 15px;\n  background-color: #478844;\n  color: white;\n  font-weight: 900;\n  padding: 2px 10px;\n}\n\n\n#confirm {\n  border-radius: 15px;\n  background-color: #e30613;\n  color: white;\n  font-weight: 900;\n  padding: 2px 10px;\n}\n\n.freezed-layer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}",""]),n.exports=e},function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(6),o=t(1);function i(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=document.getElementById("dialogCont"),c=function(){a.style.top="50%",a.style.opacity=1,document.getElementById("freezed-layer").style.display=""};document.getElementById("cancel").addEventListener("click",(function(){a.style.top="-50%",a.style.opacity=0,document.getElementById("freezed-layer").style.display="none"})),document.getElementById("confirm").addEventListener("click",(function(){var n=JSON.parse(window.localStorage.getItem("currentProject"));if(a.style.top="-50%",a.style.opacity=0,document.getElementById("freezed-layer").style.display="none",JSON.parse(window.localStorage.getItem("isTask"))){var e=function(n,e){try{var t=i(e),r=-1;if(t.forEach((function(e,t){e.id===n&&(r=t)})),!(r>-1))throw new Error("The element with the given id is not in the Storage. Do you want to add it?");return t.splice(r,1),{success:!0,msg:"Element removed from Storage",data:t}}catch(n){return{success:!1,error:n.message}}}(JSON.parse(window.localStorage.getItem("currentTask"))[0].id,n[0].tasks),t=[n[0].name,n[0].date,n[0].description,n[0].id,e.data],c=r.a.apply(void 0,t),s=o.a.update(c.id,c,"projects"),d=s.success,l=s.error;if(!d)throw new Error(l);window.localStorage.removeItem("currentTask"),window.location="/project.html?".concat(window.location.search.split("?")[1])}else!function(n,e){var t=o.a.remove(n.id,e),r=t.success,i=t.error;if(!r)throw new Error(i)}(n,"projects"),window.localStorage.removeItem("currentProject"),window.location.reload(!0)}))},,function(n,e,t){var r=t(2),o=t(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){(e=t(3)(!1)).push([n.i,".dropdown-content button[plain] {\n    border: none;\n    background-color: transparent;\n    color: inherit;\n    font: inherit;\n}\n\n.menu-edit .edit {\n    color: #3d6db4;\n}\n\n.menu-delete .remove {\n    color: #e30613;\n}\n\n.menu-edit span{\n    border-radius: 15px;\n    background-color: #3d6db4;\n    color: white;\n    font-weight: 900;\n    padding: 2px 10px;\n}\n\n.menu-delete span {\n    border-radius: 15px;\n    background-color: #e30613;\n    color: white;\n    font-weight: 900;\n    padding: 2px 10px;\n}",""]),n.exports=e},,,,,,,,,,,,,,,,function(n,e,t){"use strict";t.r(e);t(7),t(9),t(13);var r=t(1),o=t(11),i=function(n){return'\n<div class="project" key="'.concat(n.id,'">\n  <my-card>\n    ').concat((e=n.id,t=n.name,'\n  <a href="project.html?id='.concat(e,'" slot="card-title">\n    <div class="project-title">').concat(t,'</div>\n  </a>\n  <div class="card-menu" slot="card-menu">\n    <div class="dropdown">\n      <button class="dropbtn">☰</button>\n      <div class="dropdown-content">\n        <a href="editProject.html?id=').concat(e,'" class="menu-edit">\n          <i class="fas fa-pen edit"></i>\n          <span>Edit</span>\n        </a>\n        <a class="menu-delete" project="').concat(e,'" role="menu-delete">\n        <i class="fas fa-trash-alt remove" role="menu-delete" project="').concat(e,'"></i>\n        <span role="menu-delete" project="').concat(e,'">Delete</span>\n        </a>\n      </div>\n    </div>\n  </div>\n')),'\n    <div >\n        <div class="description">\n            <p>\n            ').concat(n.description,"\n            </p>\n        </div>\n    </div>\n  </my-card>\n</div>\n");var e,t};document.getElementById("project-list").addEventListener("click",(function(n){var e=n.srcElement;if("menu-delete"===e.getAttribute("role")){var t=e.getAttribute("project");if(!t)throw new Error("Id given is null");var i=r.a.readOne(t,"projects"),a=i.success,c=i.error,s=i.data;if(!a)throw new Error(c);window.localStorage.setItem("currentProject",JSON.stringify(s[0])),window.localStorage.setItem("isTask",!1),Object(o.a)()}})),document.addEventListener("DOMContentLoaded",(function(){var n=document.getElementById("project-list"),e=JSON.parse(window.localStorage.getItem("projects"));e.length<1||e.forEach((function(e){n.innerHTML+=i(e)}))}));var a=t(5);window.customElements.define("my-card",a.a)}]);
//# sourceMappingURL=index.248d04021785b50c1d9d.js.map