/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/style.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app/HandlerApi.js":
/*!*******************************!*\
  !*** ./src/app/HandlerApi.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _MainClass2 = __webpack_require__(/*! ./MainClass */ \"./src/app/MainClass.js\");\n\nvar _MainClass3 = _interopRequireDefault(_MainClass2);\n\nvar _API = __webpack_require__(/*! ../assets/API */ \"./src/assets/API/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HandlerApi = function (_MainClass) {\n  _inherits(HandlerApi, _MainClass);\n\n  function HandlerApi() {\n    _classCallCheck(this, HandlerApi);\n\n    var _this = _possibleConstructorReturn(this, (HandlerApi.__proto__ || Object.getPrototypeOf(HandlerApi)).call(this));\n\n    _this.template = _this.$.querySelector(\"[data-template=coupon]\");\n    _this.apiParse();\n    return _this;\n  }\n\n  _createClass(HandlerApi, [{\n    key: \"apiParse\",\n    value: function apiParse() {\n      for (var i = 0; i < _API.API.length; i++) {\n        this.renderCoupon(_API.API[i]);\n      }\n    }\n  }, {\n    key: \"renderCoupon\",\n    value: function renderCoupon(item) {\n      var templateClone = this.template.cloneNode(true);\n      templateClone.removeAttribute('data-template', '');\n      templateClone.querySelector(\".coupon-text__title\").textContent = item.title;\n      templateClone.querySelector(\".coupon-text__description\").textContent = item.description;\n      templateClone.querySelector(\".coupon-text__code\").textContent = item.code;\n      templateClone.querySelector(\".coupon-text__code-type\").textContent = item.typeCode;\n      templateClone.querySelector(\".coupon__image\").src = __webpack_require__(\"./src/assets/images sync recursive ^\\\\.\\\\/.*$\")(\"./\" + item.image).default;\n      templateClone.setAttribute('data-name', item.id);\n      this.$.getElementById(\"coupon-list\").appendChild(templateClone);\n    }\n  }]);\n\n  return HandlerApi;\n}(_MainClass3.default);\n\nexports.default = HandlerApi;\n\n//# sourceURL=webpack:///./src/app/HandlerApi.js?");

/***/ }),

/***/ "./src/app/MainClass.js":
/*!******************************!*\
  !*** ./src/app/MainClass.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MainClass = function MainClass() {\n  _classCallCheck(this, MainClass);\n\n  this.$ = document;\n  this._ = window;\n};\n\nexports.default = MainClass;\n\n//# sourceURL=webpack:///./src/app/MainClass.js?");

/***/ }),

/***/ "./src/app/SideBar.js":
/*!****************************!*\
  !*** ./src/app/SideBar.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _MainClass2 = __webpack_require__(/*! ./MainClass */ \"./src/app/MainClass.js\");\n\nvar _MainClass3 = _interopRequireDefault(_MainClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Agregator = function (_MainClass) {\n  _inherits(Agregator, _MainClass);\n\n  function Agregator() {\n    _classCallCheck(this, Agregator);\n\n    var _this = _possibleConstructorReturn(this, (Agregator.__proto__ || Object.getPrototypeOf(Agregator)).call(this));\n\n    _this.sideBar = _this.$.getElementById(\"sidebar\");\n    _this.addEventTouchSideBar();\n    _this.addEventForItemsSideBar();\n    _this.addEventClickSideBar();\n    return _this;\n  }\n\n  /**\n   * Вешаем событие клика на ярлычок SideBar\n   */\n\n\n  _createClass(Agregator, [{\n    key: \"addEventClickSideBar\",\n    value: function addEventClickSideBar() {\n      var _this2 = this;\n\n      var button = this.$.getElementById(\"side-button\");\n      button.addEventListener(\"click\", function () {\n        if (_this2.sideBar.className.includes(\"visible\")) {\n          _this2.sideBar.classList.remove(\"visible\");\n        } else {\n          _this2.sideBar.classList.add(\"visible\");\n        }\n      });\n    }\n\n    /**\n     * Вешаем событие touch чтобы можно вытягивать пальцем SideBar\n     */\n\n  }, {\n    key: \"addEventTouchSideBar\",\n    value: function addEventTouchSideBar() {\n      var _this3 = this;\n\n      var event = void 0;\n      this.sideBar.addEventListener(\"touchstart\", function (e) {\n        event = e;\n      });\n      this.sideBar.addEventListener(\"touchmove\", function (e) {\n        if (event) {\n          var isVisible = _this3.sideBar.className.includes(\"visible\");\n          if (e.touches[0].pageX - event.touches[0].pageX > 5 && !isVisible) {\n            _this3.sideBar.classList.add(\"visible\");\n          } else if (e.touches[0].pageX - event.touches[0].pageX < 5 && isVisible) {\n            _this3.sideBar.classList.remove(\"visible\");\n          }\n          event = undefined;\n        }\n      });\n      this.sideBar.addEventListener(\"touchend\", function () {\n        event = undefined;\n      });\n    }\n\n    /**\n     * Вешаем события на элементы списка SideBar\n     */\n\n  }, {\n    key: \"addEventForItemsSideBar\",\n    value: function addEventForItemsSideBar() {\n      var _this4 = this;\n\n      var length = this.$.getElementsByClassName(\"sidebar__item\").length;\n      for (var i = 0; i < length; i++) {\n        var item = this.$.getElementsByClassName(\"sidebar__item\")[i];\n        item.addEventListener(\"click\", function (e) {\n          for (var _i = 0; _i < length; _i++) {\n            _this4.$.getElementsByClassName(\"sidebar__item\")[_i].classList.remove(\"active\");\n          }\n          e.currentTarget.classList.add(\"active\");\n        });\n      }\n    }\n  }, {\n    key: \"setColorSvg\",\n    value: function setColorSvg() {}\n\n    /**\n     * Меняем кнопку открытия и скрытия SideBar\n     * @param {Boolean} open открываем или скрываем SideBar\n     */\n\n  }, {\n    key: \"setButtonSideBar\",\n    value: function setButtonSideBar(open) {\n      var iconName = open ? \"menu-close.svg\" : \"menu-burger.svg\";\n      this.$.getElementById(\"side-button\").src = __webpack_require__(\"./src/assets/icons sync recursive ^\\\\.\\\\/.*$\")(\"./\" + iconName).default;\n    }\n  }]);\n\n  return Agregator;\n}(_MainClass3.default);\n\nexports.default = Agregator;\n\n//# sourceURL=webpack:///./src/app/SideBar.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n\nvar _SideBar = __webpack_require__(/*! ./SideBar */ \"./src/app/SideBar.js\");\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _MainClass2 = __webpack_require__(/*! ./MainClass */ \"./src/app/MainClass.js\");\n\nvar _MainClass3 = _interopRequireDefault(_MainClass2);\n\nvar _HandlerApi = __webpack_require__(/*! ./HandlerApi */ \"./src/app/HandlerApi.js\");\n\nvar _HandlerApi2 = _interopRequireDefault(_HandlerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Agregator = function (_MainClass) {\n  _inherits(Agregator, _MainClass);\n\n  function Agregator() {\n    _classCallCheck(this, Agregator);\n\n    var _this = _possibleConstructorReturn(this, (Agregator.__proto__ || Object.getPrototypeOf(Agregator)).call(this));\n\n    _this.setScrollingSearch();\n    new _SideBar2.default();\n    new _HandlerApi2.default();\n    return _this;\n  }\n\n  /**\n   * Устанавливаем прослушку скролла для фиксации элемента Search\n   */\n\n\n  _createClass(Agregator, [{\n    key: 'setScrollingSearch',\n    value: function setScrollingSearch() {\n      var _this2 = this;\n\n      var search = this.$.getElementById(\"search\");\n      var pageBody = this.$.getElementsByClassName(\"page__body\")[0];\n      this._.addEventListener(\"scroll\", function () {\n        if (_this2._.scrollY > 30) {\n          search.classList.add(\"scroll-active\");\n          pageBody.style.paddingTop = search.clientHeight + \"px\";\n        } else {\n          search.classList.remove(\"scroll-active\");\n          pageBody.style.paddingTop = 0;\n        }\n      });\n    }\n  }]);\n\n  return Agregator;\n}(_MainClass3.default);\n\nnew Agregator();\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ }),

/***/ "./src/assets/API/index.js":
/*!*********************************!*\
  !*** ./src/assets/API/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar API = exports.API = [{\n  id: 1,\n  title: \"Пробка на мира\",\n  description: \"Вечер для двоих\",\n  code: \"50%\",\n  typeCode: \"Скидка\",\n  image: \"vine.png\"\n}, {\n  id: 2,\n  title: \"Кино и немцы\",\n  description: \"Бесплатный бокал пива\",\n  code: \"ВАРВАР\",\n  typeCode: \"Промокод\",\n  image: \"beer.png\"\n}, {\n  id: 3,\n  title: \"Mangosteen\",\n  description: \"Фрукт в подарок\",\n  code: \"J130\",\n  typeCode: \"Купон\",\n  image: \"fruits.png\"\n}, {\n  id: 4,\n  title: \"Теленок табака\",\n  description: \"Стейк \\\"Мачете\\\"\",\n  code: \"20%\",\n  typeCode: \"Скидка\",\n  image: \"meat.png\"\n}, {\n  id: 5,\n  title: \"Aroma Cremeria\",\n  description: \"Джелато \\\"Пармезан\\\"\",\n  code: \"20%\",\n  typeCode: \"Скидка\",\n  image: \"ice-cream.png\"\n}];\n\n//# sourceURL=webpack:///./src/assets/API/index.js?");

/***/ }),

/***/ "./src/assets/icons sync recursive ^\\.\\/.*$":
/*!****************************************!*\
  !*** ./src/assets/icons sync ^\.\/.*$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./menu-burger.svg\": \"./src/assets/icons/menu-burger.svg\",\n\t\"./menu-close.svg\": \"./src/assets/icons/menu-close.svg\",\n\t\"./search.svg\": \"./src/assets/icons/search.svg\",\n\t\"./side-auto.svg\": \"./src/assets/icons/side-auto.svg\",\n\t\"./side-beatiful.svg\": \"./src/assets/icons/side-beatiful.svg\",\n\t\"./side-category.svg\": \"./src/assets/icons/side-category.svg\",\n\t\"./side-entertainment.svg\": \"./src/assets/icons/side-entertainment.svg\",\n\t\"./side-health.svg\": \"./src/assets/icons/side-health.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/icons sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/assets/icons_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/assets/icons/menu-burger.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/menu-burger.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/menu-burger.svg\");\n\n//# sourceURL=webpack:///./src/assets/icons/menu-burger.svg?");

/***/ }),

/***/ "./src/assets/icons/menu-close.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/menu-close.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/menu-close.svg\");\n\n//# sourceURL=webpack:///./src/assets/icons/menu-close.svg?");

/***/ }),

/***/ "./src/assets/icons/search.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/search.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/search.svg\");\n\n//# sourceURL=webpack:///./src/assets/icons/search.svg?");

/***/ }),

/***/ "./src/assets/icons/side-auto.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/side-auto.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/side-auto.svg\");\n\n//# sourceURL=webpack:///./src/assets/icons/side-auto.svg?");

/***/ }),

/***/ "./src/assets/icons/side-beatiful.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/side-beatiful.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/side-beatiful.svg\");\n\n//# sourceURL=webpack:///./src/assets/icons/side-beatiful.svg?");

/***/ }),

/***/ "./src/assets/icons/side-category.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/side-category.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/side-category.svg\");\n\n//# sourceURL=webpack:///./src/assets/icons/side-category.svg?");

/***/ }),

/***/ "./src/assets/icons/side-entertainment.svg":
/*!*************************************************!*\
  !*** ./src/assets/icons/side-entertainment.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/side-entertainment.svg\");\n\n//# sourceURL=webpack:///./src/assets/icons/side-entertainment.svg?");

/***/ }),

/***/ "./src/assets/icons/side-health.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/side-health.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/side-health.svg\");\n\n//# sourceURL=webpack:///./src/assets/icons/side-health.svg?");

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./src/assets/images sync ^\.\/.*$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Union.png\": \"./src/assets/images/Union.png\",\n\t\"./beer.png\": \"./src/assets/images/beer.png\",\n\t\"./cake.png\": \"./src/assets/images/cake.png\",\n\t\"./fruits.png\": \"./src/assets/images/fruits.png\",\n\t\"./ice-cream.png\": \"./src/assets/images/ice-cream.png\",\n\t\"./kebab.png\": \"./src/assets/images/kebab.png\",\n\t\"./logo.svg\": \"./src/assets/images/logo.svg\",\n\t\"./meat.png\": \"./src/assets/images/meat.png\",\n\t\"./sushi.png\": \"./src/assets/images/sushi.png\",\n\t\"./text-logo.svg\": \"./src/assets/images/text-logo.svg\",\n\t\"./vine.png\": \"./src/assets/images/vine.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/assets/images_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/assets/images/Union.png":
/*!*************************************!*\
  !*** ./src/assets/images/Union.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/Union.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Union.png?");

/***/ }),

/***/ "./src/assets/images/beer.png":
/*!************************************!*\
  !*** ./src/assets/images/beer.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/beer.png\");\n\n//# sourceURL=webpack:///./src/assets/images/beer.png?");

/***/ }),

/***/ "./src/assets/images/cake.png":
/*!************************************!*\
  !*** ./src/assets/images/cake.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/cake.png\");\n\n//# sourceURL=webpack:///./src/assets/images/cake.png?");

/***/ }),

/***/ "./src/assets/images/fruits.png":
/*!**************************************!*\
  !*** ./src/assets/images/fruits.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/fruits.png\");\n\n//# sourceURL=webpack:///./src/assets/images/fruits.png?");

/***/ }),

/***/ "./src/assets/images/ice-cream.png":
/*!*****************************************!*\
  !*** ./src/assets/images/ice-cream.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/ice-cream.png\");\n\n//# sourceURL=webpack:///./src/assets/images/ice-cream.png?");

/***/ }),

/***/ "./src/assets/images/kebab.png":
/*!*************************************!*\
  !*** ./src/assets/images/kebab.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/kebab.png\");\n\n//# sourceURL=webpack:///./src/assets/images/kebab.png?");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/logo.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/logo.svg?");

/***/ }),

/***/ "./src/assets/images/meat.png":
/*!************************************!*\
  !*** ./src/assets/images/meat.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/meat.png\");\n\n//# sourceURL=webpack:///./src/assets/images/meat.png?");

/***/ }),

/***/ "./src/assets/images/sushi.png":
/*!*************************************!*\
  !*** ./src/assets/images/sushi.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/sushi.png\");\n\n//# sourceURL=webpack:///./src/assets/images/sushi.png?");

/***/ }),

/***/ "./src/assets/images/text-logo.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/text-logo.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"icons/text-logo.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/text-logo.svg?");

/***/ }),

/***/ "./src/assets/images/vine.png":
/*!************************************!*\
  !*** ./src/assets/images/vine.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/vine.png\");\n\n//# sourceURL=webpack:///./src/assets/images/vine.png?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/style.scss?");

/***/ })

/******/ });