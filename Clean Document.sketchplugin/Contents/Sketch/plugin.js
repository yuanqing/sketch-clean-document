!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return b}),n.d(r,"DROP_DOWN",function(){return h}),n.d(r,"RADIO_BUTTONS",function(){return O}),n.d(r,"NUMERIC_TEXT_BOX",function(){return v.a}),n.d(r,"STRING_TEXT_BOX",function(){return _}),n.d(r,"TEXT_BOX",function(){});var s=n(1);function o({keyPrefix:e=null,shouldRemoveKeyPrefix:t=!0}={}){const n={"cleanLayers.deleteHiddenLayers":!0,"cleanLayers.smartRenameLayers":!0,"cleanLayers.smartSortLayers":!0,"cleanLayers.unnestNestedGroups":!0,"cleanLayers.whitelistRegularExpression":"","cleanPages.deleteEmptyPages":!0,"cleanPages.sortPages":!0,"cleanStyles.deleteUnusedLayerStyles":!0,"cleanStyles.deleteUnusedTextStyles":!0,"cleanSymbols.deleteUnusedSymbols":!0,"cleanSymbols.organiseSymbols":!0,"cleanSymbols.groupDefinition":"2nd","cleanSymbols.space":100};if(!n)return{};const r={};return Object.keys(n).forEach(function(e){const t=Object(s.sessionVariable)(e),o=Object(s.settingForKey)(e),c=void 0!==t?t:o,a=n[e];r[e]=void 0!==c?c:a}),e?function({settings:e,keyPrefix:t,shouldRemoveKeyPrefix:n}){const r=t.length,s={};return Object.keys(e).forEach(function(o){-1!==o.indexOf(t)&&(s[n?o.substring(r):o]=e[o])}),s}({settings:r,keyPrefix:`${e}.`,shouldRemoveKeyPrefix:t}):r}const c=1,a=10,i=17;const u=2,l=20,f=2;const d=20,y=10;function b({width:e,y:t,label:n,value:r}){const s=NSButton.alloc().initWithFrame(NSMakeRect(0,t,e,d));return s.setButtonType(NSSwitchButton),s.setBezelStyle(0),s.setState(r?NSOnState:NSOffState),s.setTitle(n),{view:s,height:d+y,retrieveValue:function(){return"1"==s.stringValue()}}}const m=20,p=15;function h({width:e,y:t,value:n,possibleValues:r}){const s=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,t,e,m));r.forEach(function(e){s.addItemWithTitle(e)});const o=void 0!==n?r.indexOf(n):0;return s.selectItemAtIndex(o),{view:s,height:m+p,retrieveValue:function(){const e=s.indexOfSelectedItem();return r[e]}}}const g=20,S=10;function O({width:e,y:t,value:n,possibleValues:r}){const s=NSButtonCell.alloc().init();s.setButtonType(NSRadioButton);const o=r.length,c=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,t,e,g),NSRadioModeMatrix,s,1,o);c.setCellSize(CGSizeMake(Math.floor(e/o),g)),c.cells().forEach(function(e,t){e.setTitle(r[t])});const a=void 0!==n?r.indexOf(n):0;return c.selectCellAtRow_column(0,a),{view:c,height:g+S,retrieveValue:function(){const e=c.cells().indexOfObject(c.selectedCell());return r[e]}}}var v=n(13),j=n(7);const _=Object(j.a)(),x=300;function k({title:e,inputs:t}){const n=o(),{formView:s,retrieveValues:d}=function({inputsConfig:e,settings:t}){const n=NSView.alloc().init();n.setFlipped(!0);const s={};let o=0;return e.forEach(function(e){if("-"===e){const{view:e,height:t}=function({width:e,y:t}){const n=NSView.alloc().initWithFrame(NSMakeRect(0,t+a,e,c));return n.setWantsLayer(1),n.layer().setBackgroundColor(CGColorCreateGenericRGB(127/255,127/255,127/255,.5)),{view:n,height:a+c+i}}({width:x,y:o});return o+=t,void n.addSubview(e)}const{type:d,key:y,label:b,value:m,...p}=e;if(b&&"CHECK_BOX"!==d){const{view:e,height:t}=function({width:e,y:t,label:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,t+u,e,l));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(n),{view:r,height:u+l+f}}({width:x,y:o,label:b});o+=t,n.addSubview(e)}const h=t[y],g=null!=m?m:h,{view:S,height:O,retrieveValue:v}=r[d]({width:x,y:o,label:b,value:g,...p});o+=O,n.addSubview(S),s[y]=v}),n.setFrame(NSMakeRect(0,0,x,o)),{formView:n,retrieveValues:s}}({inputsConfig:t,settings:n}),y=function(e){const t=NSAlert.alloc().init();return t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e);return y.setAccessoryView(s),"1000"==y.runModal()?Object.keys(d).reduce(function(e,t){const n=d[t];return e[t]=n(),e},{}):null}var L=n(14),w=n.n(L);function E(e,t){w.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function P(e){E(e,{symbol:"✔"})}function N(e){E(e,{symbol:"✘"})}function T(){const e={"cleanLayers.deleteHiddenLayers":!0,"cleanLayers.smartRenameLayers":!0,"cleanLayers.smartSortLayers":!0,"cleanLayers.unnestNestedGroups":!0,"cleanLayers.whitelistRegularExpression":"","cleanPages.deleteEmptyPages":!0,"cleanPages.sortPages":!0,"cleanStyles.deleteUnusedLayerStyles":!0,"cleanStyles.deleteUnusedTextStyles":!0,"cleanSymbols.deleteUnusedSymbols":!0,"cleanSymbols.organiseSymbols":!0,"cleanSymbols.groupDefinition":"2nd","cleanSymbols.space":100};e&&(Object.keys(e).forEach(function(e){Object(s.setSettingForKey)(e,void 0),Object(s.setSessionVariable)(e,void 0)}),E("Reset settings"))}const D=C(s.setSettingForKey);C(s.setSessionVariable);function C(e){return function(t,n){if(void 0===t)return;Object.keys(t).forEach(function(n){const r=t[n];void 0!==r&&e(n,r)});const r=void 0!==n&&n.successMessage;r&&E(r)}}n(15),n(16);var M=n(4);var R=n(6);function B(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(R.fromNative)(e[0])}function V(e){!function e(t,n){const r=t.parent;r&&"Group"===r.type&&!n[r.id]&&(r.adjustToFit(),n[r.id]=!0,e(r,n))}(e,{})}function U(){return B().pages}function I(){return M.Page.getSymbolsPage(B())}function F(){return B().selectedPage.layers}function G(){const e=[];return U().forEach(function({layers:t}){t.forEach(function(t){e.push(t)})}),e}function W(){return B().selectedLayers.layers.reverse()}function A(){const e=W();return 0!==e.length?e:F()}function X(e,t){e.forEach(function(e){t(e);const n=e.type;"Artboard"!==n&&"Group"!==n||X(e.layers,t)})}n.d(t,"k",function(){return o}),n.d(t,"n",function(){return k}),n.d(t,"o",function(){return T}),n.d(t,"p",function(){return D}),n.d(t,"a",function(){return"CHECK_BOX"}),n.d(t,"b",function(){return"DROP_DOWN"}),n.d(t,"c",function(){return"NUMERIC_TEXT_BOX"}),n.d(t,"d",function(){return"STRING_TEXT_BOX"}),n.d(t,"e",function(){return V}),n.d(t,"g",function(){return B}),n.d(t,"f",function(){return U}),n.d(t,"l",function(){return I}),n.d(t,"h",function(){return G}),n.d(t,"i",function(){return W}),n.d(t,"j",function(){return A}),n.d(t,"m",function(){return X}),n.d(t,"r",function(){return E}),n.d(t,"s",function(){return P}),n.d(t,"q",function(){return N})},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){"use strict";function r(e){return Object.keys(e).reduce(function(t,n){return t||(!!e[n]||void 0)},!1)}n.d(t,"a",function(){return r})},function(e,t){
/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */
var n=function(e,t){var n,r,s=1,o=0,c=0,a=String.alphabet;function i(e,t,r){if(r){for(n=t;(r=i(e,n))<76&&r>65;)++n;return+e.slice(t-1,n)}return(r=a&&a.indexOf(e.charAt(t)))>-1?r+76:(r=e.charCodeAt(t)||0)<45||r>127?r:r<46?65:r<48?r-1:r<58?r+18:r<65?r-11:r<91?r+11:r<97?r-37:r<123?r+5:r-63}if((e+="")!=(t+=""))for(;s;)if(r=i(e,o++),s=i(t,c++),r<76&&s<76&&r>66&&s>66&&(r=i(e,o,o),s=i(t,c,o=n),c=n),r!=s)return r<s?-1:1;return 0};try{e.exports=n}catch(e){String.naturalCompare=n}},function(e,t){e.exports=require("sketch/dom")},function(e,t,n){"use strict";function r({sortedLayers:e,shouldSelectLayers:t}){const n=e[0],r=n.sketchObject.parentGroup(),s=MSLayer.alloc().init();r.insertLayer_beforeLayer(s,n.sketchObject),e.reverse().forEach(function(e){e.sketchObject.moveToLayer_beforeLayer(r,s),e.selected=t}),s.removeFromParent()}n.d(t,"a",function(){return r})},function(e,t){e.exports=require("sketch")},function(e,t,n){"use strict";n.d(t,"a",function(){return o});const r=20,s=15;function o(e){return function({width:t,y:n,value:o,placeholder:c}){const a=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,t,r)),i=null==o?"":`${o}`;return a.setStringValue(i),c&&a.setPlaceholderString(c),{view:a,height:r+s,retrieveValue:function(){const t=`${a.stringValue()}`;return e?e(t):t}}}}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),s=n(5);function o({sortLayers:e,successMessage:t}){return function(){const n=Object(r.i)();if(n.length<2)return void Object(r.q)("Select at least 2 layers");if(!function([e,...t]){const n=e.parent;return t.reduce(function(e,t){if(!e)return e;const r=t.parent;return null==n?null==r:r.id&&r.id===n.id},!0)}(n))return void Object(r.q)("Selected layers are not in the same list");const o=e(n);Object(s.a)({sortedLayers:o,shouldSelectLayers:!0}),Object(r.s)(t)}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(3),s=n.n(r),o=n(6),c=n(0),a=n(2);function i({isCleanDocument:e}){const t=Object(c.k)({keyPrefix:"cleanPages"});if(!Object(a.a)(t))return;let n=0;t.sortPages&&function(){const e=Object(c.g)().sketchObject,t=e.pages(),n=Object(c.l)(),r=n?n.id:null;t.sort(function(e,t){const n=Object(o.fromNative)(e),c=Object(o.fromNative)(t);return n.id===r?1:c.id===r?-1:n.name===c.name?s()(n.id,c.id):s()(n.name,c.name)}),e.performPageSwitchUpdates()}(),t.deleteEmptyPages&&(n=function(){let e=0;return Object(c.f)().forEach(function(t){0===t.layers.length&&(t.remove(),e++)}),e}()),e||(t.deleteEmptyPages&&0!==n?Object(c.s)(`Sorted pages and deleted ${n} empty page${1===n?"":"s"}`):Object(c.s)("Sorted pages"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2);const o={Group:function(e){e.name="Group"},HotSpot:function(e){e.name="Hotspot"},Image:function(e){e.name="Bitmap"},Shape:function(e){e.name="Combined Shape",e.layers.forEach(function(e){c(e)})},ShapePath:function(e){"Rectangle"!==e.shapeType?"Oval"!==e.shapeType?e.name="Path":e.name="Oval":e.name="Rectangle"},SymbolInstance:function(e){const t=Object(r.g)().getSymbolMasterWithID(e.symbolId);e.name=t.name},Text:function(e){const t=e.sketchObject;t.setName(t.stringValue().substring(0,20)),t.setNameIsFixed(!1)}};function c(e){if(0!==e.exportFormats.length)return;if(1===e.sketchObject.hasClippingMask())return void(e.name="Mask");const t=o[e.type];t&&t(e)}function a(e,t){const n=e.frame,r=t.frame,s=n.y-r.y;return 0!==s?s:n.x-r.x}var i=n(8);Object(i.a)({sortLayers:u,successMessage:"Smart sorted layers"});function u([e,...t]){const n=[e];return t.forEach(function(e){let t=n.length;for(;t-- >0;){const r=n[t];if(l(e,r)||a(e,r)>0)return void n.splice(t+1,0,e)}n.splice(0,0,e)}),n}function l(e,t){const n=e.frame,r=t.frame;return!(n.x+n.width<r.x||r.x+r.width<n.x||n.y+n.height<r.y||r.y+r.height<n.y)}var f=n(5);function d({isCleanDocument:e}){const t=Object(r.k)({keyPrefix:"cleanLayers"});if(!Object(s.a)(t))return;const n=e?Object(r.h)():Object(r.j)(),o=t.whitelistRegularExpression,a=""===o?null:new RegExp(o);Object(r.m)(n,function(e){a&&a.test(e.name)||t.deleteHiddenLayers&&function(e){return!!e.hidden&&(e.remove(),!0)}(e)||(t.smartRenameLayers&&c(e),t.smartSortLayers&&function(e){if("Artboard"===e.type||"Group"===e.type){const t=u([...e.layers].reverse());Object(f.a)({sortedLayers:t,shouldSelectLayers:!1})}}(e),t.unnestNestedGroups&&function e(t){if("Group"!==t.type)return;const n=t.layers,s=n.length;if(0===s)return t.remove(),void Object(r.e)(t);if(1===s){const s=t.transform,o=t.style;if(t.hidden||t.locked||0!==t.exportFormats.length||t.flow||0!==s.rotation||s.flippedHorizontally||s.flippedVertically||1!==o.opacity||0!==o.shadows.length)return;return n[0].sketchObject.moveToLayer_beforeLayer(t.parent.sketchObject,t.sketchObject),t.selected=!1,n[0].selected=!1,t.remove(),Object(r.e)(t),void e(n[0])}n.forEach(function(t){e(t)})}(e))}),e||Object(r.s)("Layers cleaned")}n.d(t,"default",function(){return d})},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2);var o=n(3),c=n.n(o),a=n(4),i=n(8);Object(i.a)({sortLayers:u,successMessage:"Sorted layers by name"});function u(e){return e.sort(function(e,t){return c()(e.name.toLowerCase(),t.name.toLowerCase())})}var l=n(5);function f({groupDefinition:e,space:t}){const n=function(){const e=[];return Object(r.f)().forEach(function(t){t.layers.forEach(function(t){"SymbolMaster"===t.type&&e.push(t)})}),e}(),s=Object(r.l)()||a.Page.createSymbolsPage();s.name="Symbols",function({symbols:e,symbolsPage:t}){e.forEach(function(e){e.parent.id!==t.id&&(e.sketchObject.moveToLayer_beforeLayer(t.sketchObject,null),e.sketchObject.select_byExpandingSelection(!1,!0))})}({symbols:n,symbolsPage:s});const o=function({symbols:e,groupDefinition:t}){const n={};return e.forEach(function(e){const r=e.name.split(d).slice(0,t).join("/");n[r]||(n[r]={groupName:r,layers:[]}),n[r].layers.push(e)}),Object.values(n).sort(function(e,t){return c()(e.groupName,t.groupName)}).map(function({layers:e}){return u(e)})}({symbols:n,groupDefinition:e});!function({symbolGroups:e,space:t}){let n=0;e.forEach(function(e){let r=0,s=0;e.forEach(function(e){e.frame.x=n,e.frame.y=r,console.log(e.frame),r+=e.frame.height+t,e.frame.width>s&&(s=e.frame.width)}),n+=s+t})}({symbolGroups:o,space:t}),function(e){const t=[];e.forEach(function(e){e.forEach(function(e){t.push(e)})}),Object(l.a)({sortedLayers:t,shouldSelectLayers:!1})}(o)}const d=/\s*\/\s*/;function y({isCleanDocument:e}){const t=Object(r.k)({keyPrefix:"cleanSymbols"});if(!Object(s.a)(t))return;let n=0;if(t.deleteUnusedSymbols&&(n=function(){let e=0;return Object(r.m)(Object(r.h)(),function(t){"SymbolMaster"===t.type&&0===t.getAllInstances().length&&(t.remove(),e++)}),e}()),t.organiseSymbols&&f({groupDefinition:parseInt(t.groupDefinition,10),space:t.space}),!e&&t.deleteUnusedSymbols){if(0===n)return void Object(r.r)("No unused symbols");Object(r.s)(`Deleted ${n} unused symbol${1===n?"":"s"}`)}}n.d(t,"default",function(){return y})},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2);const o=a("layerStyles","sharedLayerStyles"),c=a("layerTextStyles","sharedTextStyles");function a(e,t){return function(){const n=Object(r.g)(),s=n.sketchObject.documentData()[e]();let o=0;return n[t].forEach(function(e){0===e.getAllInstancesLayers().length&&(s.removeSharedStyle(s.sharedStyleWithID(e.id)),o++)}),o}}function i({isCleanDocument:e}){const t=Object(r.k)({keyPrefix:"cleanStyles"});if(!Object(s.a)(t))return;let n=0;t.deleteUnusedLayerStyles&&(n+=o()),t.deleteUnusedTextStyles&&(n+=c()),e||(0!==n?Object(r.s)(`Deleted ${n} unused style${1===n?"":"s"}`):Object(r.r)("No unused styles"))}n.d(t,"default",function(){return i})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=require("sketch/ui")},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,n){"use strict";const r=async(e,t)=>{let n=0;for(const r of e)await t(await r,n++);return e};e.exports=r,e.exports.default=r},function(e,t,n){e.exports=n(18)},function(e,t,n){e.exports={"clean-document":n(19).default,"clean-layers/clean-layers":n(10).default,"clean-symbols/clean-symbols":n(11).default,"clean-styles/clean-styles":n(12).default,"clean-pages/clean-pages":n(9).default,"settings/settings":n(20).default,"settings/reset-settings":n(21).default}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),s=n(10),o=n(9),c=n(12),a=n(11);function i(){Object(s.default)({isCleanDocument:!0}),Object(a.default)({isCleanDocument:!0}),Object(c.default)({isCleanDocument:!0}),Object(o.default)({isCleanDocument:!0}),Object(r.s)("Document cleaned")}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(0);const s={title:"Settings for Clean Document",inputs:[{type:r.a,key:"cleanLayers.deleteHiddenLayers",label:"Delete hidden layers"},{type:r.a,key:"cleanLayers.unnestNestedGroups",label:"Unnest nested groups"},{type:r.a,key:"cleanLayers.smartRenameLayers",label:"Smart rename layers"},{type:r.a,key:"cleanLayers.smartSortLayers",label:"Smart sort layers"},{type:r.d,key:"cleanLayers.whitelistRegularExpression",label:"Whitelist regular expression"},"-",{type:r.a,key:"cleanSymbols.deleteUnusedSymbols",label:"Delete unused symbols"},{type:r.a,key:"cleanSymbols.organiseSymbols",label:"Organise symbols"},{type:r.b,key:"cleanSymbols.groupDefinition",label:"Symbol group definition",possibleValues:["1st","2nd","3rd","4th"]},{type:r.c,key:"cleanSymbols.space",label:"Space between symbols"},"-",{type:r.a,key:"cleanStyles.deleteUnusedTextStyles",label:"Delete unused text styles"},{type:r.a,key:"cleanStyles.deleteUnusedLayerStyles",label:"Delete unused layer styles"},"-",{type:r.a,key:"cleanPages.deleteEmptyPages",label:"Delete empty pages"},{type:r.a,key:"cleanPages.sortPages",label:"Sort pages"}]};function o(){const e=Object(r.n)(s);e&&Object(r.p)(e,{successMessage:"Settings saved"})}},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r.o}]));