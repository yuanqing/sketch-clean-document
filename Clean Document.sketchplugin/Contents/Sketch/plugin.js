!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return c}),n.d(r,"DROP_DOWN",function(){return a}),n.d(r,"RADIO_BUTTONS",function(){return l}),n.d(r,"NUMERIC_TEXT_BOX",function(){return d.a}),n.d(r,"STRING_TEXT_BOX",function(){return y}),n.d(r,"TEXT_BOX",function(){});const s="sketch-plugin-helper";function o(){return JSON.parse('{"private": true,"version": "0.0.1","dependencies": {"sketch-sort-layer-list": "*"},"devDependencies": {"sketch-plugin-helper": "*"},"scripts": {"build": "sph build","fix": "sph lint --fix","lint": "sph lint","symlink": "sph symlink","unlink": "sph symlink --delete","version": "sph version","watch": "sph build --watch"},"sketch-plugin-helper": {"pluginName": "Clean Document","pluginDescription": "A Sketch plugin to automagically organise and clean up your Sketch document","authorName": "Lim Yuan Qing","githubUserName": "yuanqing","githubRepositoryName": "sketch-clean-document","menu": [{"handler": "clean-document","label": "Clean Document"},"-",{"handler": "clean-layers/clean-layers","label": "Clean Layers"},{"handler": "delete-unused-styles-and-symbols/delete-unused-styles-and-symbols","label": "Delete Unused Styles and Symbols"},"-",{"Settings": [{"handler": "clean-layers/settings","label": "Settings for Clean Layers"},{"handler": "delete-unused-styles-and-symbols/settings","label": "Settings for Delete Unused Styles and Symbols"},"-",{"handler": "reset-settings","label": "Reset Settings"}]}],"defaultSettings": {"deleteHiddenLayers": true,"deleteUnusedLayerStyles": true,"deleteUnusedSymbols": true,"deleteUnusedTextStyles": true,"unnestNestedGroups": true,"smartRenameLayers": true,"smartSortLayers": true,"whitelistRegularExpression": "^@"}}\n}\n')}var i=n(1);function u(){const{defaultSettings:e}=o()[s];return void 0===e?{}:Object.keys(e).reduce(function(t,n){const r=Object(i.sessionVariable)(n),s=Object(i.settingForKey)(n),o=void 0!==r?r:s,u=e[n];return t[n]=void 0!==o?o:u,t},{})}function c({width:e,height:t,label:n,value:r}){const s=NSButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));return s.setButtonType(NSSwitchButton),s.setBezelStyle(0),s.setState(r?NSOnState:NSOffState),s.setTitle(n),{view:s,retrieveValue:function(){return"1"==s.stringValue()}}}function a({width:e,height:t,value:n,possibleValues:r}){const s=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));r.forEach(function(e){s.addItemWithTitle(e)});const o=void 0!==n?r.indexOf(n):0;return s.selectItemAtIndex(o),{view:s,retrieveValue:function(){const e=s.indexOfSelectedItem();return r[e]}}}function l({width:e,height:t,value:n,possibleValues:r}){const s=NSButtonCell.alloc().init();s.setButtonType(NSRadioButton);const o=r.length,i=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,s,1,o);i.setCellSize(CGSizeMake(Math.floor(e/o),t)),i.cells().forEach(function(e,t){e.setTitle(r[t])});const u=void 0!==n?r.indexOf(n):0;return i.selectCellAtRow_column(0,u),{view:i,retrieveValue:function(){const e=i.cells().indexOfObject(i.selectedCell());return r[e]}}}var d=n(5),f=n(2);const y=Object(f.a)(),p=20,h=12,b=20,m=6,S=300;function g({title:e,inputs:t}){const n=u(),{inputs:s,views:o,stackViewHeight:i}=function({inputsConfig:e,settings:t}){const n={},s=[];let o=0;return e.forEach(function({type:e,key:i,label:u,value:c,...a}){if(u&&"CHECK_BOX"!==e){const e=function({label:e,width:t,height:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(e),r}({label:u,width:S,height:b});s.push({view:e,paddingBottom:m}),o+=b+m}const l=t[i],d=null!=c?c:l,{view:f,retrieveValue:y}=r[e]({label:u,value:d,width:S,height:p,...a});s.push({view:f,paddingBottom:h}),o+=p+h,n[i]=y}),{inputs:n,views:s,stackViewHeight:o-=h}}({inputsConfig:t,settings:n}),c=function({width:e,height:t,views:n}){const r=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return r.setAlignment(NSLayoutAttributeLeft),r.setOrientation(NSUserInterfaceLayoutOrientationVertical),r.setSpacing(0),r.setTranslatesAutoresizingMaskIntoConstraints(!0),r.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){r.addView_inGravity_(e,NSStackViewGravityTop),r.setCustomSpacing_afterView_(t,e)}),r}({width:S,height:i,views:o}),a=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e);return a.setAccessoryView(c),"1000"==a.runModal()?Object.keys(s).reduce(function(e,t){const n=s[t];return e[t]=n(),e},{}):null}var v=n(6),O=n.n(v);function _(e,t){O.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function k(e){_(e,{symbol:"✔"})}function x(e){_(e,{symbol:"✘"})}function j(){const{defaultSettings:e}=o()[s];void 0!==e&&(Object.keys(e).forEach(function(e){Object(i.setSettingForKey)(e,void 0),Object(i.setSessionVariable)(e,void 0)}),_("Reset settings"))}const w=T(i.setSettingForKey);T(i.setSessionVariable);function T(e){return function(t,n){if(void 0===t)return;Object.keys(t).forEach(function(n){const r=t[n];void 0!==r&&e(n,r)});const r=void 0!==n&&n.successMessage;r&&_(r)}}n(7),n(8);n(9);var N=n(10);function L(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(N.fromNative)(e[0])}function E(e){!function e(t,n){const r=t.parent;r&&"Group"===r.type&&!n[r.id]&&(r.adjustToFit(),n[r.id]=!0,e(r,n))}(e,{})}function M(){return L().selectedPage.layers}function B(){const e=[];return L().pages.forEach(function({layers:t}){t.forEach(function(t){e.push(t)})}),e}function R(){return L().selectedLayers.layers.reverse()}function D(){const e=R();return 0!==e.length?e:M()}function C(e,t){e.forEach(function(e){t(e);const n=e.type;"Artboard"!==n&&"Group"!==n||C(e.layers,t)})}n.d(t,"h",function(){return u}),n.d(t,"j",function(){return g}),n.d(t,"k",function(){return j}),n.d(t,"l",function(){return w}),n.d(t,"a",function(){return"CHECK_BOX"}),n.d(t,"b",function(){return"STRING_TEXT_BOX"}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return L}),n.d(t,"e",function(){return B}),n.d(t,"f",function(){return R}),n.d(t,"g",function(){return D}),n.d(t,"i",function(){return C}),n.d(t,"n",function(){return _}),n.d(t,"o",function(){return k}),n.d(t,"m",function(){return x})},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){"use strict";function r(e){return function({width:t,height:n,value:r,placeholder:s}){const o=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n)),i=null==r?"":`${r}`;return o.setStringValue(i),s&&o.setPlaceholderString(s),{view:o,retrieveValue:function(){const t=`${o.stringValue()}`;return e?e(t):t}}}}n.d(t,"a",function(){return r})},function(e,t,n){"use strict";n.r(t);var r=n(0);const s={Group:function(e){e.name="Group"},HotSpot:function(e){e.name="Hotspot"},Image:function(e){e.name="Bitmap"},Shape:function(e){e.name="Combined Shape",e.layers.forEach(function(e){o(e)})},ShapePath:function(e){"Rectangle"!==e.shapeType?"Oval"!==e.shapeType?e.name="Path":e.name="Oval":e.name="Rectangle"},SymbolInstance:function(e){const t=Object(r.d)().getSymbolMasterWithID(e.symbolId);e.name=t.name},Text:function(e){const t=e.sketchObject;t.setName(t.stringValue().substring(0,20)),t.setNameIsFixed(!1)}};function o(e){if(0!==e.exportFormats.length)return;if(1===e.sketchObject.hasClippingMask())return void(e.name="Mask");const t=s[e.type];t&&t(e)}function i(e,t){const n=e.frame,r=t.frame,s=n.y-r.y;return 0!==s?s:n.x-r.x}function u({sortedLayers:e,shouldSelectLayers:t}){const n=e[0],r=n.sketchObject.parentGroup(),s=MSLayer.alloc().init();r.insertLayer_beforeLayer(s,n.sketchObject),e.reverse().forEach(function(e){e.sketchObject.moveToLayer_beforeLayer(r,s),e.selected=t}),s.removeFromParent()}function c([e,...t]){const n=[e];return t.forEach(function(e){let t=n.length;for(;t-- >0;){const r=n[t];if(a(e,r)||i(e,r)>0)return void n.splice(t+1,0,e)}n.splice(0,0,e)}),n}function a(e,t){const n=e.frame,r=t.frame;return!(n.x+n.width<r.x||r.x+r.width<n.x||n.y+n.height<r.y||r.y+r.height<n.y)}function l({cleanDocument:e}){const t=Object(r.h)(),n=e?Object(r.e)():Object(r.g)(),s=new RegExp(""===t.whitelistRegularExpression?"^.+$":t.whitelistRegularExpression);Object(r.i)(n,function(e){s.test(e.name)||t.deleteHiddenLayers&&function(e){return!!e.hidden&&(e.remove(),!0)}(e)||(t.smartRenameLayers&&o(e),t.smartSortLayers&&function(e){"Artboard"!==e.type&&"Group"!==e.type||u({sortedLayers:c([...e.layers].reverse()),shouldSelectLayers:!1})}(e),t.unnestNestedGroups&&function e(t){if("Group"!==t.type)return;const n=t.layers,s=n.length;return 0===s?(t.remove(),void Object(r.c)(t)):1===s?(n[0].sketchObject.moveToLayer_beforeLayer(t.parent.sketchObject,t.sketchObject),n[0].selected=!1,t.remove(),Object(r.c)(t),void e(n[0])):void n.forEach(function(t){e(t)})}(e))}),Object(r.o)("Layers cleaned")}n.d(t,"default",function(){return l})},function(e,t,n){"use strict";n.r(t);var r=n(0);const s=i("layerStyles","sharedLayerStyles"),o=i("layerTextStyles","sharedTextStyles");function i(e,t){return function(){const n=Object(r.d)(),s=n.sketchObject.documentData()[e]();let o=0;return n[t].forEach(function(e){0===e.getAllInstancesLayers().length&&(s.removeSharedStyle(s.sharedStyleWithID(e.id)),o++)}),o}}function u(){const e=Object(r.h)();let t=0;e.deleteUnusedLayerStyles&&(t+=s()),e.deleteUnusedTextStyles&&(t+=o());let n=0;if(e.deleteUnusedSymbols&&(n+=function(){let e=0;return Object(r.i)(Object(r.e)(),function(t){"SymbolMaster"===t.type&&0===t.getAllInstances().length&&(t.remove(),e++)}),e}()),0===t&&0===n)return void Object(r.n)("No unused styles or symbols found");const i=c({type:"style",count:t}),u=c({type:"symbol",count:n});0===t||0===n?0===n?Object(r.o)(`Deleted ${i}`):Object(r.o)(`Deleted ${u}`):Object(r.o)(`Deleted ${i} and ${u}`)}function c({type:e,count:t}){return`${t} unused ${e}${1===t?"":"s"}`}n.d(t,"default",function(){return u})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return numericTextBox});var _text_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const numericTextBox=Object(_text_box__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=require("sketch/ui")},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,n){"use strict";const r=async(e,t)=>{let n=0;for(const r of e)await t(await r,n++);return e};e.exports=r,e.exports.default=r},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports=require("sketch")},function(e,t,n){e.exports=n(12)},function(e,t,n){e.exports={"clean-document":n(13).default,"clean-layers/clean-layers":n(3).default,"delete-unused-styles-and-symbols/delete-unused-styles-and-symbols":n(4).default,"clean-layers/settings":n(14).default,"delete-unused-styles-and-symbols/settings":n(15).default,"reset-settings":n(16).default}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0),s=n(3),o=n(4);function i(){Object(s.default)({cleanDocument:!0}),Object(o.default)(),Object(r.o)("Document cleaned")}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(0);const s={title:"Settings for Clean Layers",inputs:[{type:r.a,key:"smartRenameLayers",label:"Smart rename layers"},{type:r.a,key:"smartSortLayers",label:"Smart sort layers"},{type:r.a,key:"unnestNestedGroups",label:"Unnest nested groups"},{type:r.a,key:"deleteHiddenLayers",label:"Delete hidden layers"},{type:r.b,key:"whitelistRegularExpression",label:"Whitelist regular expression"}]};function o(){const e=Object(r.j)(s);e&&Object(r.l)(e,{successMessage:"Settings saved"})}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var r=n(0);const s={title:"Settings for Delete Unused Styles and Symbols",inputs:[{type:r.a,key:"deleteUnusedTextStyles",label:"Delete unused text styles"},{type:r.a,key:"deleteUnusedLayerStyles",label:"Delete unused layer styles"},{type:r.a,key:"deleteUnusedSymbols",label:"Delete unused symbols"}]};function o(){const e=Object(r.j)(s);e&&Object(r.l)(e,{successMessage:"Settings saved"})}},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r.k}]));