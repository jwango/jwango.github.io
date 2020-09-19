(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./components/active-link/active-link.component.js":
/*!*********************************************************!*\
  !*** ./components/active-link/active-link.component.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Josh\\repos\\blog\\components\\active-link\\active-link.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ActiveLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      aliases = _ref.aliases,
      activeClassName = _ref.activeClassName,
      _ref$wrapAsLink = _ref.wrapAsLink,
      wrapAsLink = _ref$wrapAsLink === void 0 ? true : _ref$wrapAsLink;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var hrefArr = [href].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(aliases || []));
  var dynamicClassName = hrefArr.includes('/' + router.pathname.split('/')[1]) ? activeClassName : '';

  if (wrapAsLink) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: dynamicClassName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, children));
  } else {
    return __jsx("a", {
      href: href,
      className: dynamicClassName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, children);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/_app.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./pages/_app.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".app--default {\n  font-family: \"Helvetica\";\n  line-height: 1.25;\n}\n.app--default header.main__header {\n  background-color: #666699;\n  color: #ffffff;\n}\n.app--default .tag.tag--linkable, .app--default button.btn--flat.btn--secondary {\n  background-color: #0099cc;\n  color: #ffffff;\n}\n.app--default footer.main__footer, .app--default header, .app--default .container, .app--default .app--default {\n  background-color: #ffffff;\n  color: #000000;\n}\n.app--default .color-background-faded {\n  color: #777777;\n}\n.app--default * {\n  box-sizing: border-box;\n}\n.app--default #disqus_thread {\n  margin-top: 16px;\n}\n.app--default .list--no-style {\n  padding-left: 0;\n}\n.app--default .list--no-style li {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n}\n.app--default .clearfix {\n  clear: both;\n}\n.app--default .content-wrapper {\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.app--default .container {\n  min-height: 100%;\n  min-height: 100vh;\n}\n.app--default .row {\n  display: flex;\n  flex-direction: row;\n}\n.app--default .column {\n  display: flex;\n  flex-direction: column;\n}\n.app--default header {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.app--default header.main__header {\n  width: 100%;\n  height: 7rem;\n  text-align: left;\n  padding: 1rem 0;\n}\n.app--default header.main__header h1 {\n  font-size: 3rem;\n  font-weight: 200;\n  font-stretch: condensed;\n  margin: 0;\n}\n.app--default nav {\n  background-color: #666699;\n  color: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 2.5rem;\n  margin-top: -2.5rem;\n  flex-grow: 0;\n  flex-shrink: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n}\n.app--default nav .nav-link--active {\n  text-decoration: underline;\n}\n.app--default nav a {\n  padding: 0.25rem 0rem;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.25rem;\n}\n.app--default nav a + a {\n  margin-left: 1.75rem;\n}\n.app--default nav a:link, .app--default nav a:visited {\n  color: #ffffff;\n}\n.app--default nav a:hover, .app--default nav a:active {\n  color: #e6e6e6;\n}\n.app--default main {\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.app--default p {\n  margin-bottom: 1rem;\n  word-wrap: break-word;\n}\n.app--default .main__footer-icon {\n  height: 24px;\n  margin-bottom: -5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.app--default footer.main__footer {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  flex-shrink: 0;\n}\n.app--default footer.main__footer p {\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.app--default footer.blog__footer {\n  margin: 2rem 0rem;\n}\n.app--default article.post header {\n  margin-bottom: 1.5rem;\n}\n.app--default article.post header p {\n  font-size: 1rem;\n  line-height: 2;\n  color: #777777;\n}\n.app--default article.post p {\n  margin-bottom: 0;\n}\n.app--default article.post p + p {\n  margin-top: 1.5rem;\n}\n.app--default article.post .post__content {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.app--default article.post .post__content img {\n  max-width: 100%;\n  margin: 0 10px 10px 0;\n  float: left;\n}\n.app--default article.post .post__content img.pin {\n  margin: 0;\n  height: 1em;\n  width: 1em;\n  float: right;\n  opacity: 0.1;\n}\n.app--default article.post .post__content img.pin:hover {\n  opacity: 1;\n}\n.app--default article.post .post__outline {\n  display: none;\n}\n.app--default h1 {\n  font-size: 2.5rem;\n}\n.app--default h2 {\n  font-size: 2rem;\n}\n.app--default h3 {\n  font-size: 1.75rem;\n}\n.app--default h4 {\n  font-size: 1.6rem;\n}\n.app--default h5 {\n  font-size: 1.5rem;\n}\n.app--default h6 {\n  font-size: 1.1rem;\n}\n.app--default h1, .app--default h2, .app--default h3, .app--default h4, .app--default h5, .app--default h6 {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.app--default button {\n  background-color: transparent;\n  border-width: 0;\n  border-style: none;\n  color: inherit;\n  padding: 0;\n}\n.app--default button.btn--flat {\n  background-color: #DDDDDD;\n  padding: 0.5rem 1rem;\n}\n.app--default button:hover, .app--default button:focus {\n  cursor: pointer;\n  outline: 0rem;\n}\n.app--default button:hover.btn--flat, .app--default button:focus.btn--flat {\n  color: #777777;\n}\n.app--default button:hover.btn--flat.btn--secondary, .app--default button:focus.btn--flat.btn--secondary {\n  color: #DDDDDD;\n}\n.app--default a {\n  color: #0099cc;\n}\n.app--default .tag {\n  color: #000000;\n  background-color: #DDDDDD;\n  border-radius: 0.375rem;\n  font-size: 1rem;\n  padding: 0.1rem 0.4rem;\n  margin-right: 0.125rem;\n  margin-top: 0.125rem;\n  display: inline-block;\n}\n.app--default .tag a {\n  text-decoration: none;\n  color: inherit;\n}\n.app--default .tag a:hover, .app--default .tag a:active {\n  color: #e6e6e6;\n}\n.app--default blockquote {\n  margin-left: 0rem;\n  padding-left: 0.5rem;\n  border-style: solid;\n  border-left-width: 0.5rem;\n  border-color: gray;\n  color: #000000;\n  background-color: #e6e6e6;\n  overflow: hidden;\n}\n.app--default code {\n  line-height: 1.25;\n  color: #0099cc;\n  border-radius: 0.25rem;\n  background-color: #e6e6e6;\n  display: inline;\n  padding: 0.125rem 0rem;\n}\n.app--default code.codeBlock {\n  color: #000000;\n  padding: 1rem;\n  margin: 1rem 0rem;\n  border-radius: 1rem;\n  display: block;\n  overflow-x: auto;\n}\n.app--default img {\n  max-width: 100%;\n}\n.app--default img.img__inline {\n  float: left;\n}\n.app--default time {\n  color: #777777;\n}\n.app--default .anchor {\n  display: block;\n  margin-top: -2.5rem;\n  height: 2.5rem;\n  visibility: hidden;\n}\n.app--default ul {\n  padding: 0.25rem;\n}\n.app--default ol {\n  padding: 0.25rem;\n}\n.app--default ul > li {\n  margin-left: 1rem;\n  padding: 0.25rem;\n  list-style-type: circle;\n  list-style-position: outside;\n}\n.app--default ol > li {\n  margin-left: 1rem;\n  padding: 0.25rem;\n  list-style-type: decimal;\n  list-style-position: outside;\n}\n.app--default .file-icon-excel--active {\n  color: green;\n}\n.app--default .fa-exclamation-triangle {\n  color: #ffbf3d;\n}\n.app--default .feed-item--loading {\n  background-color: #F7F7F7;\n}\n.app--default ul.feed {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n}\n.app--default li.feed-item {\n  margin: 0 0 1rem 0;\n  padding: 0;\n  width: 27.5rem;\n  list-style-type: none;\n}\n.app--default li.feed-item p:only-of-type {\n  margin-bottom: 0;\n}\n.app--default li.feed-item a {\n  text-decoration: none;\n  color: inherit;\n}\n@media only screen and (min-width: 768px) {\n  .app--default .content-wrapper {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n  .app--default article.post .post__content {\n    font-size: 1.25rem;\n    line-height: 1.75;\n  }\n  .app--default article.post .post__content img {\n    max-width: 320px;\n    margin-top: 0.5em;\n  }\n}\n@media only screen and (min-width: 1012px) {\n  .app--default .content-wrapper {\n    width: 1012px;\n    padding-left: 64px;\n    padding-right: 64px;\n  }\n  .app--default article.post .post__content {\n    font-size: 1.25rem;\n    line-height: 1.75;\n  }\n  .app--default article.post .post__content img {\n    max-width: 320px;\n    margin-top: 0.5em;\n  }\n  .app--default article.post .post__outline {\n    display: block;\n    line-height: 1em;\n    margin-top: 1rem;\n    width: 100px;\n    position: absolute;\n    left: 0;\n    top: 7rem;\n    overflow-x: hidden;\n  }\n  .app--default article.post .post__outline li {\n    list-style-type: none;\n  }\n  .app--default article.post .post__outline a {\n    text-decoration: none;\n  }\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.header__logo {\n  width: 48px;\n  height: 48px;\n  margin-bottom: -6px;\n  margin-right: 4px;\n}", "",{"version":3,"sources":["C:/Users/Josh/repos/blog/styles/sass/themes/_theme-default.scss","C:/Users/Josh/repos/blog/pages/_app.scss","C:/Users/Josh/repos/blog/styles/sass/abstracts/_mixins.scss","C:/Users/Josh/repos/blog/styles/sass/themes/_theme.scss"],"names":[],"mappings":"AAEA;EAiDI,wBAAA;EACA,iBAAA;ACjDJ;AD4BI;EE9BA,yBFEU;EEDV,cFEa;ACGjB;AD4BI;EElCA,yBFKY;EEJZ,cFEa;ACOjB;AD4BI;EEtCA,yBFSa;EERb,cFWgB;ACEpB;ADgCI;EACI,cAlCkB;ACI1B;ADsCI;EACI,sBAAA;ACpCR;ADuCI;EACI,gBAAA;ACrCR;ADwCI;EACI,eAAA;ACtCR;ADwCQ;EACI,gBAAA;EACA,SAAA;EACA,eAAA;ACtCZ;AD2CI;EACI,WAAA;ACzCR;AD4CI;EACI,WArDY;EAsDZ,kBA1Dc;EA2Dd,mBA3Dc;EA4Dd,iBAAA;EACA,kBAAA;AC1CR;AD6CI;EACI,gBAAA;EACA,iBAAA;AC3CR;AD+CI;EACI,aAAA;EACA,mBAAA;AC7CR;ADgDI;EACI,aAAA;EACA,sBAAA;AC9CR;ADiDI;EAEI,cAAA;EACA,YAAA;AChDR;ADmDI;EAEI,WAAA;EACA,YA3FY;EA4FZ,gBAAA;EACA,eAAA;AClDR;ADoDQ;EACI,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,SAAA;AClDZ;ADsDI;EACI,yBA1HM;EA2HN,cA1HS;EA2HT,wBAAA;EAAA,gBAAA;EACA,MAAA;EACA,WAAA;EACA,cA5GS;EA6GT,mBAAA;EACA,YAAA;EACA,cAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;ACpDR;ADsDQ;EACI,0BAAA;ACpDZ;ADuDQ;EACI,qBAAA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;ACrDZ;ADwDQ;EACI,oBAAA;ACtDZ;ADyDQ;EACI,cAtJK;AC+FjB;AD0DQ;EACI,cAAA;ACxDZ;AD4DI;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;AC1DR;AD6DI;EACI,mBAAA;EACA,qBAAA;AC3DR;AD8DI;EACI,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AC5DR;ADgEQ;EAEI,iBAAA;EACA,oBAAA;EACA,cAAA;AC/DZ;ADgEY;EACI,qBAAA;EACA,kBAAA;AC9DhB;ADkEQ;EACI,iBAAA;AChEZ;ADqEQ;EACI,qBAAA;ACnEZ;ADoEY;EACI,eAAA;EACA,cAAA;EACA,cA9LU;AC4H1B;ADsEQ;EACI,gBAAA;ACpEZ;ADuEQ;EACI,kBAAA;ACrEZ;ADwEQ;EAmBI,eAAA;EACA,gBAAA;ACxFZ;ADqEY;EACI,eAAA;EACA,qBAAA;EACA,WAAA;ACnEhB;ADqEgB;EACI,SAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;ACnEpB;ADqEoB;EACI,UAAA;ACnExB;AD4EQ;EACI,aAAA;AC1EZ;AD8EI;EACI,iBAAA;AC5ER;AD+EI;EACI,eAAA;AC7ER;ADgFI;EACI,kBAAA;AC9ER;ADiFI;EACI,iBAAA;AC/ER;ADkFI;EACI,iBAAA;AChFR;ADmFI;EACI,iBAAA;ACjFR;ADoFI;EACI,gBAAA;EACA,qBAAA;EACA,cAAA;AClFR;ADsFI;EACI,6BAAA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;EACA,UAAA;ACpFR;ADsFQ;EACI,yBA/QW;EAgRX,oBAAA;ACpFZ;AD4FI;EACI,eAAA;EACA,aAAA;AC1FR;AD4FQ;EACI,cA3Rc;ACiM1B;AD4FY;EACI,cApSS;AC0MzB;AD+FI;EACI,cA5SQ;AC+MhB;ADgGI;EACI,cAzSY;EA0SZ,yBA3Se;EA4Sf,uBAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,oBAAA;EACA,qBAAA;AC9FR;ADoGQ;EACI,qBAAA;EACA,cAAA;AClGZ;ADmGY;EACI,cAAA;ACjGhB;ADsGI;EACI,iBAAA;EACA,oBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cArUY;EAsUZ,yBAAA;EACA,gBAAA;ACpGR;ADuGI;EACI,iBAAA;EACA,cAnVQ;EAoVR,sBAAA;EACA,yBAAA;EACA,eAAA;EACA,sBAAA;ACrGR;ADuGQ;EACI,cAnVQ;EAoVR,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;ACrGZ;ADyGI;EACI,eAAA;ACvGR;ADyGQ;EACI,WAAA;ACvGZ;AD2GI;EACI,cApWkB;AC2P1B;AD4GI;EACI,cAAA;EACA,mBAAA;EACA,cAlWS;EAmWT,kBAAA;AC1GR;AD8GI;EACI,gBAAA;AC5GR;AD+GI;EACI,gBAAA;AC7GR;ADgHI;EACI,iBAAA;EACA,gBAAA;EACA,uBAAA;EACA,4BAAA;AC9GR;ADiHI;EACI,iBAAA;EACA,gBAAA;EACA,wBAAA;EACA,4BAAA;AC/GR;ADmHI;EACI,YAAA;ACjHR;ADoHI;EACI,cAtYI;ACoRZ;ADqHI;EACI,yBAlZkB;AC+R1B;ADsHI;EACI,aAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;ACpHR;ADuHI;EACI,kBAAA;EACA,UAAA;EACA,cAAA;EACA,qBAAA;ACrHR;ADuHQ;EACI,gBAAA;ACrHZ;ADwHQ;EACI,qBAAA;EACA,cAAA;ACtHZ;AD0HI;EACI;IACI,YA7ZG;IA8ZH,kBAAA;IACA,mBAAA;ECxHV;ED4HU;IACI,kBAAA;IACA,iBAAA;EC1Hd;ED4Hc;IACI,gBAAA;IACA,iBAAA;EC1HlB;AACF;AD+HI;EACI;IACI,aAhbG;IAibH,kBAAA;IACA,mBAAA;EC7HV;EDiIU;IACI,kBAAA;IACA,iBAAA;EC/Hd;EDiIc;IACI,gBAAA;IACA,iBAAA;EC/HlB;EDmIU;IACI,cAAA;IACA,gBAAA;IACA,gBAAA;IACA,YAAA;IACA,kBAAA;IACA,OAAA;IACA,SA/cI;IAgdJ,kBAAA;ECjId;EDkIc;IACI,qBAAA;EChIlB;EDkIc;IACI,qBAAA;EChIlB;AACF;;AEzWA;EACI,YAAA;AF4WJ;;AA7WA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;AAgXF","file":"_app.scss","sourcesContent":["@import '../abstracts/mixins';\r\n\r\n.app--default {\r\n    $primary: #666699;\r\n    $on-primary: #ffffff;\r\n\r\n    $secondary: #0099cc;\r\n    $on-secondary: $on-primary;\r\n    $on-secondary-faded: #DDDDDD;\r\n\r\n    $background: #ffffff;\r\n    $background-skeleton: #F7F7F7;\r\n    $background-faded: #DDDDDD;\r\n    $on-background: #000000;\r\n    $on-background-faded: #777777;\r\n\r\n    $warn: #ff0000;\r\n    $on-warn: $on-primary;\r\n\r\n    $error: #ffbf3d;\r\n\r\n    $header-height: 7rem;\r\n    $nav-height: 2.5rem;\r\n    $content-padding: 16px;\r\n    $code-padding: 0.125rem;\r\n    $li-padding: 0.125rem;\r\n\r\n    $content-width: 100%;\r\n    $break-md: 768px;\r\n    $break-lg: 1012px;\r\n\r\n    %primary {\r\n        @include theme-color($primary, $on-primary);\r\n    }\r\n\r\n    %secondary {\r\n        @include theme-color($secondary, $on-secondary);\r\n    }\r\n\r\n    %background {\r\n        @include theme-color($background, $on-background);\r\n    }\r\n\r\n    %warn {\r\n        @include theme-color($warn, $on-warn);\r\n    }\r\n\r\n    .color-background-faded {\r\n        color: $on-background-faded;\r\n    }\r\n\r\n    font-family: 'Helvetica';\r\n    line-height: 1.25;\r\n    @extend %background;\r\n\r\n    // Layout\r\n    * {\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    #disqus_thread {\r\n        margin-top: 16px;\r\n    }\r\n\r\n    .list--no-style {\r\n        padding-left: 0;\r\n\r\n        li {\r\n            list-style: none;\r\n            margin: 0;\r\n            padding-left: 0;\r\n        }\r\n        \r\n    }\r\n\r\n    .clearfix {\r\n        clear: both;\r\n    }\r\n\r\n    .content-wrapper {\r\n        width: $content-width;\r\n        padding-left: $content-padding;\r\n        padding-right: $content-padding;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n\r\n    .container {\r\n        min-height: 100%;\r\n        min-height: 100vh;\r\n        @extend %background;\r\n    }\r\n\r\n    .row {\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .column {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    header {\r\n        @extend %background;\r\n        flex-shrink: 0;\r\n        flex-grow: 0;\r\n    }\r\n\r\n    header.main__header {\r\n        @extend %primary;\r\n        width: 100%;\r\n        height: $header-height;\r\n        text-align: left;\r\n        padding: 1rem 0;\r\n\r\n        h1 {\r\n            font-size: 3rem;\r\n            font-weight: 200;\r\n            font-stretch: condensed;\r\n            margin: 0;\r\n        }\r\n    }\r\n\r\n    nav {\r\n        background-color: $primary;\r\n        color: $on-primary;\r\n        position: sticky;\r\n        top: 0;\r\n        width: 100%;\r\n        height: $nav-height;\r\n        margin-top: -1 * $nav-height;\r\n        flex-grow: 0;\r\n        flex-shrink: 0;\r\n        z-index: 1;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        .nav-link--active {\r\n            text-decoration: underline;\r\n        }\r\n\r\n        a {\r\n            padding: 0.25rem 0rem;\r\n            text-decoration: none;\r\n            display: inline-block;\r\n            font-size: 1.25rem;\r\n        }\r\n\r\n        a + a {\r\n            margin-left: 1.75rem;\r\n        }\r\n\r\n        a:link, a:visited {\r\n            color: $on-primary;\r\n        }\r\n\r\n        a:hover, a:active {\r\n            color: darken($on-primary, 10%);\r\n        }\r\n    }\r\n\r\n    main {\r\n        width: 100%;\r\n        height: 100%;\r\n        flex-grow: 1;\r\n        flex-shrink: 0;\r\n    }\r\n\r\n    p {\r\n        margin-bottom: 1rem;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    .main__footer-icon {\r\n        height: 24px;\r\n        margin-bottom: -5px;\r\n        padding-left: 5px;\r\n        padding-right: 5px;\r\n    }\r\n\r\n    footer {\r\n        &.main__footer {\r\n            @extend %background;\r\n            padding-top: 3rem;\r\n            padding-bottom: 3rem;\r\n            flex-shrink: 0;\r\n            p {\r\n                margin-bottom: 0.5rem;\r\n                text-align: center;\r\n            }\r\n        }\r\n\r\n        &.blog__footer {\r\n            margin: 2rem 0rem;\r\n        }\r\n    }\r\n\r\n    article.post {\r\n        header {\r\n            margin-bottom: 1.5rem;\r\n            p {\r\n                font-size: 1rem;\r\n                line-height: 2;\r\n                color: $on-background-faded; // Revisit this\r\n            }\r\n        }\r\n\r\n        p {\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        p + p {\r\n            margin-top: 1.5rem;\r\n        }\r\n\r\n        .post__content {\r\n            img {\r\n                max-width: 100%;\r\n                margin: 0 10px 10px 0;\r\n                float: left;\r\n\r\n                &.pin {\r\n                    margin: 0;\r\n                    height: 1em;\r\n                    width: 1em;\r\n                    float: right;\r\n                    opacity: 0.1;\r\n\r\n                    &:hover {\r\n                        opacity: 1;\r\n                    }\r\n                }\r\n            }\r\n\r\n            font-size: 1rem;\r\n            line-height: 1.5;\r\n        }\r\n\r\n        .post__outline {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    h1 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.75rem;\r\n    }\r\n\r\n    h4 {\r\n        font-size: 1.6rem;\r\n    }\r\n\r\n    h5 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    h6 {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    h1, h2, h3, h4, h5, h6 {\r\n        margin-top: 1rem;\r\n        margin-bottom: 0.5rem;\r\n        line-height: 1;\r\n    }\r\n    \r\n    // Atoms\r\n    button {\r\n        background-color: transparent;\r\n        border-width: 0;\r\n        border-style: none;\r\n        color: inherit;\r\n        padding: 0;\r\n\r\n        &.btn--flat {\r\n            background-color: $background-faded;\r\n            padding: 0.5rem 1rem;\r\n\r\n            &.btn--secondary {\r\n                @extend %secondary;\r\n            }\r\n        }\r\n    }\r\n\r\n    button:hover, button:focus {\r\n        cursor: pointer;\r\n        outline: 0rem;\r\n\r\n        &.btn--flat {\r\n            color: $on-background-faded;\r\n\r\n            &.btn--secondary {\r\n                color: $on-secondary-faded;\r\n            }\r\n        }\r\n    }\r\n\r\n    a {\r\n        color: $secondary;\r\n    }\r\n\r\n    .tag {\r\n        color: $on-background;\r\n        background-color: $background-faded;\r\n        border-radius: 0.375rem;\r\n        font-size: 1rem;\r\n        padding: 0.1rem 0.4rem;\r\n        margin-right: 0.125rem;\r\n        margin-top: 0.125rem;\r\n        display: inline-block;\r\n\r\n        &.tag--linkable {\r\n            @extend %secondary;\r\n        }\r\n\r\n        & a {\r\n            text-decoration: none;\r\n            color: inherit;\r\n            &:hover, &:active {\r\n                color: darken($on-secondary, 10%);\r\n            }\r\n        }\r\n    }\r\n\r\n    blockquote {\r\n        margin-left: 0rem;\r\n        padding-left: 0.5rem;\r\n        border-style: solid;\r\n        border-left-width: 0.5rem;\r\n        border-color: darken($background, 50%);\r\n        color: $on-background;\r\n        background-color: darken($background, 10%);\r\n        overflow: hidden;\r\n    }\r\n\r\n    code {\r\n        line-height: 1.25;\r\n        color: $secondary;\r\n        border-radius: 0.25rem;\r\n        background-color: darken($background, 10%);\r\n        display: inline;\r\n        padding: $code-padding 0rem;\r\n\r\n        &.codeBlock {\r\n            color: $on-background;\r\n            padding: 1rem;\r\n            margin: 1rem 0rem;\r\n            border-radius: 1rem;\r\n            display: block;\r\n            overflow-x: auto;\r\n        }\r\n    }\r\n\r\n    img {\r\n        max-width: 100%;\r\n\r\n        &.img__inline {\r\n            float: left;\r\n        }\r\n    }\r\n\r\n    time {\r\n        color: $on-background-faded;\r\n    }\r\n\r\n    .anchor {\r\n        display: block;\r\n        margin-top: -1 * $nav-height;\r\n        height: $nav-height;\r\n        visibility: hidden;\r\n    }\r\n\r\n    // Lists\r\n    ul {\r\n        padding: $li-padding * 2;\r\n    }\r\n\r\n    ol {\r\n        padding: $li-padding * 2;\r\n    }\r\n\r\n    ul > li {\r\n        margin-left: 1rem; \r\n        padding: $li-padding * 2;\r\n        list-style-type: circle;\r\n        list-style-position: outside;\r\n    }\r\n\r\n    ol > li {\r\n        margin-left: 1rem; \r\n        padding: $li-padding * 2;\r\n        list-style-type: decimal;\r\n        list-style-position: outside;\r\n    }\r\n\r\n    // Specifics\r\n    .file-icon-excel--active {\r\n        color: green;\r\n    }\r\n\r\n    .fa-exclamation-triangle {\r\n        color: $error;\r\n    }\r\n\r\n    .feed-item--loading {\r\n        background-color: $background-skeleton;\r\n    }\r\n\r\n    ul.feed {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    li.feed-item {\r\n        margin: 0 0 1rem 0;\r\n        padding: 0;\r\n        width: 27.5rem;\r\n        list-style-type: none;\r\n\r\n        p:only-of-type {\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        a {\r\n            text-decoration: none;\r\n            color: inherit;\r\n        }\r\n    }\r\n\r\n    @media only screen and (min-width: $break-md) {\r\n        .content-wrapper {\r\n            width: $break-md;\r\n            padding-left: 32px;\r\n            padding-right: 32px;\r\n        }\r\n\r\n        article.post {\r\n            .post__content {\r\n                font-size: 1.25rem;\r\n                line-height: 1.75;\r\n\r\n                img {\r\n                    max-width: 320px;\r\n                    margin-top: 0.5em;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    @media only screen and (min-width: $break-lg) {\r\n        .content-wrapper {\r\n            width: $break-lg;\r\n            padding-left: 64px;\r\n            padding-right: 64px;\r\n        }\r\n\r\n        article.post {\r\n            .post__content {\r\n                font-size: 1.25rem;\r\n                line-height: 1.75;\r\n\r\n                img {\r\n                    max-width: 320px;\r\n                    margin-top: 0.5em;\r\n                }\r\n            }\r\n            \r\n            .post__outline {\r\n                display: block;\r\n                line-height: 1em;\r\n                margin-top: 1rem;\r\n                width: 100px;\r\n                position: absolute;\r\n                left: 0;\r\n                top: $header-height;\r\n                overflow-x: hidden;\r\n                li {\r\n                    list-style-type: none;\r\n                }\r\n                a {\r\n                    text-decoration: none;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}",".app--default {\n  font-family: \"Helvetica\";\n  line-height: 1.25;\n}\n.app--default header.main__header {\n  background-color: #666699;\n  color: #ffffff;\n}\n.app--default .tag.tag--linkable, .app--default button.btn--flat.btn--secondary {\n  background-color: #0099cc;\n  color: #ffffff;\n}\n.app--default footer.main__footer, .app--default header, .app--default .container, .app--default .app--default {\n  background-color: #ffffff;\n  color: #000000;\n}\n.app--default .color-background-faded {\n  color: #777777;\n}\n.app--default * {\n  box-sizing: border-box;\n}\n.app--default #disqus_thread {\n  margin-top: 16px;\n}\n.app--default .list--no-style {\n  padding-left: 0;\n}\n.app--default .list--no-style li {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n}\n.app--default .clearfix {\n  clear: both;\n}\n.app--default .content-wrapper {\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.app--default .container {\n  min-height: 100%;\n  min-height: 100vh;\n}\n.app--default .row {\n  display: flex;\n  flex-direction: row;\n}\n.app--default .column {\n  display: flex;\n  flex-direction: column;\n}\n.app--default header {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.app--default header.main__header {\n  width: 100%;\n  height: 7rem;\n  text-align: left;\n  padding: 1rem 0;\n}\n.app--default header.main__header h1 {\n  font-size: 3rem;\n  font-weight: 200;\n  font-stretch: condensed;\n  margin: 0;\n}\n.app--default nav {\n  background-color: #666699;\n  color: #ffffff;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 2.5rem;\n  margin-top: -2.5rem;\n  flex-grow: 0;\n  flex-shrink: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n}\n.app--default nav .nav-link--active {\n  text-decoration: underline;\n}\n.app--default nav a {\n  padding: 0.25rem 0rem;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.25rem;\n}\n.app--default nav a + a {\n  margin-left: 1.75rem;\n}\n.app--default nav a:link, .app--default nav a:visited {\n  color: #ffffff;\n}\n.app--default nav a:hover, .app--default nav a:active {\n  color: #e6e6e6;\n}\n.app--default main {\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.app--default p {\n  margin-bottom: 1rem;\n  word-wrap: break-word;\n}\n.app--default .main__footer-icon {\n  height: 24px;\n  margin-bottom: -5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.app--default footer.main__footer {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  flex-shrink: 0;\n}\n.app--default footer.main__footer p {\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.app--default footer.blog__footer {\n  margin: 2rem 0rem;\n}\n.app--default article.post header {\n  margin-bottom: 1.5rem;\n}\n.app--default article.post header p {\n  font-size: 1rem;\n  line-height: 2;\n  color: #777777;\n}\n.app--default article.post p {\n  margin-bottom: 0;\n}\n.app--default article.post p + p {\n  margin-top: 1.5rem;\n}\n.app--default article.post .post__content {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.app--default article.post .post__content img {\n  max-width: 100%;\n  margin: 0 10px 10px 0;\n  float: left;\n}\n.app--default article.post .post__content img.pin {\n  margin: 0;\n  height: 1em;\n  width: 1em;\n  float: right;\n  opacity: 0.1;\n}\n.app--default article.post .post__content img.pin:hover {\n  opacity: 1;\n}\n.app--default article.post .post__outline {\n  display: none;\n}\n.app--default h1 {\n  font-size: 2.5rem;\n}\n.app--default h2 {\n  font-size: 2rem;\n}\n.app--default h3 {\n  font-size: 1.75rem;\n}\n.app--default h4 {\n  font-size: 1.6rem;\n}\n.app--default h5 {\n  font-size: 1.5rem;\n}\n.app--default h6 {\n  font-size: 1.1rem;\n}\n.app--default h1, .app--default h2, .app--default h3, .app--default h4, .app--default h5, .app--default h6 {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.app--default button {\n  background-color: transparent;\n  border-width: 0;\n  border-style: none;\n  color: inherit;\n  padding: 0;\n}\n.app--default button.btn--flat {\n  background-color: #DDDDDD;\n  padding: 0.5rem 1rem;\n}\n.app--default button:hover, .app--default button:focus {\n  cursor: pointer;\n  outline: 0rem;\n}\n.app--default button:hover.btn--flat, .app--default button:focus.btn--flat {\n  color: #777777;\n}\n.app--default button:hover.btn--flat.btn--secondary, .app--default button:focus.btn--flat.btn--secondary {\n  color: #DDDDDD;\n}\n.app--default a {\n  color: #0099cc;\n}\n.app--default .tag {\n  color: #000000;\n  background-color: #DDDDDD;\n  border-radius: 0.375rem;\n  font-size: 1rem;\n  padding: 0.1rem 0.4rem;\n  margin-right: 0.125rem;\n  margin-top: 0.125rem;\n  display: inline-block;\n}\n.app--default .tag a {\n  text-decoration: none;\n  color: inherit;\n}\n.app--default .tag a:hover, .app--default .tag a:active {\n  color: #e6e6e6;\n}\n.app--default blockquote {\n  margin-left: 0rem;\n  padding-left: 0.5rem;\n  border-style: solid;\n  border-left-width: 0.5rem;\n  border-color: gray;\n  color: #000000;\n  background-color: #e6e6e6;\n  overflow: hidden;\n}\n.app--default code {\n  line-height: 1.25;\n  color: #0099cc;\n  border-radius: 0.25rem;\n  background-color: #e6e6e6;\n  display: inline;\n  padding: 0.125rem 0rem;\n}\n.app--default code.codeBlock {\n  color: #000000;\n  padding: 1rem;\n  margin: 1rem 0rem;\n  border-radius: 1rem;\n  display: block;\n  overflow-x: auto;\n}\n.app--default img {\n  max-width: 100%;\n}\n.app--default img.img__inline {\n  float: left;\n}\n.app--default time {\n  color: #777777;\n}\n.app--default .anchor {\n  display: block;\n  margin-top: -2.5rem;\n  height: 2.5rem;\n  visibility: hidden;\n}\n.app--default ul {\n  padding: 0.25rem;\n}\n.app--default ol {\n  padding: 0.25rem;\n}\n.app--default ul > li {\n  margin-left: 1rem;\n  padding: 0.25rem;\n  list-style-type: circle;\n  list-style-position: outside;\n}\n.app--default ol > li {\n  margin-left: 1rem;\n  padding: 0.25rem;\n  list-style-type: decimal;\n  list-style-position: outside;\n}\n.app--default .file-icon-excel--active {\n  color: green;\n}\n.app--default .fa-exclamation-triangle {\n  color: #ffbf3d;\n}\n.app--default .feed-item--loading {\n  background-color: #F7F7F7;\n}\n.app--default ul.feed {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n}\n.app--default li.feed-item {\n  margin: 0 0 1rem 0;\n  padding: 0;\n  width: 27.5rem;\n  list-style-type: none;\n}\n.app--default li.feed-item p:only-of-type {\n  margin-bottom: 0;\n}\n.app--default li.feed-item a {\n  text-decoration: none;\n  color: inherit;\n}\n@media only screen and (min-width: 768px) {\n  .app--default .content-wrapper {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n  .app--default article.post .post__content {\n    font-size: 1.25rem;\n    line-height: 1.75;\n  }\n  .app--default article.post .post__content img {\n    max-width: 320px;\n    margin-top: 0.5em;\n  }\n}\n@media only screen and (min-width: 1012px) {\n  .app--default .content-wrapper {\n    width: 1012px;\n    padding-left: 64px;\n    padding-right: 64px;\n  }\n  .app--default article.post .post__content {\n    font-size: 1.25rem;\n    line-height: 1.75;\n  }\n  .app--default article.post .post__content img {\n    max-width: 320px;\n    margin-top: 0.5em;\n  }\n  .app--default article.post .post__outline {\n    display: block;\n    line-height: 1em;\n    margin-top: 1rem;\n    width: 100px;\n    position: absolute;\n    left: 0;\n    top: 7rem;\n    overflow-x: hidden;\n  }\n  .app--default article.post .post__outline li {\n    list-style-type: none;\n  }\n  .app--default article.post .post__outline a {\n    text-decoration: none;\n  }\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.header__logo {\n  width: 48px;\n  height: 48px;\n  margin-bottom: -6px;\n  margin-right: 4px;\n}","@mixin theme-color($background-color, $text-color) {\r\n    background-color: $background-color;\r\n    color: $text-color;\r\n}","@import './theme-default';\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/sass/main.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/sass/main.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "html, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  line-height: 1;\n}\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nnav ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\n/* change colours to suit your needs */\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\n\n/* change colours to suit your needs */\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* change border colour to suit your needs */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cccccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\ninput, select {\n  vertical-align: middle;\n}\n\n.app--default {\n  font-family: \"Helvetica\";\n  line-height: 1.25;\n}\n.app--default header.main__header {\n  background-color: #666699;\n  color: #ffffff;\n}\n.app--default .tag.tag--linkable, .app--default button.btn--flat.btn--secondary {\n  background-color: #0099cc;\n  color: #ffffff;\n}\n.app--default footer.main__footer, .app--default header, .app--default .container, .app--default .app--default {\n  background-color: #ffffff;\n  color: #000000;\n}\n.app--default .color-background-faded {\n  color: #777777;\n}\n.app--default * {\n  box-sizing: border-box;\n}\n.app--default #disqus_thread {\n  margin-top: 16px;\n}\n.app--default .list--no-style {\n  padding-left: 0;\n}\n.app--default .list--no-style li {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n}\n.app--default .clearfix {\n  clear: both;\n}\n.app--default .content-wrapper {\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.app--default .container {\n  min-height: 100%;\n  min-height: 100vh;\n}\n.app--default .row {\n  display: flex;\n  flex-direction: row;\n}\n.app--default .column {\n  display: flex;\n  flex-direction: column;\n}\n.app--default header {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.app--default header.main__header {\n  width: 100%;\n  height: 7rem;\n  text-align: left;\n  padding: 1rem 0;\n}\n.app--default header.main__header h1 {\n  font-size: 3rem;\n  font-weight: 200;\n  font-stretch: condensed;\n  margin: 0;\n}\n.app--default nav {\n  background-color: #666699;\n  color: #ffffff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 2.5rem;\n  margin-top: -2.5rem;\n  flex-grow: 0;\n  flex-shrink: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n}\n.app--default nav .nav-link--active {\n  text-decoration: underline;\n}\n.app--default nav a {\n  padding: 0.25rem 0rem;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.25rem;\n}\n.app--default nav a + a {\n  margin-left: 1.75rem;\n}\n.app--default nav a:link, .app--default nav a:visited {\n  color: #ffffff;\n}\n.app--default nav a:hover, .app--default nav a:active {\n  color: #e6e6e6;\n}\n.app--default main {\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.app--default p {\n  margin-bottom: 1rem;\n  word-wrap: break-word;\n}\n.app--default .main__footer-icon {\n  height: 24px;\n  margin-bottom: -5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.app--default footer.main__footer {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  flex-shrink: 0;\n}\n.app--default footer.main__footer p {\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.app--default footer.blog__footer {\n  margin: 2rem 0rem;\n}\n.app--default article.post header {\n  margin-bottom: 1.5rem;\n}\n.app--default article.post header p {\n  font-size: 1rem;\n  line-height: 2;\n  color: #777777;\n}\n.app--default article.post p {\n  margin-bottom: 0;\n}\n.app--default article.post p + p {\n  margin-top: 1.5rem;\n}\n.app--default article.post .post__content {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.app--default article.post .post__content img {\n  max-width: 100%;\n  margin: 0 10px 10px 0;\n  float: left;\n}\n.app--default article.post .post__content img.pin {\n  margin: 0;\n  height: 1em;\n  width: 1em;\n  float: right;\n  opacity: 0.1;\n}\n.app--default article.post .post__content img.pin:hover {\n  opacity: 1;\n}\n.app--default article.post .post__outline {\n  display: none;\n}\n.app--default h1 {\n  font-size: 2.5rem;\n}\n.app--default h2 {\n  font-size: 2rem;\n}\n.app--default h3 {\n  font-size: 1.75rem;\n}\n.app--default h4 {\n  font-size: 1.6rem;\n}\n.app--default h5 {\n  font-size: 1.5rem;\n}\n.app--default h6 {\n  font-size: 1.1rem;\n}\n.app--default h1, .app--default h2, .app--default h3, .app--default h4, .app--default h5, .app--default h6 {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.app--default button {\n  background-color: transparent;\n  border-width: 0;\n  border-style: none;\n  color: inherit;\n  padding: 0;\n}\n.app--default button.btn--flat {\n  background-color: #DDDDDD;\n  padding: 0.5rem 1rem;\n}\n.app--default button:hover, .app--default button:focus {\n  cursor: pointer;\n  outline: 0rem;\n}\n.app--default button:hover.btn--flat, .app--default button:focus.btn--flat {\n  color: #777777;\n}\n.app--default button:hover.btn--flat.btn--secondary, .app--default button:focus.btn--flat.btn--secondary {\n  color: #DDDDDD;\n}\n.app--default a {\n  color: #0099cc;\n}\n.app--default .tag {\n  color: #000000;\n  background-color: #DDDDDD;\n  border-radius: 0.375rem;\n  font-size: 1rem;\n  padding: 0.1rem 0.4rem;\n  margin-right: 0.125rem;\n  margin-top: 0.125rem;\n  display: inline-block;\n}\n.app--default .tag a {\n  text-decoration: none;\n  color: inherit;\n}\n.app--default .tag a:hover, .app--default .tag a:active {\n  color: #e6e6e6;\n}\n.app--default blockquote {\n  margin-left: 0rem;\n  padding-left: 0.5rem;\n  border-style: solid;\n  border-left-width: 0.5rem;\n  border-color: gray;\n  color: #000000;\n  background-color: #e6e6e6;\n  overflow: hidden;\n}\n.app--default code {\n  line-height: 1.25;\n  color: #0099cc;\n  border-radius: 0.25rem;\n  background-color: #e6e6e6;\n  display: inline;\n  padding: 0.125rem 0rem;\n}\n.app--default code.codeBlock {\n  color: #000000;\n  padding: 1rem;\n  margin: 1rem 0rem;\n  border-radius: 1rem;\n  display: block;\n  overflow-x: auto;\n}\n.app--default img {\n  max-width: 100%;\n}\n.app--default img.img__inline {\n  float: left;\n}\n.app--default time {\n  color: #777777;\n}\n.app--default .anchor {\n  display: block;\n  margin-top: -2.5rem;\n  height: 2.5rem;\n  visibility: hidden;\n}\n.app--default ul {\n  padding: 0.25rem;\n}\n.app--default ol {\n  padding: 0.25rem;\n}\n.app--default ul > li {\n  margin-left: 1rem;\n  padding: 0.25rem;\n  list-style-type: circle;\n  list-style-position: outside;\n}\n.app--default ol > li {\n  margin-left: 1rem;\n  padding: 0.25rem;\n  list-style-type: decimal;\n  list-style-position: outside;\n}\n.app--default .file-icon-excel--active {\n  color: green;\n}\n.app--default .fa-exclamation-triangle {\n  color: #ffbf3d;\n}\n.app--default .feed-item--loading {\n  background-color: #F7F7F7;\n}\n.app--default ul.feed {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n}\n.app--default li.feed-item {\n  margin: 0 0 1rem 0;\n  padding: 0;\n  width: 27.5rem;\n  list-style-type: none;\n}\n.app--default li.feed-item p:only-of-type {\n  margin-bottom: 0;\n}\n.app--default li.feed-item a {\n  text-decoration: none;\n  color: inherit;\n}\n@media only screen and (min-width: 768px) {\n  .app--default .content-wrapper {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n  .app--default article.post .post__content {\n    font-size: 1.25rem;\n    line-height: 1.75;\n  }\n  .app--default article.post .post__content img {\n    max-width: 320px;\n    margin-top: 0.5em;\n  }\n}\n@media only screen and (min-width: 1012px) {\n  .app--default .content-wrapper {\n    width: 1012px;\n    padding-left: 64px;\n    padding-right: 64px;\n  }\n  .app--default article.post .post__content {\n    font-size: 1.25rem;\n    line-height: 1.75;\n  }\n  .app--default article.post .post__content img {\n    max-width: 320px;\n    margin-top: 0.5em;\n  }\n  .app--default article.post .post__outline {\n    display: block;\n    line-height: 1em;\n    margin-top: 1rem;\n    width: 100px;\n    position: absolute;\n    left: 0;\n    top: 7rem;\n    overflow-x: hidden;\n  }\n  .app--default article.post .post__outline li {\n    list-style-type: none;\n  }\n  .app--default article.post .post__outline a {\n    text-decoration: none;\n  }\n}\n\nhtml, body {\n  height: 100%;\n}", "",{"version":3,"sources":["C:/Users/Josh/repos/blog/styles/sass/base/_reset.scss","C:/Users/Josh/repos/blog/styles/sass/main.scss","C:/Users/Josh/repos/blog/styles/sass/themes/_theme-default.scss","C:/Users/Josh/repos/blog/styles/sass/abstracts/_mixins.scss","C:/Users/Josh/repos/blog/styles/sass/themes/_theme.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;EAYC,SAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,wBAAA;EACA,uBAAA;ACCD;;ADEA;EACI,eAAA;ACCJ;;ADEA;EACC,cAAA;ACCD;;ADEA;;EAEC,cAAA;ACCD;;ADEA;EACC,gBAAA;ACCD;;ADEA;EACC,YAAA;ACCD;;ADEA;;EAEC,WAAA;EACA,aAAA;ACCD;;ADEA;EACC,SAAA;EACA,UAAA;EACA,eAAA;EACA,wBAAA;EACA,uBAAA;ACCD;;ADEA,sCAAA;AACA;EACC,sBAAA;EACA,WAAA;EACA,qBAAA;ACCD;;ADEA,sCAAA;AACA;EACC,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;ACCD;;ADEA;EACC,6BAAA;ACCD;;ADEA;EACC,yBAAA;EACA,YAAA;ACCD;;ADEA;EACC,yBAAA;EACA,iBAAA;ACCD;;ADEA,4CAAA;AACA;EACC,cAAA;EACA,WAAA;EACA,SAAA;EACA,6BAAA;EACA,aAAA;EACA,UAAA;ACCD;;ADEA;EACC,sBAAA;ACCD;;AC/FA;EAiDI,wBAAA;EACA,iBAAA;ADkDJ;ACvEI;EC9BA,yBDEU;ECDV,cDEa;ADsGjB;ACvEI;EClCA,yBDKY;ECJZ,cDEa;AD0GjB;ACvEI;ECtCA,yBDSa;ECRb,cDWgB;ADqGpB;ACnEI;EACI,cAlCkB;ADuG1B;AC7DI;EACI,sBAAA;AD+DR;AC5DI;EACI,gBAAA;AD8DR;AC3DI;EACI,eAAA;AD6DR;AC3DQ;EACI,gBAAA;EACA,SAAA;EACA,eAAA;AD6DZ;ACxDI;EACI,WAAA;AD0DR;ACvDI;EACI,WArDY;EAsDZ,kBA1Dc;EA2Dd,mBA3Dc;EA4Dd,iBAAA;EACA,kBAAA;ADyDR;ACtDI;EACI,gBAAA;EACA,iBAAA;ADwDR;ACpDI;EACI,aAAA;EACA,mBAAA;ADsDR;ACnDI;EACI,aAAA;EACA,sBAAA;ADqDR;AClDI;EAEI,cAAA;EACA,YAAA;ADmDR;AChDI;EAEI,WAAA;EACA,YA3FY;EA4FZ,gBAAA;EACA,eAAA;ADiDR;AC/CQ;EACI,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,SAAA;ADiDZ;AC7CI;EACI,yBA1HM;EA2HN,cA1HS;EA2HT,wBAAA;EAAA,gBAAA;EACA,MAAA;EACA,WAAA;EACA,cA5GS;EA6GT,mBAAA;EACA,YAAA;EACA,cAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;AD+CR;AC7CQ;EACI,0BAAA;AD+CZ;AC5CQ;EACI,qBAAA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;AD8CZ;AC3CQ;EACI,oBAAA;AD6CZ;AC1CQ;EACI,cAtJK;ADkMjB;ACzCQ;EACI,cAAA;AD2CZ;ACvCI;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;ADyCR;ACtCI;EACI,mBAAA;EACA,qBAAA;ADwCR;ACrCI;EACI,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;ADuCR;ACnCQ;EAEI,iBAAA;EACA,oBAAA;EACA,cAAA;ADoCZ;ACnCY;EACI,qBAAA;EACA,kBAAA;ADqChB;ACjCQ;EACI,iBAAA;ADmCZ;AC9BQ;EACI,qBAAA;ADgCZ;AC/BY;EACI,eAAA;EACA,cAAA;EACA,cA9LU;AD+N1B;AC7BQ;EACI,gBAAA;AD+BZ;AC5BQ;EACI,kBAAA;AD8BZ;AC3BQ;EAmBI,eAAA;EACA,gBAAA;ADWZ;AC9BY;EACI,eAAA;EACA,qBAAA;EACA,WAAA;ADgChB;AC9BgB;EACI,SAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;ADgCpB;AC9BoB;EACI,UAAA;ADgCxB;ACvBQ;EACI,aAAA;ADyBZ;ACrBI;EACI,iBAAA;ADuBR;ACpBI;EACI,eAAA;ADsBR;ACnBI;EACI,kBAAA;ADqBR;AClBI;EACI,iBAAA;ADoBR;ACjBI;EACI,iBAAA;ADmBR;AChBI;EACI,iBAAA;ADkBR;ACfI;EACI,gBAAA;EACA,qBAAA;EACA,cAAA;ADiBR;ACbI;EACI,6BAAA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;EACA,UAAA;ADeR;ACbQ;EACI,yBA/QW;EAgRX,oBAAA;ADeZ;ACPI;EACI,eAAA;EACA,aAAA;ADSR;ACPQ;EACI,cA3Rc;ADoS1B;ACPY;EACI,cApSS;AD6SzB;ACJI;EACI,cA5SQ;ADkThB;ACHI;EACI,cAzSY;EA0SZ,yBA3Se;EA4Sf,uBAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,oBAAA;EACA,qBAAA;ADKR;ACCQ;EACI,qBAAA;EACA,cAAA;ADCZ;ACAY;EACI,cAAA;ADEhB;ACGI;EACI,iBAAA;EACA,oBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cArUY;EAsUZ,yBAAA;EACA,gBAAA;ADDR;ACII;EACI,iBAAA;EACA,cAnVQ;EAoVR,sBAAA;EACA,yBAAA;EACA,eAAA;EACA,sBAAA;ADFR;ACIQ;EACI,cAnVQ;EAoVR,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;ADFZ;ACMI;EACI,eAAA;ADJR;ACMQ;EACI,WAAA;ADJZ;ACQI;EACI,cApWkB;AD8V1B;ACSI;EACI,cAAA;EACA,mBAAA;EACA,cAlWS;EAmWT,kBAAA;ADPR;ACWI;EACI,gBAAA;ADTR;ACYI;EACI,gBAAA;ADVR;ACaI;EACI,iBAAA;EACA,gBAAA;EACA,uBAAA;EACA,4BAAA;ADXR;ACcI;EACI,iBAAA;EACA,gBAAA;EACA,wBAAA;EACA,4BAAA;ADZR;ACgBI;EACI,YAAA;ADdR;ACiBI;EACI,cAtYI;ADuXZ;ACkBI;EACI,yBAlZkB;ADkY1B;ACmBI;EACI,aAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;ADjBR;ACoBI;EACI,kBAAA;EACA,UAAA;EACA,cAAA;EACA,qBAAA;ADlBR;ACoBQ;EACI,gBAAA;ADlBZ;ACqBQ;EACI,qBAAA;EACA,cAAA;ADnBZ;ACuBI;EACI;IACI,YA7ZG;IA8ZH,kBAAA;IACA,mBAAA;EDrBV;ECyBU;IACI,kBAAA;IACA,iBAAA;EDvBd;ECyBc;IACI,gBAAA;IACA,iBAAA;EDvBlB;AACF;AC4BI;EACI;IACI,aAhbG;IAibH,kBAAA;IACA,mBAAA;ED1BV;EC8BU;IACI,kBAAA;IACA,iBAAA;ED5Bd;EC8Bc;IACI,gBAAA;IACA,iBAAA;ED5BlB;ECgCU;IACI,cAAA;IACA,gBAAA;IACA,gBAAA;IACA,YAAA;IACA,kBAAA;IACA,OAAA;IACA,SA/cI;IAgdJ,kBAAA;ED9Bd;EC+Bc;IACI,qBAAA;ED7BlB;EC+Bc;IACI,qBAAA;ED7BlB;AACF;;AG5cA;EACI,YAAA;AH+cJ","file":"main.scss","sourcesContent":["html, body, div, span, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\nabbr, address, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, samp,\r\nsmall, strong, sub, sup, var,\r\nb, i,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section, summary,\r\ntime, mark, audio, video {\r\n margin:0;\r\n padding:0;\r\n border:0;\r\n outline:0;\r\n font-size:100%;\r\n vertical-align:baseline;\r\n background:transparent;\r\n}\r\n\r\nhtml {\r\n    font-size:16px;\r\n}\r\n\r\nbody {\r\n line-height:1;\r\n}\r\n\r\narticle,aside,details,figcaption,figure,\r\nfooter,header,hgroup,menu,nav,section { \r\n display:block;\r\n}\r\n\r\nnav ul {\r\n list-style:none;\r\n}\r\n\r\nblockquote, q {\r\n quotes:none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n content:'';\r\n content:none;\r\n}\r\n\r\na {\r\n margin:0;\r\n padding:0;\r\n font-size:100%;\r\n vertical-align:baseline;\r\n background:transparent;\r\n}\r\n\r\n/* change colours to suit your needs */\r\nins {\r\n background-color:#ff9;\r\n color:#000;\r\n text-decoration:none;\r\n}\r\n\r\n/* change colours to suit your needs */\r\nmark {\r\n background-color:#ff9;\r\n color:#000; \r\n font-style:italic;\r\n font-weight:bold;\r\n}\r\n\r\ndel {\r\n text-decoration: line-through;\r\n}\r\n\r\nabbr[title], dfn[title] {\r\n border-bottom:1px dotted;\r\n cursor:help;\r\n}\r\n\r\ntable {\r\n border-collapse:collapse;\r\n border-spacing:0;\r\n}\r\n\r\n/* change border colour to suit your needs */\r\nhr {\r\n display:block;\r\n height:1px;\r\n border:0; \r\n border-top:1px solid #cccccc;\r\n margin:1em 0;\r\n padding:0;\r\n}\r\n\r\ninput, select {\r\n vertical-align:middle;\r\n}","html, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  line-height: 1;\n}\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nnav ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\n/* change colours to suit your needs */\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\n\n/* change colours to suit your needs */\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* change border colour to suit your needs */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cccccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\ninput, select {\n  vertical-align: middle;\n}\n\n.app--default {\n  font-family: \"Helvetica\";\n  line-height: 1.25;\n}\n.app--default header.main__header {\n  background-color: #666699;\n  color: #ffffff;\n}\n.app--default .tag.tag--linkable, .app--default button.btn--flat.btn--secondary {\n  background-color: #0099cc;\n  color: #ffffff;\n}\n.app--default footer.main__footer, .app--default header, .app--default .container, .app--default .app--default {\n  background-color: #ffffff;\n  color: #000000;\n}\n.app--default .color-background-faded {\n  color: #777777;\n}\n.app--default * {\n  box-sizing: border-box;\n}\n.app--default #disqus_thread {\n  margin-top: 16px;\n}\n.app--default .list--no-style {\n  padding-left: 0;\n}\n.app--default .list--no-style li {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n}\n.app--default .clearfix {\n  clear: both;\n}\n.app--default .content-wrapper {\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.app--default .container {\n  min-height: 100%;\n  min-height: 100vh;\n}\n.app--default .row {\n  display: flex;\n  flex-direction: row;\n}\n.app--default .column {\n  display: flex;\n  flex-direction: column;\n}\n.app--default header {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.app--default header.main__header {\n  width: 100%;\n  height: 7rem;\n  text-align: left;\n  padding: 1rem 0;\n}\n.app--default header.main__header h1 {\n  font-size: 3rem;\n  font-weight: 200;\n  font-stretch: condensed;\n  margin: 0;\n}\n.app--default nav {\n  background-color: #666699;\n  color: #ffffff;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 2.5rem;\n  margin-top: -2.5rem;\n  flex-grow: 0;\n  flex-shrink: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n}\n.app--default nav .nav-link--active {\n  text-decoration: underline;\n}\n.app--default nav a {\n  padding: 0.25rem 0rem;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 1.25rem;\n}\n.app--default nav a + a {\n  margin-left: 1.75rem;\n}\n.app--default nav a:link, .app--default nav a:visited {\n  color: #ffffff;\n}\n.app--default nav a:hover, .app--default nav a:active {\n  color: #e6e6e6;\n}\n.app--default main {\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.app--default p {\n  margin-bottom: 1rem;\n  word-wrap: break-word;\n}\n.app--default .main__footer-icon {\n  height: 24px;\n  margin-bottom: -5px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.app--default footer.main__footer {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  flex-shrink: 0;\n}\n.app--default footer.main__footer p {\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.app--default footer.blog__footer {\n  margin: 2rem 0rem;\n}\n.app--default article.post header {\n  margin-bottom: 1.5rem;\n}\n.app--default article.post header p {\n  font-size: 1rem;\n  line-height: 2;\n  color: #777777;\n}\n.app--default article.post p {\n  margin-bottom: 0;\n}\n.app--default article.post p + p {\n  margin-top: 1.5rem;\n}\n.app--default article.post .post__content {\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.app--default article.post .post__content img {\n  max-width: 100%;\n  margin: 0 10px 10px 0;\n  float: left;\n}\n.app--default article.post .post__content img.pin {\n  margin: 0;\n  height: 1em;\n  width: 1em;\n  float: right;\n  opacity: 0.1;\n}\n.app--default article.post .post__content img.pin:hover {\n  opacity: 1;\n}\n.app--default article.post .post__outline {\n  display: none;\n}\n.app--default h1 {\n  font-size: 2.5rem;\n}\n.app--default h2 {\n  font-size: 2rem;\n}\n.app--default h3 {\n  font-size: 1.75rem;\n}\n.app--default h4 {\n  font-size: 1.6rem;\n}\n.app--default h5 {\n  font-size: 1.5rem;\n}\n.app--default h6 {\n  font-size: 1.1rem;\n}\n.app--default h1, .app--default h2, .app--default h3, .app--default h4, .app--default h5, .app--default h6 {\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.app--default button {\n  background-color: transparent;\n  border-width: 0;\n  border-style: none;\n  color: inherit;\n  padding: 0;\n}\n.app--default button.btn--flat {\n  background-color: #DDDDDD;\n  padding: 0.5rem 1rem;\n}\n.app--default button:hover, .app--default button:focus {\n  cursor: pointer;\n  outline: 0rem;\n}\n.app--default button:hover.btn--flat, .app--default button:focus.btn--flat {\n  color: #777777;\n}\n.app--default button:hover.btn--flat.btn--secondary, .app--default button:focus.btn--flat.btn--secondary {\n  color: #DDDDDD;\n}\n.app--default a {\n  color: #0099cc;\n}\n.app--default .tag {\n  color: #000000;\n  background-color: #DDDDDD;\n  border-radius: 0.375rem;\n  font-size: 1rem;\n  padding: 0.1rem 0.4rem;\n  margin-right: 0.125rem;\n  margin-top: 0.125rem;\n  display: inline-block;\n}\n.app--default .tag a {\n  text-decoration: none;\n  color: inherit;\n}\n.app--default .tag a:hover, .app--default .tag a:active {\n  color: #e6e6e6;\n}\n.app--default blockquote {\n  margin-left: 0rem;\n  padding-left: 0.5rem;\n  border-style: solid;\n  border-left-width: 0.5rem;\n  border-color: gray;\n  color: #000000;\n  background-color: #e6e6e6;\n  overflow: hidden;\n}\n.app--default code {\n  line-height: 1.25;\n  color: #0099cc;\n  border-radius: 0.25rem;\n  background-color: #e6e6e6;\n  display: inline;\n  padding: 0.125rem 0rem;\n}\n.app--default code.codeBlock {\n  color: #000000;\n  padding: 1rem;\n  margin: 1rem 0rem;\n  border-radius: 1rem;\n  display: block;\n  overflow-x: auto;\n}\n.app--default img {\n  max-width: 100%;\n}\n.app--default img.img__inline {\n  float: left;\n}\n.app--default time {\n  color: #777777;\n}\n.app--default .anchor {\n  display: block;\n  margin-top: -2.5rem;\n  height: 2.5rem;\n  visibility: hidden;\n}\n.app--default ul {\n  padding: 0.25rem;\n}\n.app--default ol {\n  padding: 0.25rem;\n}\n.app--default ul > li {\n  margin-left: 1rem;\n  padding: 0.25rem;\n  list-style-type: circle;\n  list-style-position: outside;\n}\n.app--default ol > li {\n  margin-left: 1rem;\n  padding: 0.25rem;\n  list-style-type: decimal;\n  list-style-position: outside;\n}\n.app--default .file-icon-excel--active {\n  color: green;\n}\n.app--default .fa-exclamation-triangle {\n  color: #ffbf3d;\n}\n.app--default .feed-item--loading {\n  background-color: #F7F7F7;\n}\n.app--default ul.feed {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n}\n.app--default li.feed-item {\n  margin: 0 0 1rem 0;\n  padding: 0;\n  width: 27.5rem;\n  list-style-type: none;\n}\n.app--default li.feed-item p:only-of-type {\n  margin-bottom: 0;\n}\n.app--default li.feed-item a {\n  text-decoration: none;\n  color: inherit;\n}\n@media only screen and (min-width: 768px) {\n  .app--default .content-wrapper {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n  .app--default article.post .post__content {\n    font-size: 1.25rem;\n    line-height: 1.75;\n  }\n  .app--default article.post .post__content img {\n    max-width: 320px;\n    margin-top: 0.5em;\n  }\n}\n@media only screen and (min-width: 1012px) {\n  .app--default .content-wrapper {\n    width: 1012px;\n    padding-left: 64px;\n    padding-right: 64px;\n  }\n  .app--default article.post .post__content {\n    font-size: 1.25rem;\n    line-height: 1.75;\n  }\n  .app--default article.post .post__content img {\n    max-width: 320px;\n    margin-top: 0.5em;\n  }\n  .app--default article.post .post__outline {\n    display: block;\n    line-height: 1em;\n    margin-top: 1rem;\n    width: 100px;\n    position: absolute;\n    left: 0;\n    top: 7rem;\n    overflow-x: hidden;\n  }\n  .app--default article.post .post__outline li {\n    list-style-type: none;\n  }\n  .app--default article.post .post__outline a {\n    text-decoration: none;\n  }\n}\n\nhtml, body {\n  height: 100%;\n}","@import '../abstracts/mixins';\r\n\r\n.app--default {\r\n    $primary: #666699;\r\n    $on-primary: #ffffff;\r\n\r\n    $secondary: #0099cc;\r\n    $on-secondary: $on-primary;\r\n    $on-secondary-faded: #DDDDDD;\r\n\r\n    $background: #ffffff;\r\n    $background-skeleton: #F7F7F7;\r\n    $background-faded: #DDDDDD;\r\n    $on-background: #000000;\r\n    $on-background-faded: #777777;\r\n\r\n    $warn: #ff0000;\r\n    $on-warn: $on-primary;\r\n\r\n    $error: #ffbf3d;\r\n\r\n    $header-height: 7rem;\r\n    $nav-height: 2.5rem;\r\n    $content-padding: 16px;\r\n    $code-padding: 0.125rem;\r\n    $li-padding: 0.125rem;\r\n\r\n    $content-width: 100%;\r\n    $break-md: 768px;\r\n    $break-lg: 1012px;\r\n\r\n    %primary {\r\n        @include theme-color($primary, $on-primary);\r\n    }\r\n\r\n    %secondary {\r\n        @include theme-color($secondary, $on-secondary);\r\n    }\r\n\r\n    %background {\r\n        @include theme-color($background, $on-background);\r\n    }\r\n\r\n    %warn {\r\n        @include theme-color($warn, $on-warn);\r\n    }\r\n\r\n    .color-background-faded {\r\n        color: $on-background-faded;\r\n    }\r\n\r\n    font-family: 'Helvetica';\r\n    line-height: 1.25;\r\n    @extend %background;\r\n\r\n    // Layout\r\n    * {\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    #disqus_thread {\r\n        margin-top: 16px;\r\n    }\r\n\r\n    .list--no-style {\r\n        padding-left: 0;\r\n\r\n        li {\r\n            list-style: none;\r\n            margin: 0;\r\n            padding-left: 0;\r\n        }\r\n        \r\n    }\r\n\r\n    .clearfix {\r\n        clear: both;\r\n    }\r\n\r\n    .content-wrapper {\r\n        width: $content-width;\r\n        padding-left: $content-padding;\r\n        padding-right: $content-padding;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n\r\n    .container {\r\n        min-height: 100%;\r\n        min-height: 100vh;\r\n        @extend %background;\r\n    }\r\n\r\n    .row {\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .column {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    header {\r\n        @extend %background;\r\n        flex-shrink: 0;\r\n        flex-grow: 0;\r\n    }\r\n\r\n    header.main__header {\r\n        @extend %primary;\r\n        width: 100%;\r\n        height: $header-height;\r\n        text-align: left;\r\n        padding: 1rem 0;\r\n\r\n        h1 {\r\n            font-size: 3rem;\r\n            font-weight: 200;\r\n            font-stretch: condensed;\r\n            margin: 0;\r\n        }\r\n    }\r\n\r\n    nav {\r\n        background-color: $primary;\r\n        color: $on-primary;\r\n        position: sticky;\r\n        top: 0;\r\n        width: 100%;\r\n        height: $nav-height;\r\n        margin-top: -1 * $nav-height;\r\n        flex-grow: 0;\r\n        flex-shrink: 0;\r\n        z-index: 1;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        .nav-link--active {\r\n            text-decoration: underline;\r\n        }\r\n\r\n        a {\r\n            padding: 0.25rem 0rem;\r\n            text-decoration: none;\r\n            display: inline-block;\r\n            font-size: 1.25rem;\r\n        }\r\n\r\n        a + a {\r\n            margin-left: 1.75rem;\r\n        }\r\n\r\n        a:link, a:visited {\r\n            color: $on-primary;\r\n        }\r\n\r\n        a:hover, a:active {\r\n            color: darken($on-primary, 10%);\r\n        }\r\n    }\r\n\r\n    main {\r\n        width: 100%;\r\n        height: 100%;\r\n        flex-grow: 1;\r\n        flex-shrink: 0;\r\n    }\r\n\r\n    p {\r\n        margin-bottom: 1rem;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    .main__footer-icon {\r\n        height: 24px;\r\n        margin-bottom: -5px;\r\n        padding-left: 5px;\r\n        padding-right: 5px;\r\n    }\r\n\r\n    footer {\r\n        &.main__footer {\r\n            @extend %background;\r\n            padding-top: 3rem;\r\n            padding-bottom: 3rem;\r\n            flex-shrink: 0;\r\n            p {\r\n                margin-bottom: 0.5rem;\r\n                text-align: center;\r\n            }\r\n        }\r\n\r\n        &.blog__footer {\r\n            margin: 2rem 0rem;\r\n        }\r\n    }\r\n\r\n    article.post {\r\n        header {\r\n            margin-bottom: 1.5rem;\r\n            p {\r\n                font-size: 1rem;\r\n                line-height: 2;\r\n                color: $on-background-faded; // Revisit this\r\n            }\r\n        }\r\n\r\n        p {\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        p + p {\r\n            margin-top: 1.5rem;\r\n        }\r\n\r\n        .post__content {\r\n            img {\r\n                max-width: 100%;\r\n                margin: 0 10px 10px 0;\r\n                float: left;\r\n\r\n                &.pin {\r\n                    margin: 0;\r\n                    height: 1em;\r\n                    width: 1em;\r\n                    float: right;\r\n                    opacity: 0.1;\r\n\r\n                    &:hover {\r\n                        opacity: 1;\r\n                    }\r\n                }\r\n            }\r\n\r\n            font-size: 1rem;\r\n            line-height: 1.5;\r\n        }\r\n\r\n        .post__outline {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    h1 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.75rem;\r\n    }\r\n\r\n    h4 {\r\n        font-size: 1.6rem;\r\n    }\r\n\r\n    h5 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    h6 {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    h1, h2, h3, h4, h5, h6 {\r\n        margin-top: 1rem;\r\n        margin-bottom: 0.5rem;\r\n        line-height: 1;\r\n    }\r\n    \r\n    // Atoms\r\n    button {\r\n        background-color: transparent;\r\n        border-width: 0;\r\n        border-style: none;\r\n        color: inherit;\r\n        padding: 0;\r\n\r\n        &.btn--flat {\r\n            background-color: $background-faded;\r\n            padding: 0.5rem 1rem;\r\n\r\n            &.btn--secondary {\r\n                @extend %secondary;\r\n            }\r\n        }\r\n    }\r\n\r\n    button:hover, button:focus {\r\n        cursor: pointer;\r\n        outline: 0rem;\r\n\r\n        &.btn--flat {\r\n            color: $on-background-faded;\r\n\r\n            &.btn--secondary {\r\n                color: $on-secondary-faded;\r\n            }\r\n        }\r\n    }\r\n\r\n    a {\r\n        color: $secondary;\r\n    }\r\n\r\n    .tag {\r\n        color: $on-background;\r\n        background-color: $background-faded;\r\n        border-radius: 0.375rem;\r\n        font-size: 1rem;\r\n        padding: 0.1rem 0.4rem;\r\n        margin-right: 0.125rem;\r\n        margin-top: 0.125rem;\r\n        display: inline-block;\r\n\r\n        &.tag--linkable {\r\n            @extend %secondary;\r\n        }\r\n\r\n        & a {\r\n            text-decoration: none;\r\n            color: inherit;\r\n            &:hover, &:active {\r\n                color: darken($on-secondary, 10%);\r\n            }\r\n        }\r\n    }\r\n\r\n    blockquote {\r\n        margin-left: 0rem;\r\n        padding-left: 0.5rem;\r\n        border-style: solid;\r\n        border-left-width: 0.5rem;\r\n        border-color: darken($background, 50%);\r\n        color: $on-background;\r\n        background-color: darken($background, 10%);\r\n        overflow: hidden;\r\n    }\r\n\r\n    code {\r\n        line-height: 1.25;\r\n        color: $secondary;\r\n        border-radius: 0.25rem;\r\n        background-color: darken($background, 10%);\r\n        display: inline;\r\n        padding: $code-padding 0rem;\r\n\r\n        &.codeBlock {\r\n            color: $on-background;\r\n            padding: 1rem;\r\n            margin: 1rem 0rem;\r\n            border-radius: 1rem;\r\n            display: block;\r\n            overflow-x: auto;\r\n        }\r\n    }\r\n\r\n    img {\r\n        max-width: 100%;\r\n\r\n        &.img__inline {\r\n            float: left;\r\n        }\r\n    }\r\n\r\n    time {\r\n        color: $on-background-faded;\r\n    }\r\n\r\n    .anchor {\r\n        display: block;\r\n        margin-top: -1 * $nav-height;\r\n        height: $nav-height;\r\n        visibility: hidden;\r\n    }\r\n\r\n    // Lists\r\n    ul {\r\n        padding: $li-padding * 2;\r\n    }\r\n\r\n    ol {\r\n        padding: $li-padding * 2;\r\n    }\r\n\r\n    ul > li {\r\n        margin-left: 1rem; \r\n        padding: $li-padding * 2;\r\n        list-style-type: circle;\r\n        list-style-position: outside;\r\n    }\r\n\r\n    ol > li {\r\n        margin-left: 1rem; \r\n        padding: $li-padding * 2;\r\n        list-style-type: decimal;\r\n        list-style-position: outside;\r\n    }\r\n\r\n    // Specifics\r\n    .file-icon-excel--active {\r\n        color: green;\r\n    }\r\n\r\n    .fa-exclamation-triangle {\r\n        color: $error;\r\n    }\r\n\r\n    .feed-item--loading {\r\n        background-color: $background-skeleton;\r\n    }\r\n\r\n    ul.feed {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n\r\n    li.feed-item {\r\n        margin: 0 0 1rem 0;\r\n        padding: 0;\r\n        width: 27.5rem;\r\n        list-style-type: none;\r\n\r\n        p:only-of-type {\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        a {\r\n            text-decoration: none;\r\n            color: inherit;\r\n        }\r\n    }\r\n\r\n    @media only screen and (min-width: $break-md) {\r\n        .content-wrapper {\r\n            width: $break-md;\r\n            padding-left: 32px;\r\n            padding-right: 32px;\r\n        }\r\n\r\n        article.post {\r\n            .post__content {\r\n                font-size: 1.25rem;\r\n                line-height: 1.75;\r\n\r\n                img {\r\n                    max-width: 320px;\r\n                    margin-top: 0.5em;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    @media only screen and (min-width: $break-lg) {\r\n        .content-wrapper {\r\n            width: $break-lg;\r\n            padding-left: 64px;\r\n            padding-right: 64px;\r\n        }\r\n\r\n        article.post {\r\n            .post__content {\r\n                font-size: 1.25rem;\r\n                line-height: 1.75;\r\n\r\n                img {\r\n                    max-width: 320px;\r\n                    margin-top: 0.5em;\r\n                }\r\n            }\r\n            \r\n            .post__outline {\r\n                display: block;\r\n                line-height: 1em;\r\n                margin-top: 1rem;\r\n                width: 100px;\r\n                position: absolute;\r\n                left: 0;\r\n                top: $header-height;\r\n                overflow-x: hidden;\r\n                li {\r\n                    list-style-type: none;\r\n                }\r\n                a {\r\n                    text-decoration: none;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","@mixin theme-color($background-color, $text-color) {\r\n    background-color: $background-color;\r\n    color: $text-color;\r\n}","@import './theme-default';\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_active_link_active_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/active-link/active-link.component */ "./components/active-link/active-link.component.js");
/* harmony import */ var _styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/sass/main.scss */ "./styles/sass/main.scss");
/* harmony import */ var _styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_app.scss */ "./pages/_app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Josh\\repos\\blog\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var THEME_TYPES = {
  DEFAULT: 'app--default'
};

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var theme = THEME_TYPES.DEFAULT;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-166884867-1');
  }, []);
  return __jsx("span", {
    className: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "jwango"), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-166884867-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "container column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("header", {
    className: "main__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/brand_96.png",
    className: "header__logo",
    alt: "JW brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), "ANGO"))), __jsx("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_components_active_link_active_link_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    aliases: ['/posts'],
    activeClassName: "nav-link--active",
    wrapAsLink: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Blog"), __jsx(_components_active_link_active_link_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/tags",
    activeClassName: "nav-link--active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Tags"), __jsx(_components_active_link_active_link_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/solutions",
    activeClassName: "nav-link--active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Solutions"), __jsx(_components_active_link_active_link_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/about",
    activeClassName: "nav-link--active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "About"))), __jsx("main", {
    className: "content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 43
    }
  }))), __jsx("hr", {
    className: "content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("footer", {
    className: "main__footer content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://github.com/jwango/blog-react",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/GitHub-Mark-120px-plus.png",
    alt: "github icon",
    className: "main__footer-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 76
    }
  }), "source code"), __jsx("a", {
    href: "/rss.xml",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/rss-icon.png",
    alt: "rss icon",
    className: "main__footer-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 48
    }
  }), "subscribe")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Got thoughts or questions? Tell ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 65
    }
  }, "me")), " \u2022 Icons powered by ", __jsx("a", {
    href: "https://fontawesome.com/license",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 101
    }
  }, "Font Awesome"), " \u2022 \xA9 2020"))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/_app.scss":
/*!*************************!*\
  !*** ./pages/_app.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./_app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/_app.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./_app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/_app.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./_app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./pages/_app.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/sass/main.scss":
/*!*******************************!*\
  !*** ./styles/sass/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/sass/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/sass/main.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/sass/main.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! C:\Users\Josh\repos\blog\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map