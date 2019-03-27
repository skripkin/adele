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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ \"./assets/modules/index.js\");\n\n\n//# sourceURL=webpack:///./assets/main.js?");

/***/ }),

/***/ "./assets/modules/index.js":
/*!*********************************!*\
  !*** ./assets/modules/index.js ***!
  \*********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./assets/modules/menu/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./assets/modules/index.js?");

/***/ }),

/***/ "./assets/modules/menu/index.js":
/*!**************************************!*\
  !*** ./assets/modules/menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Menu = function () {\n    function Menu() {\n        var _this = this;\n\n        _classCallCheck(this, Menu);\n\n        this._handleClikOpen = function () {\n            var menuclik = _this._menu.querySelector('.menu__window');\n            var close = menuclik.querySelector('.menu__close');\n            document.body.classList.add('no-scroll');\n\n            var background = document.createElement('div');\n            background.classList.add('menu__background');\n            _this._menu.appendChild(background);\n\n            menuclik.classList.add('menu__window--opened');\n            close.addEventListener('click', _this._handleClikClose);\n            background.addEventListener('click', _this._handleClikClose);\n\n            _this._clik.addEventListener('click', _this._handleClikClose);\n            _this._clik.removeEventListener('click', _this._handleClikOpen);\n        };\n\n        this._handleClikClose = function () {\n            var menuclik = _this._menu.querySelector('.menu__window');\n            var close = menuclik.querySelector('.menu__close');\n            var background = document.querySelector('.menu__background');\n            document.body.classList.remove('no-scroll');\n\n            menuclik.classList.remove('menu__window--opened');\n\n            close.removeEventListener('click', _this._handleClikClose);\n            background.removeEventListener('click', _this._handleClikClose);\n            background.remove();\n\n            _this._clik.removeEventListener('click', _this._handleClikClose);\n            _this._clik.addEventListener('click', _this._handleClikOpen);\n        };\n\n        this._menu = document.querySelector('.menu');\n\n        this._clik = this._menu.querySelector('.menu__clik');\n\n        this._addListeners();\n    }\n\n    _createClass(Menu, [{\n        key: '_addListeners',\n        value: function _addListeners() {\n            this._clik.addEventListener('click', this._handleClikOpen);\n        }\n    }]);\n\n    return Menu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Menu());\n\n//# sourceURL=webpack:///./assets/modules/menu/index.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./assets/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\Git-work\\Portfolio\\adele\\adele\\assets\\main.js */\"./assets/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/main.js?");

/***/ })

/******/ });