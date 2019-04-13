(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/c6e949b5-6184-4d0f-a4e8-492d6692bdaf":
/*!*****************************************************************************************************!*\
  !*** /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/c6e949b5-6184-4d0f-a4e8-492d6692bdaf ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports={'clean-document':__webpack_require__(/*! ./src/clean-document */ "./src/clean-document.js").default,'clean-layers/clean-layers':__webpack_require__(/*! ./src/clean-layers/clean-layers */ "./src/clean-layers/clean-layers.js").default,'delete-unused-styles-and-symbols/delete-unused-styles-and-symbols':__webpack_require__(/*! ./src/delete-unused-styles-and-symbols/delete-unused-styles-and-symbols */ "./src/delete-unused-styles-and-symbols/delete-unused-styles-and-symbols.js").default,'clean-layers/settings':__webpack_require__(/*! ./src/clean-layers/settings */ "./src/clean-layers/settings.js").default,'delete-unused-styles-and-symbols/settings':__webpack_require__(/*! ./src/delete-unused-styles-and-symbols/settings */ "./src/delete-unused-styles-and-symbols/settings.js").default,'reset-settings':__webpack_require__(/*! ./src/reset-settings */ "./src/reset-settings.js").default}

/***/ }),

/***/ "../sketch-plugin-helper/node_modules/is-promise/index.js":
/*!****************************************************************!*\
  !*** ../sketch-plugin-helper/node_modules/is-promise/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ "../sketch-plugin-helper/node_modules/p-each-series/index.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/node_modules/p-each-series/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pEachSeries = async (iterable, iterator) => {
	let index = 0;

	for (const value of iterable) {
		// eslint-disable-next-line no-await-in-loop
		await iterator(await value, index++);
	}

	return iterable;
};

module.exports = pEachSeries;
// TODO: Remove this for the next major release
module.exports.default = pEachSeries;


/***/ }),

/***/ "../sketch-plugin-helper/src/api.js":
/*!******************************************!*\
  !*** ../sketch-plugin-helper/src/api.js ***!
  \******************************************/
/*! exports provided: getDefaultSettings, getSettings, openSettingsDialog, resetSettings, saveSettings, saveTemporarySettings, CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX, test, snapshotTest, compareSketchDocuments, addLayersToCurrentPage, adjustParentGroupsToFit, findLayersByName, getAbsoluteCoordinates, getCurrentDocument, getCurrentPage, getAllPages, getLayersOnCurrentPage, getLayersOnAllPages, getArtboardsOnCurrentPage, getSelectedLayers, getSelectedLayersOrLayersOnCurrentPage, iterateNestedLayers, openSketchDocument, showMessage, showSuccessMessage, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_get_default_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/get-default-settings */ "../sketch-plugin-helper/src/settings/get-default-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSettings", function() { return _settings_get_default_settings__WEBPACK_IMPORTED_MODULE_0__["getDefaultSettings"]; });

/* harmony import */ var _settings_get_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/get-settings */ "../sketch-plugin-helper/src/settings/get-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return _settings_get_settings__WEBPACK_IMPORTED_MODULE_1__["getSettings"]; });

/* harmony import */ var _settings_open_settings_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/open-settings-dialog */ "../sketch-plugin-helper/src/settings/open-settings-dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSettingsDialog", function() { return _settings_open_settings_dialog__WEBPACK_IMPORTED_MODULE_2__["openSettingsDialog"]; });

/* harmony import */ var _settings_reset_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/reset-settings */ "../sketch-plugin-helper/src/settings/reset-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSettings", function() { return _settings_reset_settings__WEBPACK_IMPORTED_MODULE_3__["resetSettings"]; });

/* harmony import */ var _settings_save_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/save-settings */ "../sketch-plugin-helper/src/settings/save-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSettings", function() { return _settings_save_settings__WEBPACK_IMPORTED_MODULE_4__["saveSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveTemporarySettings", function() { return _settings_save_settings__WEBPACK_IMPORTED_MODULE_4__["saveTemporarySettings"]; });

/* harmony import */ var _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/ui/form-types */ "../sketch-plugin-helper/src/settings/ui/form-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["CHECK_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["DROP_DOWN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["RADIO_BUTTONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["NUMERIC_TEXT_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["STRING_TEXT_BOX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return _settings_ui_form_types__WEBPACK_IMPORTED_MODULE_5__["TEXT_BOX"]; });

/* harmony import */ var _test_runner_test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-runner/test */ "../sketch-plugin-helper/src/test-runner/test.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "test", function() { return _test_runner_test__WEBPACK_IMPORTED_MODULE_6__["test"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snapshotTest", function() { return _test_runner_test__WEBPACK_IMPORTED_MODULE_6__["snapshotTest"]; });

/* harmony import */ var _test_runner_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-runner/compare-sketch-documents */ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareSketchDocuments", function() { return _test_runner_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_7__["compareSketchDocuments"]; });

/* harmony import */ var _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/add-layers-to-page */ "../sketch-plugin-helper/src/utilities/add-layers-to-page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addLayersToCurrentPage", function() { return _utilities_add_layers_to_page__WEBPACK_IMPORTED_MODULE_8__["addLayersToCurrentPage"]; });

/* harmony import */ var _utilities_adjust_parent_groups_to_fit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/adjust-parent-groups-to-fit */ "../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adjustParentGroupsToFit", function() { return _utilities_adjust_parent_groups_to_fit__WEBPACK_IMPORTED_MODULE_9__["adjustParentGroupsToFit"]; });

/* harmony import */ var _utilities_find_layers_by_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/find-layers-by-name */ "../sketch-plugin-helper/src/utilities/find-layers-by-name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLayersByName", function() { return _utilities_find_layers_by_name__WEBPACK_IMPORTED_MODULE_10__["findLayersByName"]; });

/* harmony import */ var _utilities_get_absolute_coordinates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/get-absolute-coordinates */ "../sketch-plugin-helper/src/utilities/get-absolute-coordinates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteCoordinates", function() { return _utilities_get_absolute_coordinates__WEBPACK_IMPORTED_MODULE_11__["getAbsoluteCoordinates"]; });

/* harmony import */ var _utilities_get_document__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilities/get-document */ "../sketch-plugin-helper/src/utilities/get-document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentDocument", function() { return _utilities_get_document__WEBPACK_IMPORTED_MODULE_12__["getCurrentDocument"]; });

/* harmony import */ var _utilities_get_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utilities/get-page */ "../sketch-plugin-helper/src/utilities/get-page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return _utilities_get_page__WEBPACK_IMPORTED_MODULE_13__["getCurrentPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllPages", function() { return _utilities_get_page__WEBPACK_IMPORTED_MODULE_13__["getAllPages"]; });

/* harmony import */ var _utilities_get_layer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utilities/get-layer */ "../sketch-plugin-helper/src/utilities/get-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayersOnCurrentPage", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_14__["getLayersOnCurrentPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayersOnAllPages", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_14__["getLayersOnAllPages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getArtboardsOnCurrentPage", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_14__["getArtboardsOnCurrentPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayers", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_14__["getSelectedLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayersOrLayersOnCurrentPage", function() { return _utilities_get_layer__WEBPACK_IMPORTED_MODULE_14__["getSelectedLayersOrLayersOnCurrentPage"]; });

/* harmony import */ var _utilities_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utilities/iterate-nested-layers */ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterateNestedLayers", function() { return _utilities_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_15__["iterateNestedLayers"]; });

/* harmony import */ var _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utilities/open-sketch-document */ "../sketch-plugin-helper/src/utilities/open-sketch-document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSketchDocument", function() { return _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_16__["openSketchDocument"]; });

/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_17__["showMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_17__["showSuccessMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return _utilities_show_message__WEBPACK_IMPORTED_MODULE_17__["showErrorMessage"]; });




















/***/ }),

/***/ "../sketch-plugin-helper/src/common/constants.js":
/*!*******************************************************!*\
  !*** ../sketch-plugin-helper/src/common/constants.js ***!
  \*******************************************************/
/*! exports provided: appcastFileName, bundleFileName, manifestFileName, packageJsonConfigKey, sourceDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appcastFileName", function() { return appcastFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bundleFileName", function() { return bundleFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manifestFileName", function() { return manifestFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageJsonConfigKey", function() { return packageJsonConfigKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDirectory", function() { return sourceDirectory; });
const appcastFileName = 'appcast.xml';
const bundleFileName = 'plugin.js';
const manifestFileName = 'manifest.json';
const packageJsonConfigKey = 'sketch-plugin-helper';
const sourceDirectory = './src';

/***/ }),

/***/ "../sketch-plugin-helper/src/common/get-package-json.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/common/get-package-json.js ***!
  \**************************************************************/
/*! exports provided: getPackageJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPackageJson", function() { return getPackageJson; });
function getPackageJson() {
  const packageJson = "{\"private\": true,\"version\": \"0.0.1\",\"dependencies\": {\"sketch-sort-layer-list\": \"*\"},\"devDependencies\": {\"sketch-plugin-helper\": \"*\"},\"scripts\": {\"build\": \"sph build\",\"fix\": \"sph lint --fix\",\"lint\": \"sph lint\",\"symlink\": \"sph symlink\",\"unlink\": \"sph symlink --delete\",\"version\": \"sph version\",\"watch\": \"sph build --watch\"},\"sketch-plugin-helper\": {\"pluginName\": \"Clean Document\",\"pluginDescription\": \"A Sketch plugin to automagically organise and clean up your Sketch document\",\"authorName\": \"Lim Yuan Qing\",\"githubUserName\": \"yuanqing\",\"githubRepositoryName\": \"sketch-clean-document\",\"menu\": [{\"handler\": \"clean-document\",\"label\": \"Clean Document\"},\"-\",{\"handler\": \"clean-layers/clean-layers\",\"label\": \"Clean Layers\"},{\"handler\": \"delete-unused-styles-and-symbols/delete-unused-styles-and-symbols\",\"label\": \"Delete Unused Styles and Symbols\"},\"-\",{\"Settings\": [{\"handler\": \"clean-layers/settings\",\"label\": \"Settings for Clean Layers\"},{\"handler\": \"delete-unused-styles-and-symbols/settings\",\"label\": \"Settings for Delete Unused Styles and Symbols\"},\"-\",{\"handler\": \"reset-settings\",\"label\": \"Reset Settings\"}]}],\"defaultSettings\": {\"deleteHiddenLayers\": true,\"deleteUnusedLayerStyles\": true,\"deleteUnusedSymbols\": true,\"deleteUnusedTextStyles\": true,\"unnestNestedGroups\": true,\"smartRenameLayers\": true,\"smartSortLayers\": true,\"whitelistRegularExpression\": \"\"}}\n}\n";

  return JSON.parse(packageJson);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/get-default-settings.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/get-default-settings.js ***!
  \********************************************************************/
/*! exports provided: getDefaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSettings", function() { return getDefaultSettings; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "../sketch-plugin-helper/src/common/constants.js");
/* harmony import */ var _common_get_package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/get-package-json */ "../sketch-plugin-helper/src/common/get-package-json.js");


function getDefaultSettings() {
  const {
    defaultSettings
  } = Object(_common_get_package_json__WEBPACK_IMPORTED_MODULE_1__["getPackageJson"])()[_common_constants__WEBPACK_IMPORTED_MODULE_0__["packageJsonConfigKey"]];
  return defaultSettings || {};
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/get-settings.js":
/*!************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/get-settings.js ***!
  \************************************************************/
/*! exports provided: getSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "../sketch-plugin-helper/src/common/constants.js");
/* harmony import */ var _common_get_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/get-package-json */ "../sketch-plugin-helper/src/common/get-package-json.js");



function getSettings() {
  const {
    defaultSettings
  } = Object(_common_get_package_json__WEBPACK_IMPORTED_MODULE_2__["getPackageJson"])()[_common_constants__WEBPACK_IMPORTED_MODULE_1__["packageJsonConfigKey"]];

  if (typeof defaultSettings === 'undefined') {
    return {};
  }

  return Object.keys(defaultSettings).reduce(function (results, key) {
    const sessionValue = Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["sessionVariable"])(key);
    const savedValue = Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["settingForKey"])(key);
    const value = typeof sessionValue !== 'undefined' ? sessionValue : savedValue;
    const defaultValue = defaultSettings[key];
    results[key] = typeof value !== 'undefined' ? value : defaultValue;
    return results;
  }, {});
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/open-settings-dialog.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/open-settings-dialog.js ***!
  \********************************************************************/
/*! exports provided: openSettingsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettingsDialog", function() { return openSettingsDialog; });
/* harmony import */ var _ui_create_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/create-alert */ "../sketch-plugin-helper/src/settings/ui/create-alert.js");
/* harmony import */ var _ui_create_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/create-label */ "../sketch-plugin-helper/src/settings/ui/create-label.js");
/* harmony import */ var _ui_create_stack_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/create-stack-view */ "../sketch-plugin-helper/src/settings/ui/create-stack-view.js");
/* harmony import */ var _ui_create_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/create-form */ "../sketch-plugin-helper/src/settings/ui/create-form.js");
/* harmony import */ var _get_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-settings */ "../sketch-plugin-helper/src/settings/get-settings.js");





const formHeight = 20;
const formPaddingBottom = 12;
const labelHeight = 20;
const labelPaddingBottom = 6;
const width = 300;
function openSettingsDialog({
  title,
  inputs: inputsConfig
}) {
  const settings = Object(_get_settings__WEBPACK_IMPORTED_MODULE_4__["getSettings"])();
  const {
    inputs,
    views,
    stackViewHeight
  } = parse({
    inputsConfig,
    settings
  });
  const stackView = Object(_ui_create_stack_view__WEBPACK_IMPORTED_MODULE_2__["createStackView"])({
    width,
    height: stackViewHeight,
    views
  });
  const alert = Object(_ui_create_alert__WEBPACK_IMPORTED_MODULE_0__["createAlert"])(title);
  alert.setAccessoryView(stackView); // eslint-disable-next-line eqeqeq

  if (alert.runModal() == '1000') {
    return Object.keys(inputs).reduce(function (result, key) {
      const retrieveValue = inputs[key];
      result[key] = retrieveValue();
      return result;
    }, {});
  }

  return null;
}

function parse({
  inputsConfig,
  settings
}) {
  const inputs = {};
  const views = [];
  let stackViewHeight = 0;
  inputsConfig.forEach(function ({
    type,
    key,
    label,
    value: inputsConfigValue,
    ...rest
  }) {
    if (label && type !== 'CHECK_BOX') {
      // Create a label for forms that aren't check boxes
      const labelView = Object(_ui_create_label__WEBPACK_IMPORTED_MODULE_1__["createLabel"])({
        label,
        width,
        height: labelHeight
      });
      views.push({
        view: labelView,
        paddingBottom: labelPaddingBottom
      });
      stackViewHeight += labelHeight + labelPaddingBottom;
    }

    const settingsSavedValue = settings[key];
    const value = inputsConfigValue != null ? inputsConfigValue : settingsSavedValue;
    const {
      view,
      retrieveValue
    } = _ui_create_form__WEBPACK_IMPORTED_MODULE_3__[type]({
      label,
      value,
      width,
      height: formHeight,
      ...rest
    });
    views.push({
      view,
      paddingBottom: formPaddingBottom
    });
    stackViewHeight += formHeight + formPaddingBottom;
    inputs[key] = retrieveValue;
  });
  stackViewHeight -= formPaddingBottom;
  return {
    inputs,
    views,
    stackViewHeight
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/reset-settings.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/reset-settings.js ***!
  \**************************************************************/
/*! exports provided: resetSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSettings", function() { return resetSettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/constants */ "../sketch-plugin-helper/src/common/constants.js");
/* harmony import */ var _common_get_package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/get-package-json */ "../sketch-plugin-helper/src/common/get-package-json.js");




function resetSettings() {
  const {
    defaultSettings
  } = Object(_common_get_package_json__WEBPACK_IMPORTED_MODULE_3__["getPackageJson"])()[_common_constants__WEBPACK_IMPORTED_MODULE_2__["packageJsonConfigKey"]];

  if (typeof defaultSettings === 'undefined') {
    return;
  }

  Object.keys(defaultSettings).forEach(function (key) {
    Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSettingForKey"])(key, undefined);
    Object(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSessionVariable"])(key, undefined);
  });
  Object(_utilities_show_message__WEBPACK_IMPORTED_MODULE_1__["showMessage"])('Reset settings');
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/save-settings.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/save-settings.js ***!
  \*************************************************************/
/*! exports provided: saveSettings, saveTemporarySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSettings", function() { return saveSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTemporarySettings", function() { return saveTemporarySettings; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_show_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/show-message */ "../sketch-plugin-helper/src/utilities/show-message.js");


const saveSettings = saveSettingsFactory(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSettingForKey"]);
const saveTemporarySettings = saveSettingsFactory(sketch_settings__WEBPACK_IMPORTED_MODULE_0__["setSessionVariable"]);

function saveSettingsFactory(saveValue) {
  return function (settings, options) {
    if (typeof settings === 'undefined') {
      return;
    }

    Object.keys(settings).forEach(function (key) {
      const value = settings[key];

      if (typeof value === 'undefined') {
        return;
      }

      saveValue(key, value);
    });
    const successMessage = typeof options !== 'undefined' && options.successMessage;

    if (successMessage) {
      Object(_utilities_show_message__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(successMessage);
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/check-box.js":
/*!************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/check-box.js ***!
  \************************************************************/
/*! exports provided: checkBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBox", function() { return checkBox; });
function checkBox({
  width,
  height,
  label,
  value
}) {
  const checkBox = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
  checkBox.setButtonType(NSSwitchButton);
  checkBox.setBezelStyle(0);
  checkBox.setState(value ? NSOnState : NSOffState);
  checkBox.setTitle(label);
  return {
    view: checkBox,
    retrieveValue: function () {
      // eslint-disable-next-line eqeqeq
      return checkBox.stringValue() == '1';
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-alert.js":
/*!***************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-alert.js ***!
  \***************************************************************/
/*! exports provided: createAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlert", function() { return createAlert; });
function createAlert(title) {
  const alert = NSAlert.alloc().init();
  alert.window().setAutorecalculatesKeyViewLoop(true);
  alert.setMessageText(title);
  alert.addButtonWithTitle('OK');
  alert.addButtonWithTitle('Cancel');
  return alert;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-form.js":
/*!**************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-form.js ***!
  \**************************************************************/
/*! exports provided: CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-box */ "../sketch-plugin-helper/src/settings/ui/check-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return _check_box__WEBPACK_IMPORTED_MODULE_0__["checkBox"]; });

/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop-down */ "../sketch-plugin-helper/src/settings/ui/drop-down.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return _drop_down__WEBPACK_IMPORTED_MODULE_1__["dropDown"]; });

/* harmony import */ var _radio_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-buttons */ "../sketch-plugin-helper/src/settings/ui/radio-buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return _radio_buttons__WEBPACK_IMPORTED_MODULE_2__["radioButtons"]; });

/* harmony import */ var _numeric_text_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numeric-text-box */ "../sketch-plugin-helper/src/settings/ui/numeric-text-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return _numeric_text_box__WEBPACK_IMPORTED_MODULE_3__["numericTextBox"]; });

/* harmony import */ var _string_text_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string-text-box */ "../sketch-plugin-helper/src/settings/ui/string-text-box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return _string_text_box__WEBPACK_IMPORTED_MODULE_4__["stringTextBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return _string_text_box__WEBPACK_IMPORTED_MODULE_4__["textBox"]; });








/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-label.js":
/*!***************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-label.js ***!
  \***************************************************************/
/*! exports provided: createLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabel", function() { return createLabel; });
function createLabel({
  label,
  width,
  height
}) {
  const textField = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
  textField.setBezeled(false);
  textField.setDrawsBackground(false);
  textField.setEditable(false);
  textField.setLineBreakMode(NSLineBreakByTruncatingTail);
  textField.setSelectable(false);
  textField.setStringValue(label);
  return textField;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/create-stack-view.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/create-stack-view.js ***!
  \********************************************************************/
/*! exports provided: createStackView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStackView", function() { return createStackView; });
function createStackView({
  width,
  height,
  views
}) {
  const stackView = NSStackView.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
  stackView.setAlignment(NSLayoutAttributeLeft);
  stackView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  stackView.setSpacing(0);
  stackView.setTranslatesAutoresizingMaskIntoConstraints(true);
  stackView.updateConstraintsForSubtreeIfNeeded();
  views.forEach(function ({
    view,
    paddingBottom
  }) {
    stackView.addView_inGravity_(view, NSStackViewGravityTop);
    stackView.setCustomSpacing_afterView_(paddingBottom, view);
  });
  return stackView;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/drop-down.js":
/*!************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/drop-down.js ***!
  \************************************************************/
/*! exports provided: dropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropDown", function() { return dropDown; });
function dropDown({
  width,
  height,
  value,
  possibleValues
}) {
  const popUpButton = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
  possibleValues.forEach(function (value) {
    popUpButton.addItemWithTitle(value);
  });
  const index = typeof value !== 'undefined' ? possibleValues.indexOf(value) : 0;
  popUpButton.selectItemAtIndex(index);
  return {
    view: popUpButton,
    retrieveValue: function () {
      const index = popUpButton.indexOfSelectedItem();
      return possibleValues[index];
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/form-types.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/form-types.js ***!
  \*************************************************************/
/*! exports provided: CHECK_BOX, DROP_DOWN, RADIO_BUTTONS, NUMERIC_TEXT_BOX, STRING_TEXT_BOX, TEXT_BOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_BOX", function() { return CHECK_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_DOWN", function() { return DROP_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO_BUTTONS", function() { return RADIO_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_TEXT_BOX", function() { return NUMERIC_TEXT_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_TEXT_BOX", function() { return STRING_TEXT_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_BOX", function() { return TEXT_BOX; });
const CHECK_BOX = 'CHECK_BOX';
const DROP_DOWN = 'DROP_DOWN';
const RADIO_BUTTONS = 'RADIO_BUTTONS';
const NUMERIC_TEXT_BOX = 'NUMERIC_TEXT_BOX';
const STRING_TEXT_BOX = 'STRING_TEXT_BOX';
const TEXT_BOX = STRING_TEXT_BOX;

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/numeric-text-box.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/numeric-text-box.js ***!
  \*******************************************************************/
/*! exports provided: numericTextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericTextBox", function() { return numericTextBox; });
/* harmony import */ var _text_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-box */ "../sketch-plugin-helper/src/settings/ui/text-box.js");

const numericTextBox = Object(_text_box__WEBPACK_IMPORTED_MODULE_0__["textBox"])(function (value) {
  // eslint-disable-next-line no-eval
  return parseFloat(eval(value));
});

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/radio-buttons.js":
/*!****************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/radio-buttons.js ***!
  \****************************************************************/
/*! exports provided: radioButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioButtons", function() { return radioButtons; });
function radioButtons({
  width,
  height,
  value,
  possibleValues
}) {
  const buttonFormat = NSButtonCell.alloc().init();
  buttonFormat.setButtonType(NSRadioButton);
  const length = possibleValues.length;
  const matrix = NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0, 0, width, height), NSRadioModeMatrix, buttonFormat, 1, length);
  matrix.setCellSize(CGSizeMake(Math.floor(width / length), height));
  const cells = matrix.cells();
  cells.forEach(function (cell, index) {
    cell.setTitle(possibleValues[index]);
  });
  const index = typeof value !== 'undefined' ? possibleValues.indexOf(value) : 0;
  matrix.selectCellAtRow_column(0, index);
  return {
    view: matrix,
    retrieveValue: function () {
      const index = matrix.cells().indexOfObject(matrix.selectedCell());
      return possibleValues[index];
    }
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/string-text-box.js":
/*!******************************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/string-text-box.js ***!
  \******************************************************************/
/*! exports provided: stringTextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringTextBox", function() { return stringTextBox; });
/* harmony import */ var _text_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-box */ "../sketch-plugin-helper/src/settings/ui/text-box.js");

const stringTextBox = Object(_text_box__WEBPACK_IMPORTED_MODULE_0__["textBox"])();

/***/ }),

/***/ "../sketch-plugin-helper/src/settings/ui/text-box.js":
/*!***********************************************************!*\
  !*** ../sketch-plugin-helper/src/settings/ui/text-box.js ***!
  \***********************************************************/
/*! exports provided: textBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textBox", function() { return textBox; });
function textBox(transform) {
  return function ({
    width,
    height,
    value,
    placeholder
  }) {
    const textField = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0, width, height));
    const stringValue = value == null ? '' : `${value}`;
    textField.setStringValue(stringValue);

    if (placeholder) {
      textField.setPlaceholderString(placeholder);
    }

    return {
      view: textField,
      retrieveValue: function () {
        const string = `${textField.stringValue()}`;
        return transform ? transform(string) : string;
      }
    };
  };
}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js":
/*!***************************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js ***!
  \***************************************************************************/
/*! exports provided: compareSketchDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareSketchDocuments", function() { return compareSketchDocuments; });
function compareSketchDocuments(a, b) {
  return compare(a.toJSON(), b.toJSON());
}

function compare(a, b) {
  if (isObject(a) && isObject(b)) {
    return compareObjects(a, b);
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return compareArrays(a, b);
  }

  if (typeof a === 'boolean' && typeof b === 'boolean' || typeof a === 'number' && typeof b === 'number' || typeof a === 'string' && typeof b === 'string') {
    return a === b;
  }

  return a == null && b == null;
}

function isObject(x) {
  return typeof x === 'object' && !!x && x.constructor === Object;
}

const IGNORED_KEYS = {
  id: true,
  includedLayerIds: true,
  libraryID: true,
  objectID: true,
  path: true,
  selected: true,
  sharedStyleId: true,
  symbolID: true
};

function compareObjects(a, b) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.reduce(function (result, key) {
    if (!result) {
      return false;
    }

    if (IGNORED_KEYS[key]) {
      return result;
    }

    return compare(a[key], b[key]);
  }, true);
}

function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  return a.reduce(function (result, value, i) {
    if (!result) {
      return false;
    }

    return compare(value, b[i]);
  }, true);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/results-logger.js":
/*!*****************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/results-logger.js ***!
  \*****************************************************************/
/*! exports provided: ResultsLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsLogger", function() { return ResultsLogger; });
class ResultsLogger {
  constructor() {
    this.count = 0;
    this.passCount = 0;
    console.log('TAP version 13');
  }

  logTestName(testName) {
    console.log(`# ${testName}`);
  }

  logAssertionPassed(message) {
    this.count += 1;
    this.passCount += 1;
    console.log(`ok ${this.count} ${message || ''}`.trim());
  }

  logAssertionFailed(message) {
    this.count += 1;
    console.log(`not ok ${this.count} ${message || ''}`.trim());
  }

  logResultsSummary() {
    console.log(`1..${this.count}`);
    console.log(`\n# tests ${this.count}`);
    console.log(`# pass  ${this.passCount}`);
    const failCount = this.count - this.passCount;

    if (this.count === 0 || failCount > 0) {
      console.log(`# fail  ${failCount}`);
      console.log('\n# not ok\n');
    } else {
      console.log('\n# ok\n');
    }
  }

}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/test-suite.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/test-suite.js ***!
  \*************************************************************/
/*! exports provided: TestSuite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSuite", function() { return TestSuite; });
class TestSuite {
  constructor({
    name,
    resultsLogger
  }) {
    this.expectedCount = null;
    this.actualCount = 0;
    this.failed = false;
    this.resultsLogger = resultsLogger;
    this.resultsLogger.logTestName(name);
  }

  assertionPassed() {
    this.actualCount += 1;
    this.resultsLogger.logAssertionPassed();

    if (this.actualCount > this.expectedCount) {
      this.failed = true;
      this.resultsLogger.logAssertionFailed('plan != count');
    }
  }

  assertionFailed() {
    this.actualCount += 1;
    this.resultsLogger.logAssertionFailed();
  }

  plan(count) {
    if (this.expectedCount === null) {
      this.expectedCount = count;
      return;
    }

    this.resultsLogger.logAssertionFailed('plan called twice');
  }

  true(object) {
    if (object === true) {
      this.assertionPassed();
      return;
    }

    this.assertionFailed();
  }

  checkAssertionCounts() {
    if (this.failed === false && this.actualCount !== this.expectedCount) {
      this.resultsLogger.logAssertionFailed('plan != count');
    }
  }

}

/***/ }),

/***/ "../sketch-plugin-helper/src/test-runner/test.js":
/*!*******************************************************!*\
  !*** ../sketch-plugin-helper/src/test-runner/test.js ***!
  \*******************************************************/
/*! exports provided: test, snapshotTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotTest", function() { return snapshotTest; });
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-promise */ "../sketch-plugin-helper/node_modules/is-promise/index.js");
/* harmony import */ var is_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p_each_series__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-each-series */ "../sketch-plugin-helper/node_modules/p-each-series/index.js");
/* harmony import */ var p_each_series__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p_each_series__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _compare_sketch_documents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compare-sketch-documents */ "../sketch-plugin-helper/src/test-runner/compare-sketch-documents.js");
/* harmony import */ var _utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/open-sketch-document */ "../sketch-plugin-helper/src/utilities/open-sketch-document.js");
/* harmony import */ var _results_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results-logger */ "../sketch-plugin-helper/src/test-runner/results-logger.js");
/* harmony import */ var _test_suite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-suite */ "../sketch-plugin-helper/src/test-runner/test-suite.js");






const tests = [];
let isQueued = false;
function test(name, handler) {
  tests.push({
    name,
    handler
  });

  if (!isQueued) {
    isQueued = true;
    setTimeout(runAllTests, 0);
  }
}
function snapshotTest(name, inputFilePath, snapshotFilePath, handler) {
  tests.push({
    name,
    handler: createSnapshotTest({
      inputFilePath,
      snapshotFilePath,
      handler
    })
  });

  if (!isQueued) {
    isQueued = true;
    setTimeout(runAllTests, 0);
  }
}

function createSnapshotTest({
  inputFilePath,
  snapshotFilePath,
  handler
}) {
  return async function (t) {
    t.plan(1);
    const inputFile = await Object(_utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__["openSketchDocument"])(inputFilePath);
    handler(inputFile);
    const snapshotFile = await Object(_utilities_open_sketch_document__WEBPACK_IMPORTED_MODULE_3__["openSketchDocument"])(snapshotFilePath);
    t.true(Object(_compare_sketch_documents__WEBPACK_IMPORTED_MODULE_2__["compareSketchDocuments"])(inputFile, snapshotFile));
    inputFile.close();
    snapshotFile.close();
  };
}

async function runAllTests() {
  const resultsLogger = new _results_logger__WEBPACK_IMPORTED_MODULE_4__["ResultsLogger"]();

  try {
    await p_each_series__WEBPACK_IMPORTED_MODULE_1___default()(tests, async function ({
      name,
      handler
    }) {
      const testSuite = new _test_suite__WEBPACK_IMPORTED_MODULE_5__["TestSuite"]({
        name,
        resultsLogger
      });
      const result = handler(testSuite);

      if (is_promise__WEBPACK_IMPORTED_MODULE_0___default()(result)) {
        await result;
      }

      testSuite.checkAssertionCounts();
      return Promise.resolve();
    });
  } catch (error) {
    throw error;
  } finally {
    resultsLogger.logResultsSummary();
  }
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/add-layers-to-page.js":
/*!*******************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/add-layers-to-page.js ***!
  \*******************************************************************/
/*! exports provided: addLayersToCurrentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLayersToCurrentPage", function() { return addLayersToCurrentPage; });
/* harmony import */ var _get_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-document */ "../sketch-plugin-helper/src/utilities/get-document.js");

function addLayersToCurrentPage(layers) {
  const document = Object(_get_document__WEBPACK_IMPORTED_MODULE_0__["getCurrentDocument"])();
  return document.selectedPage.sketchObject.addLayers(layers);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js":
/*!****************************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/adjust-parent-groups-to-fit.js ***!
  \****************************************************************************/
/*! exports provided: adjustParentGroupsToFit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustParentGroupsToFit", function() { return adjustParentGroupsToFit; });
function adjustParentGroupsToFit(layer) {
  adjustParentGroupsToFitHelper(layer, {});
}

function adjustParentGroupsToFitHelper(layer, adjustedGroupIds) {
  const parent = layer.parent;

  if (parent && parent.type === 'Group' && !adjustedGroupIds[parent.id]) {
    parent.adjustToFit();
    adjustedGroupIds[parent.id] = true;
    adjustParentGroupsToFitHelper(parent, adjustedGroupIds);
  }
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/find-layers-by-name.js":
/*!********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/find-layers-by-name.js ***!
  \********************************************************************/
/*! exports provided: findLayersByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLayersByName", function() { return findLayersByName; });
/* harmony import */ var _get_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-layer */ "../sketch-plugin-helper/src/utilities/get-layer.js");
/* harmony import */ var _iterate_nested_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterate-nested-layers */ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js");


function findLayersByName(name) {
  const result = [];
  Object(_iterate_nested_layers__WEBPACK_IMPORTED_MODULE_1__["iterateNestedLayers"])(Object(_get_layer__WEBPACK_IMPORTED_MODULE_0__["getLayersOnCurrentPage"])(), function (layer) {
    if (layer.name === name) {
      result.push(layer);
    }
  });
  return result;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-absolute-coordinates.js":
/*!*************************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-absolute-coordinates.js ***!
  \*************************************************************************/
/*! exports provided: getAbsoluteCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteCoordinates", function() { return getAbsoluteCoordinates; });
function getAbsoluteCoordinates(layer) {
  return getAbsoluteCoordinatesHelper(layer, {
    x: layer.frame.x,
    y: layer.frame.y
  });
}

function getAbsoluteCoordinatesHelper(layer, result) {
  const parent = layer.parent;

  if (parent.type === 'Page') {
    return result;
  }

  const newResult = {
    x: result.x + parent.frame.x,
    y: result.y + parent.frame.y
  };

  if (parent.type === 'Artboard') {
    return newResult;
  }

  return getAbsoluteCoordinatesHelper(parent, newResult);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-document.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-document.js ***!
  \*************************************************************/
/*! exports provided: getCurrentDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDocument", function() { return getCurrentDocument; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

function getCurrentDocument() {
  const documents = NSApplication.sharedApplication().orderedDocuments();
  return Object(sketch__WEBPACK_IMPORTED_MODULE_0__["fromNative"])(documents[0]);
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-layer.js":
/*!**********************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-layer.js ***!
  \**********************************************************/
/*! exports provided: getLayersOnCurrentPage, getLayersOnAllPages, getArtboardsOnCurrentPage, getSelectedLayers, getSelectedLayersOrLayersOnCurrentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayersOnCurrentPage", function() { return getLayersOnCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayersOnAllPages", function() { return getLayersOnAllPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArtboardsOnCurrentPage", function() { return getArtboardsOnCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayers", function() { return getSelectedLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedLayersOrLayersOnCurrentPage", function() { return getSelectedLayersOrLayersOnCurrentPage; });
/* harmony import */ var _get_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-document */ "../sketch-plugin-helper/src/utilities/get-document.js");
/* harmony import */ var _get_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-page */ "../sketch-plugin-helper/src/utilities/get-page.js");


function getLayersOnCurrentPage() {
  return Object(_get_page__WEBPACK_IMPORTED_MODULE_1__["getCurrentPage"])().layers;
}
function getLayersOnAllPages() {
  const result = [];
  Object(_get_page__WEBPACK_IMPORTED_MODULE_1__["getAllPages"])().forEach(function ({
    layers
  }) {
    layers.forEach(function (layer) {
      result.push(layer);
    });
  });
  return result;
}
function getArtboardsOnCurrentPage() {
  return getLayersOnCurrentPage().filter(function (layer) {
    return layer.type === 'Artboard';
  });
}
function getSelectedLayers() {
  const document = Object(_get_document__WEBPACK_IMPORTED_MODULE_0__["getCurrentDocument"])();
  return document.selectedLayers.layers.reverse();
}
function getSelectedLayersOrLayersOnCurrentPage() {
  const selectedLayers = getSelectedLayers();
  return selectedLayers.length !== 0 ? selectedLayers : getLayersOnCurrentPage();
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/get-page.js":
/*!*********************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/get-page.js ***!
  \*********************************************************/
/*! exports provided: getCurrentPage, getAllPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPages", function() { return getAllPages; });
/* harmony import */ var _get_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-document */ "../sketch-plugin-helper/src/utilities/get-document.js");

function getCurrentPage() {
  return Object(_get_document__WEBPACK_IMPORTED_MODULE_0__["getCurrentDocument"])().selectedPage;
}
function getAllPages() {
  return Object(_get_document__WEBPACK_IMPORTED_MODULE_0__["getCurrentDocument"])().pages;
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/iterate-nested-layers.js":
/*!**********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/iterate-nested-layers.js ***!
  \**********************************************************************/
/*! exports provided: iterateNestedLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateNestedLayers", function() { return iterateNestedLayers; });
function iterateNestedLayers(layers, callback) {
  layers.forEach(function (layer) {
    callback(layer);
    const type = layer.type;

    if (type === 'Artboard' || type === 'Group') {
      iterateNestedLayers(layer.layers, callback);
    }
  });
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/open-sketch-document.js":
/*!*********************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/open-sketch-document.js ***!
  \*********************************************************************/
/*! exports provided: openSketchDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSketchDocument", function() { return openSketchDocument; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);

async function openSketchDocument(filePath) {
  return new Promise(function (resolve, reject) {
    sketch_dom__WEBPACK_IMPORTED_MODULE_0__["Document"].open(filePath, function (error, document) {
      if (error) {
        return reject(error);
      }

      resolve(document);
    });
  });
}

/***/ }),

/***/ "../sketch-plugin-helper/src/utilities/show-message.js":
/*!*************************************************************!*\
  !*** ../sketch-plugin-helper/src/utilities/show-message.js ***!
  \*************************************************************/
/*! exports provided: showMessage, showSuccessMessage, showErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccessMessage", function() { return showSuccessMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorMessage", function() { return showErrorMessage; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);

function showMessage(message, options) {
  sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message(options && options.symbol ? `${options.symbol} ${message}` : message);
}
function showSuccessMessage(message) {
  showMessage(message, {
    symbol: '✔'
  });
}
function showErrorMessage(message) {
  showMessage(message, {
    symbol: '✘'
  });
}

/***/ }),

/***/ "../sketch-sort-layer-list/src/attributes/smart-sort.js":
/*!**************************************************************!*\
  !*** ../sketch-sort-layer-list/src/attributes/smart-sort.js ***!
  \**************************************************************/
/*! exports provided: default, smartSort, checkIfLayersOverlap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smartSort", function() { return smartSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfLayersOverlap", function() { return checkIfLayersOverlap; });
/* harmony import */ var _compare_y_and_x_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compare-y-and-x-position */ "../sketch-sort-layer-list/src/compare-y-and-x-position.js");
/* harmony import */ var _sort_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sort-layers */ "../sketch-sort-layer-list/src/sort-layers.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_sort_layers__WEBPACK_IMPORTED_MODULE_1__["sortLayers"])({
  sortLayers: smartSort,
  successMessage: 'Smart sorted layers'
}));
function smartSort([firstLayer, ...layers]) {
  const results = [firstLayer];
  layers.forEach(function (layer) {
    let i = results.length;

    while (i-- > 0) {
      const resultsLayer = results[i];

      if (checkIfLayersOverlap(layer, resultsLayer) || Object(_compare_y_and_x_position__WEBPACK_IMPORTED_MODULE_0__["compareYandXposition"])(layer, resultsLayer) > 0) {
        results.splice(i + 1, 0, layer);
        return;
      }
    }

    results.splice(0, 0, layer);
  });
  return results;
}
function checkIfLayersOverlap(layerA, layerB) {
  const a = layerA.frame;
  const b = layerB.frame;
  return !(a.x + a.width < b.x || b.x + b.width < a.x || a.y + a.height < b.y || b.y + b.height < a.y);
}

/***/ }),

/***/ "../sketch-sort-layer-list/src/compare-y-and-x-position.js":
/*!*****************************************************************!*\
  !*** ../sketch-sort-layer-list/src/compare-y-and-x-position.js ***!
  \*****************************************************************/
/*! exports provided: compareYandXposition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareYandXposition", function() { return compareYandXposition; });
function compareYandXposition(layerA, layerB) {
  const a = layerA.frame;
  const b = layerB.frame;
  const yPositionDifference = a.y - b.y;

  if (yPositionDifference !== 0) {
    return yPositionDifference;
  }

  return a.x - b.x;
}

/***/ }),

/***/ "../sketch-sort-layer-list/src/sort-layers.js":
/*!****************************************************!*\
  !*** ../sketch-sort-layer-list/src/sort-layers.js ***!
  \****************************************************/
/*! exports provided: sortLayers, areLayersInSameList, updateLayerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortLayers", function() { return sortLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areLayersInSameList", function() { return areLayersInSameList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLayerList", function() { return updateLayerList; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

function sortLayers({
  sortLayers,
  successMessage
}) {
  return function () {
    const selectedLayers = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSelectedLayers"])();

    if (selectedLayers.length < 2) {
      Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showErrorMessage"])('Select at least 2 layers');
      return;
    }

    if (!areLayersInSameList(selectedLayers)) {
      Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showErrorMessage"])('Selected layers are not in the same list');
      return;
    }

    const sortedLayers = sortLayers(selectedLayers);
    updateLayerList({
      sortedLayers,
      shouldSelectLayers: true
    });
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])(successMessage);
  };
}
function areLayersInSameList([firstLayer, ...layers]) {
  const firstLayerParent = firstLayer.parent;
  return layers.reduce(function (result, layer) {
    if (!result) {
      return result;
    }

    const parent = layer.parent;

    if (firstLayerParent == null) {
      return parent == null;
    }

    return parent.id && parent.id === firstLayerParent.id;
  }, true);
}
function updateLayerList({
  sortedLayers,
  shouldSelectLayers
}) {
  const firstLayer = sortedLayers[0];
  const parent = firstLayer.sketchObject.parentGroup();
  const temporaryLayer = MSLayer.alloc().init();
  parent.insertLayer_beforeLayer(temporaryLayer, firstLayer.sketchObject);
  sortedLayers.reverse().forEach(function (layer) {
    const layerSketchObject = layer.sketchObject;
    layerSketchObject.moveToLayer_beforeLayer(parent, temporaryLayer);
    layer.selected = shouldSelectLayers;
  });
  temporaryLayer.removeFromParent();
}

/***/ }),

/***/ "./src/clean-document.js":
/*!*******************************!*\
  !*** ./src/clean-document.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cleanDocument; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");
/* harmony import */ var _clean_layers_clean_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clean-layers/clean-layers */ "./src/clean-layers/clean-layers.js");
/* harmony import */ var _delete_unused_styles_and_symbols_delete_unused_styles_and_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-unused-styles-and-symbols/delete-unused-styles-and-symbols */ "./src/delete-unused-styles-and-symbols/delete-unused-styles-and-symbols.js");



function cleanDocument() {
  Object(_clean_layers_clean_layers__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isCleanDocument: true
  });
  Object(_delete_unused_styles_and_symbols_delete_unused_styles_and_symbols__WEBPACK_IMPORTED_MODULE_2__["default"])({
    isCleanDocument: true
  });
  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])('Document cleaned');
}

/***/ }),

/***/ "./src/clean-layers/clean-layers.js":
/*!******************************************!*\
  !*** ./src/clean-layers/clean-layers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cleanLayers; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");
/* harmony import */ var _delete_hidden_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-hidden-layer */ "./src/clean-layers/delete-hidden-layer.js");
/* harmony import */ var _unnest_nested_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unnest-nested-group */ "./src/clean-layers/unnest-nested-group.js");
/* harmony import */ var _smart_rename_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-rename-layer */ "./src/clean-layers/smart-rename-layer.js");
/* harmony import */ var _smart_sort_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart-sort-layer */ "./src/clean-layers/smart-sort-layer.js");





function cleanLayers({
  isCleanDocument
}) {
  const settings = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSettings"])();
  const layers = isCleanDocument ? Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getLayersOnAllPages"])() : Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSelectedLayersOrLayersOnCurrentPage"])();
  const whitelistRegularExpression = settings.whitelistRegularExpression === '' ? null : new RegExp(settings.whitelistRegularExpression);
  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["iterateNestedLayers"])(layers, function (layer) {
    if (whitelistRegularExpression && whitelistRegularExpression.test(layer.name)) {
      return;
    }

    if (settings.deleteHiddenLayers && Object(_delete_hidden_layer__WEBPACK_IMPORTED_MODULE_1__["default"])(layer)) {
      return;
    }

    if (settings.smartRenameLayers) {
      Object(_smart_rename_layer__WEBPACK_IMPORTED_MODULE_3__["default"])(layer);
    }

    if (settings.smartSortLayers) {
      Object(_smart_sort_layer__WEBPACK_IMPORTED_MODULE_4__["default"])(layer);
    }

    if (settings.unnestNestedGroups) {
      Object(_unnest_nested_group__WEBPACK_IMPORTED_MODULE_2__["default"])(layer);
    }
  });

  if (!isCleanDocument) {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])('Layers cleaned');
  }
}

/***/ }),

/***/ "./src/clean-layers/delete-hidden-layer.js":
/*!*************************************************!*\
  !*** ./src/clean-layers/delete-hidden-layer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deleteHiddenLayer; });
function deleteHiddenLayer(layer) {
  if (layer.hidden) {
    layer.remove();
    return true;
  }

  return false;
}

/***/ }),

/***/ "./src/clean-layers/settings.js":
/*!**************************************!*\
  !*** ./src/clean-layers/settings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return settings; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

const settingsConfig = {
  title: 'Settings for Clean Layers',
  inputs: [{
    type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
    key: 'smartRenameLayers',
    label: 'Smart rename layers'
  }, {
    type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
    key: 'smartSortLayers',
    label: 'Smart sort layers'
  }, {
    type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
    key: 'unnestNestedGroups',
    label: 'Unnest nested groups'
  }, {
    type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
    key: 'deleteHiddenLayers',
    label: 'Delete hidden layers'
  }, {
    type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["TEXT_BOX"],
    key: 'whitelistRegularExpression',
    label: 'Whitelist regular expression'
  }]
};
function settings() {
  const settings = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["openSettingsDialog"])(settingsConfig);

  if (settings) {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["saveSettings"])(settings, {
      successMessage: 'Settings saved'
    });
  }
}

/***/ }),

/***/ "./src/clean-layers/smart-rename-layer.js":
/*!************************************************!*\
  !*** ./src/clean-layers/smart-rename-layer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return smartRenameLayer; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

const mapLayerTypeToRenameFunction = {
  Group: function (layer) {
    layer.name = 'Group';
  },
  HotSpot: function (layer) {
    layer.name = 'Hotspot';
  },
  Image: function (layer) {
    layer.name = 'Bitmap';
  },
  Shape: function (layer) {
    layer.name = 'Combined Shape';
    layer.layers.forEach(function (childLayer) {
      smartRenameLayer(childLayer);
    });
  },
  ShapePath: function (layer) {
    if (layer.shapeType === 'Rectangle') {
      layer.name = 'Rectangle';
      return;
    }

    if (layer.shapeType === 'Oval') {
      layer.name = 'Oval';
      return;
    }

    layer.name = 'Path';
  },
  SymbolInstance: function (layer) {
    const symbolMaster = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getCurrentDocument"])().getSymbolMasterWithID(layer.symbolId);
    layer.name = symbolMaster.name;
  },
  Text: function (layer) {
    const layerSketchObject = layer.sketchObject;
    layerSketchObject.setName(layerSketchObject.stringValue().substring(0, 20));
    layerSketchObject.setNameIsFixed(false);
  }
};
function smartRenameLayer(layer) {
  if (layer.exportFormats.length !== 0) {
    return;
  }

  if (layer.sketchObject.hasClippingMask() === 1) {
    layer.name = 'Mask';
    return;
  }

  const smartRename = mapLayerTypeToRenameFunction[layer.type];

  if (smartRename) {
    smartRename(layer);
  }
}

/***/ }),

/***/ "./src/clean-layers/smart-sort-layer.js":
/*!**********************************************!*\
  !*** ./src/clean-layers/smart-sort-layer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return smartSortLayer; });
/* harmony import */ var sketch_sort_layer_list_src_attributes_smart_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-sort-layer-list/src/attributes/smart-sort */ "../sketch-sort-layer-list/src/attributes/smart-sort.js");
/* harmony import */ var sketch_sort_layer_list_src_sort_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch-sort-layer-list/src/sort-layers */ "../sketch-sort-layer-list/src/sort-layers.js");


function smartSortLayer(layer) {
  if (layer.type === 'Artboard' || layer.type === 'Group') {
    const sortedLayers = Object(sketch_sort_layer_list_src_attributes_smart_sort__WEBPACK_IMPORTED_MODULE_0__["smartSort"])([...layer.layers].reverse());
    Object(sketch_sort_layer_list_src_sort_layers__WEBPACK_IMPORTED_MODULE_1__["updateLayerList"])({
      sortedLayers,
      shouldSelectLayers: false
    });
  }
}

/***/ }),

/***/ "./src/clean-layers/unnest-nested-group.js":
/*!*************************************************!*\
  !*** ./src/clean-layers/unnest-nested-group.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unnestNestedGroup; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

function unnestNestedGroup(layer) {
  if (layer.type !== 'Group') {
    return;
  }

  const childLayers = layer.layers;
  const length = childLayers.length;

  if (length === 0) {
    layer.remove();
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["adjustParentGroupsToFit"])(layer);
    return;
  }

  if (length === 1) {
    childLayers[0].sketchObject.moveToLayer_beforeLayer(layer.parent.sketchObject, layer.sketchObject);
    childLayers[0].selected = false;
    layer.remove();
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["adjustParentGroupsToFit"])(layer);
    unnestNestedGroup(childLayers[0]);
    return;
  }

  childLayers.forEach(function (childLayer) {
    unnestNestedGroup(childLayer);
  });
}

/***/ }),

/***/ "./src/delete-unused-styles-and-symbols/delete-unused-styles-and-symbols.js":
/*!**********************************************************************************!*\
  !*** ./src/delete-unused-styles-and-symbols/delete-unused-styles-and-symbols.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deleteUnusedStylesAndSymbols; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");
/* harmony import */ var _delete_unused_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-unused-styles */ "./src/delete-unused-styles-and-symbols/delete-unused-styles.js");
/* harmony import */ var _delete_unused_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-unused-symbols */ "./src/delete-unused-styles-and-symbols/delete-unused-symbols.js");



function deleteUnusedStylesAndSymbols({
  isCleanDocument
}) {
  const settings = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getSettings"])();
  let deletedStylesCount = 0;

  if (settings.deleteUnusedLayerStyles) {
    deletedStylesCount += Object(_delete_unused_styles__WEBPACK_IMPORTED_MODULE_1__["deleteUnusedLayerStyles"])();
  }

  if (settings.deleteUnusedTextStyles) {
    deletedStylesCount += Object(_delete_unused_styles__WEBPACK_IMPORTED_MODULE_1__["deleteUnusedTextStyles"])();
  }

  let deletedSymbolsCount = 0;

  if (settings.deleteUnusedSymbols) {
    deletedSymbolsCount += Object(_delete_unused_symbols__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }

  if (deletedStylesCount === 0 && deletedSymbolsCount === 0) {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showMessage"])('No unused styles or symbols found');
    return;
  }

  const deletedStylesMessage = createMessage({
    type: 'style',
    count: deletedStylesCount
  });
  const deletedSymbolMessage = createMessage({
    type: 'symbol',
    count: deletedSymbolsCount
  });

  if (isCleanDocument) {
    return;
  }

  if (deletedStylesCount !== 0 && deletedSymbolsCount !== 0) {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])(`Deleted ${deletedStylesMessage} and ${deletedSymbolMessage}`);
    return;
  }

  if (deletedSymbolsCount !== 0) {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])(`Deleted ${deletedSymbolMessage}`);
    return;
  }

  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["showSuccessMessage"])(`Deleted ${deletedStylesMessage}`);
}

function createMessage({
  type,
  count
}) {
  return `${count} unused ${type}${count === 1 ? '' : 's'}`;
}

/***/ }),

/***/ "./src/delete-unused-styles-and-symbols/delete-unused-styles.js":
/*!**********************************************************************!*\
  !*** ./src/delete-unused-styles-and-symbols/delete-unused-styles.js ***!
  \**********************************************************************/
/*! exports provided: deleteUnusedLayerStyles, deleteUnusedTextStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUnusedLayerStyles", function() { return deleteUnusedLayerStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUnusedTextStyles", function() { return deleteUnusedTextStyles; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

const deleteUnusedLayerStyles = deleteUnusedStylesFactory('layerStyles', 'sharedLayerStyles');
const deleteUnusedTextStyles = deleteUnusedStylesFactory('layerTextStyles', 'sharedTextStyles');

function deleteUnusedStylesFactory(documentDataKey, documentKey) {
  return function () {
    const document = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getCurrentDocument"])();
    const styles = document.sketchObject.documentData()[documentDataKey]();
    let count = 0;
    document[documentKey].forEach(function (sharedStyle) {
      if (sharedStyle.getAllInstancesLayers().length === 0) {
        styles.removeSharedStyle(styles.sharedStyleWithID(sharedStyle.id));
        count++;
      }
    });
    return count;
  };
}

/***/ }),

/***/ "./src/delete-unused-styles-and-symbols/delete-unused-symbols.js":
/*!***********************************************************************!*\
  !*** ./src/delete-unused-styles-and-symbols/delete-unused-symbols.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deleteUnusedSymbols; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

function deleteUnusedSymbols() {
  let count = 0;
  Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["iterateNestedLayers"])(Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["getLayersOnAllPages"])(), function (layer) {
    if (layer.type === 'SymbolMaster' && layer.getAllInstances().length === 0) {
      layer.remove();
      count++;
    }
  });
  return count;
}

/***/ }),

/***/ "./src/delete-unused-styles-and-symbols/settings.js":
/*!**********************************************************!*\
  !*** ./src/delete-unused-styles-and-symbols/settings.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return settings; });
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

const settingsConfig = {
  title: 'Settings for Delete Unused Styles and Symbols',
  inputs: [{
    type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
    key: 'deleteUnusedTextStyles',
    label: 'Delete unused text styles'
  }, {
    type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
    key: 'deleteUnusedLayerStyles',
    label: 'Delete unused layer styles'
  }, {
    type: sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["CHECK_BOX"],
    key: 'deleteUnusedSymbols',
    label: 'Delete unused symbols'
  }]
};
function settings() {
  const settings = Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["openSettingsDialog"])(settingsConfig);

  if (settings) {
    Object(sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["saveSettings"])(settings, {
      successMessage: 'Settings saved'
    });
  }
}

/***/ }),

/***/ "./src/reset-settings.js":
/*!*******************************!*\
  !*** ./src/reset-settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-plugin-helper */ "../sketch-plugin-helper/src/api.js");

/* harmony default export */ __webpack_exports__["default"] = (sketch_plugin_helper__WEBPACK_IMPORTED_MODULE_0__["resetSettings"]);

/***/ }),

/***/ 0:
/*!***********************************************************************************************************!*\
  !*** multi /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/c6e949b5-6184-4d0f-a4e8-492d6692bdaf ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/c6e949b5-6184-4d0f-a4e8-492d6692bdaf */"../../../../../private/var/folders/3m/k48sh8d10bx5knjrzyvhpb8h0000gn/T/c6e949b5-6184-4d0f-a4e8-492d6692bdaf");


/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ })));
//# sourceMappingURL=plugin.js.map