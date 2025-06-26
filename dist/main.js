/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! modules/Assets/weather_background.jpg */ \"./src/modules/Assets/weather_background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center\r\n    fixed;\r\n  background-size: cover;\r\n  font-family: roboto;\r\n}\r\n\r\n.main-information {\r\n  text-align: center;\r\n  /* border: 10px ridge white; */\r\n  border-radius: 30px;\r\n  font-size: 1.3rem;\r\n  width: 50%;\r\n  margin: 15px auto;\r\n}\r\n\r\n.message {\r\n  text-align: center;\r\n  margin-top: 80px;\r\n  font-size: 1.8rem;\r\n  font-family: verdana;\r\n  text-shadow: 0px 0px 5px white;\r\n  font-weight: bold;\r\n}\r\n\r\n.search-field-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 150px;\r\n  gap: 30px;\r\n}\r\n\r\n.input-field {\r\n  width: 100%;\r\n  height: 40px;\r\n  padding-right: 30px;\r\n  box-sizing: border-box;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.submitted-input {\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 8px;\r\n  transform: translateY(-50%);\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  width: 22px;\r\n  height: 22px;\r\n}\r\n\r\n.input-icon-wrapper {\r\n  position: relative;\r\n  width: 600px;\r\n}\r\n\r\n.search-icon {\r\n  width: 100%;\r\n  height: 100%;\r\n  fill: #555;\r\n  pointer-events: auto;\r\n}\r\n\r\n.details {\r\n  background-color: #0d1117;\r\n  color: white;\r\n  padding: 20px;\r\n  border-radius: 25px;\r\n}\r\n\r\n.information {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: helvetica;\r\n  font-size: 1.4rem;\r\n  gap: 50px;\r\n}\r\n\r\n.temperature-conversion {\r\n  position: absolute;\r\n  top: 22.5%;\r\n  left: 72%;\r\n  font-size: 1.1rem;\r\n  padding: 3px 10px;\r\n  border-radius: 25px;\r\n  cursor: pointer;\r\n  transition: all 400ms ease-in-out;\r\n  &:hover {\r\n    transform: scale(1.3) rotate(5deg);\r\n  }\r\n}\r\n\r\n#address {\r\n  font-family: 'Cinzel';\r\n}\r\n\r\n#today {\r\n  font-family: 'Orbitron';\r\n}\r\n\r\n.info {\r\n  font-family: monospace;\r\n}\r\n\r\n.temperature-conversion.fahrenheit {\r\n  background: black;\r\n  color: white;\r\n}\r\n\r\n.temperature-conversion.celsius {\r\n  background-color: yellow;\r\n}\r\n\r\n#headline {\r\n  font-family: 'Playfair Display', helvetica;\r\n  font-size: 1.8rem;\r\n  text-shadow: 0px 0px 5px blue;\r\n}\r\n\r\n.weather-blocks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 15px;\r\n  /* border: 12px ridge #0d1117; */\r\n  border-radius: 25px;\r\n  box-sizing: border-box;\r\n  margin: 0 auto;\r\n}\r\n\r\n.other-days-container {\r\n  display: flex;\r\n  padding: 20px;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.other-days-data {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.additional-wrapper {\r\n  display: flex;\r\n  font-family: verdana;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  margin-top: 5px;\r\n  margin-left: 80px;\r\n  font-size: 1rem;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather-app-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOMHandler */ \"./src/modules/DOMHandler.js\");\n/* harmony import */ var _modules_ApiFetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ApiFetcher */ \"./src/modules/ApiFetcher.js\");\n/* harmony import */ var _modules_Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Utilities */ \"./src/modules/Utilities.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/ApiFetcher.js":
/*!***********************************!*\
  !*** ./src/modules/ApiFetcher.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retrieveApi)\n/* harmony export */ });\n\r\n\r\nasync function retrieveApi(location) {\r\n  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=99PJ4U5B2EK7MNTU3XZCQDBNL&contentType=json`;\r\n  try {\r\n    const response = await fetch(url, { mode: 'cors' });\r\n    if (!response.ok) {\r\n      throw new Error(\r\n        `Failed to retrieve weather's resources. ${response.status}`\r\n      );\r\n    }\r\n    const data = await response.json();\r\n    console.log(data);\r\n    return data;\r\n  } catch (error) {\r\n    console.log(error);\r\n    return null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app-project/./src/modules/ApiFetcher.js?");

/***/ }),

/***/ "./src/modules/Assets/weather_background.jpg":
/*!***************************************************!*\
  !*** ./src/modules/Assets/weather_background.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"808fd974a9bbabc87228.jpg\";\n\n//# sourceURL=webpack://weather-app-project/./src/modules/Assets/weather_background.jpg?");

/***/ }),

/***/ "./src/modules/DOMHandler.js":
/*!***********************************!*\
  !*** ./src/modules/DOMHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ApiFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiFetcher */ \"./src/modules/ApiFetcher.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities */ \"./src/modules/Utilities.js\");\n\r\n\r\n\r\n\r\n\r\nconst searchField = document.getElementById('search-field');\r\nconst submitButton = document.querySelector('.submitted-input');\r\nconst conversionButton = document.querySelector('.temperature-conversion');\r\nconst resultsContainer = document.createElement('div');\r\nconst forecastContainer = document.createElement('div');\r\n\r\nforecastContainer.classList.add('weather-blocks');\r\nforecastContainer.style.display = 'none';\r\ndocument.body.appendChild(resultsContainer);\r\ndocument.body.appendChild(forecastContainer);\r\nconversionButton.style.display = 'none';\r\nconst message = document.createElement('p');\r\nlet isVisible = true;\r\ndocument.body.appendChild(message);\r\nmessage.textContent = 'Please insert Location';\r\nmessage.className = 'message';\r\n\r\nfunction setMessage() {\r\n  isVisible = !isVisible;\r\n  message.style.visibility = isVisible ? 'visible' : 'hidden';\r\n}\r\nsetInterval(setMessage, 3000);\r\n\r\nlet currentUnit = 'F';\r\n\r\nsubmitButton.addEventListener('click', async (e) => {\r\n  e.preventDefault();\r\n  const location = searchField.value.trim();\r\n  if (!location) return;\r\n  const data = await (0,_ApiFetcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\r\n  const days = data.days;\r\n  if (!data) return;\r\n  resultsContainer.innerHTML = '';\r\n  forecastContainer.innerHTML = '';\r\n  currentUnit = 'F';\r\n  conversionButton.textContent = '°C';\r\n  conversionButton.style.display = 'inline-block';\r\n  conversionButton.classList.add('celsius');\r\n  conversionButton.classList.remove('fahrenheit');\r\n  displayWeather(data, currentUnit);\r\n  getNextDays(data.days, data, currentUnit);\r\n  message.remove();\r\n});\r\n\r\nsearchField.addEventListener('keydown', (e) => {\r\n  if (e.key === 'Enter') {\r\n    e.preventDefault();\r\n    submitButton.click();\r\n  }\r\n});\r\n\r\nconversionButton.addEventListener('click', () => {\r\n  const tempElement = document.querySelector('.temp-value');\r\n  const unitElement = document.querySelector('.temp-unit');\r\n  if (!tempElement || !unitElement) return;\r\n\r\n  const temp = parseFloat(tempElement.textContent);\r\n  const unit = unitElement.textContent;\r\n  const newTemp = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.convertTemperature)(temp, unit);\r\n  const newUnit = unit === 'F' ? 'C' : 'F';\r\n\r\n  tempElement.textContent = newTemp.toFixed(1);\r\n  unitElement.textContent = newUnit;\r\n  conversionButton.textContent = `°${unit}`;\r\n  conversionButton.classList.toggle('fahrenheit', unit === 'F');\r\n  conversionButton.classList.toggle('celsius', unit === 'C');\r\n  document\r\n    .querySelectorAll('.forecast-temp, .forecast-max, .forecast-min')\r\n    .forEach((element) => {\r\n      const temp = parseFloat(element.textContent);\r\n      const unit = element.dataset.unit;\r\n      const newTemp = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.convertTemperature)(temp, unit);\r\n      const newUnit = unit === 'F' ? 'C' : 'F';\r\n      element.textContent = newTemp.toFixed(1);\r\n      element.dataset.unit = newUnit;\r\n      const unitSpan = element.nextElementSibling;\r\n      if (unitSpan && unitSpan.classList.contains('temp-unit')) {\r\n        unitSpan.textContent = newUnit;\r\n      }\r\n    });\r\n});\r\n\r\nfunction displayWeather(data, unit) {\r\n  resultsContainer.innerHTML = '';\r\n  const block = document.createElement('div');\r\n  block.classList.add('weather-block');\r\n\r\n  let currentTemp = data.currentConditions.temp;\r\n  const condition = data.currentConditions.conditions;\r\n  const icon = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.getIcon)(condition);\r\n  const humidity = data.currentConditions.humidity;\r\n  const wind = data.currentConditions.windspeed;\r\n  const precipicationProbability = data.currentConditions.precipprob;\r\n\r\n  block.innerHTML = `\r\n    <div class=\"main-information\">\r\n    <h1 id=\"address\">${data.resolvedAddress}</h1>\r\n    <h2 id=\"today\">Today:</h2>\r\n    <p class=\"info\">Temp: <span class=\"temp-value\">${currentTemp}</span>°<span class=\"temp-unit\">${unit}</span></p>\r\n    <p>Condition: ${data.currentConditions.conditions} ${icon} </p>\r\n    <div class=\"information\">\r\n     <p class=\"details\"> Humidity: ${humidity}% </p> \r\n     <p class=\"details\"> Wind: ${wind} KM/H </p>\r\n     <p class=\"details\"> Chance of Rain: ${precipicationProbability}%</p>\r\n    </div>\r\n    </div>\r\n    `;\r\n  resultsContainer.appendChild(block);\r\n}\r\n\r\nfunction getNextDays(days, data, unit) {\r\n  const headline = document.createElement('h2');\r\n  headline.textContent = `As for the next two weeks...`;\r\n  headline.setAttribute('id', 'headline');\r\n  forecastContainer.appendChild(headline);\r\n  forecastContainer.style.display = 'flex';\r\n  days.forEach((day) => {\r\n    const date = day.datetime;\r\n    const temp = day.temp;\r\n    const tempMax = day.tempmax;\r\n    const tempMin = day.tempmin;\r\n    const precipicationProbability = day.precipprob;\r\n    const condition = data.currentConditions.conditions;\r\n    const icon = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.getIcon)(condition);\r\n    console.log(day);\r\n    const block = document.createElement('div');\r\n\r\n    block.innerHTML = `\r\n  <div class=\"other-days-container\">\r\n    <div class=\"other-days-data\">\r\n      <span>${date} |</span>\r\n      <span class=\"forecast-temp\" data-unit=\"F\">${temp.toFixed(1)}</span>°\r\n      <span class=\"temp-unit\">${unit}</span> ${icon}\r\n    </div>\r\n    <div class=\"additional-wrapper\">\r\n      <span>Max temp: <span class=\"forecast-max\" data-unit=\"F\">${tempMax.toFixed(\r\n        1\r\n      )}</span>°<span class=\"temp-unit\">${unit}</span></span>\r\n      <span>Min temp: <span class=\"forecast-min\" data-unit=\"F\">${tempMin.toFixed(\r\n        1\r\n      )}</span>°<span class=\"temp-unit\">${unit}</span></span>\r\n      <span>Chance of Rain: ${precipicationProbability}%</span>\r\n    </div>\r\n  </div>\r\n`;\r\n    forecastContainer.appendChild(block);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://weather-app-project/./src/modules/DOMHandler.js?");

/***/ }),

/***/ "./src/modules/Utilities.js":
/*!**********************************!*\
  !*** ./src/modules/Utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertTemperature: () => (/* binding */ convertTemperature),\n/* harmony export */   getIcon: () => (/* binding */ getIcon)\n/* harmony export */ });\n/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHandler */ \"./src/modules/DOMHandler.js\");\n\r\n\r\n\r\n\r\nfunction convertTemperature(value, unit) {\r\n  if (unit === 'F') {\r\n    return ((value - 32) * 5) / 9;\r\n  } else if (unit === 'C') {\r\n    return (value * 9) / 5 + 32;\r\n  } else {\r\n    throw new Error(`Invalid unit`);\r\n  }\r\n}\r\n\r\nconst conditionToIcon = {\r\n  clear: '☀️',\r\n  'partially cloudy': '🌤️',\r\n  overcast: '☁️',\r\n  'rain, partially cloudy': '🌧️',\r\n  rain: '🌧️',\r\n  'rain, overcast': '🌧️',\r\n  drizzle: '🌦️',\r\n  thunderstorm: '⛈️',\r\n  snow: '❄️',\r\n  fog: '🌫️',\r\n  haze: '🌁',\r\n  mist: '🌫️',\r\n};\r\n\r\nfunction getIcon(condition) {\r\n  return conditionToIcon[condition.toLowerCase()] || '❓';\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app-project/./src/modules/Utilities.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app-project/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;