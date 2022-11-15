webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./components/error-view/error-view.component.js":
/*!*******************************************************!*\
  !*** ./components/error-view/error-view.component.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon.component */ "./components/icon/icon.component.js");
var _jsxFileName = "C:\\Users\\Josh\\repos\\blog\\components\\error-view\\error-view.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ErrorView(_ref) {
  var error = _ref.error;

  if (!error) {
    return null;
  }

  return __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, __jsx(_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconNames"].EXCLAMATION_TRIANGLE,
    baseline: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 14
    }
  }), "\xA0", error.message);
}

ErrorView.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorView);

/***/ }),

/***/ "./components/icon/icon.component.js":
/*!*******************************************!*\
  !*** ./components/icon/icon.component.js ***!
  \*******************************************/
/*! exports provided: IconNames, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconNames", function() { return IconNames; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.module.scss */ "./components/icon/icon.module.scss");
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _iconMap,
    _jsxFileName = "C:\\Users\\Josh\\repos\\blog\\components\\icon\\icon.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Times = function Times(props) {
  return __jsx("svg", props, __jsx("path", {
    fill: "currentColor",
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
  }));
};

Times.defaultProps = {
  "'data-prefix'": "fas",
  "'data-icon'": "times",
  className: "svg-inline--fa fa-times fa-w-11",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 352 512"
};

var ExclamationTriangle = function ExclamationTriangle(props) {
  return __jsx("svg", props, __jsx("path", {
    fill: "currentColor",
    d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
  }));
};

ExclamationTriangle.defaultProps = {
  "'data-prefix'": "fas",
  "'data-icon'": "exclamation-triangle",
  className: "svg-inline--fa fa-exclamation-triangle fa-w-18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
};

var Excel = function Excel(props) {
  return __jsx("svg", props, __jsx("path", {
    fill: "currentColor",
    d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
  }));
};

Excel.defaultProps = {
  "'data-prefix'": "fas",
  "'data-icon'": "file-excel",
  className: "svg-inline--fa fa-file-excel fa-w-12",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
};

var ExternalLinkAlt = function ExternalLinkAlt(props) {
  return __jsx("svg", props, __jsx("path", {
    fill: "currentColor",
    d: "M432 320h-32a16 16 0 0 0-16 16v112H64V128h144a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16zM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 0 0 0 34L157.67 377a24 24 0 0 0 34 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 0 0-24-24z"
  }));
};

ExternalLinkAlt.defaultProps = {
  "'data-prefix'": "fas",
  "'data-icon'": "external-link-alt",
  className: "svg-inline--fa fa-external-link-alt fa-w-16",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};

var IconNames = {
  TIMES: 'times',
  EXCLAMATION_TRIANGLE: 'exclamation-triangle',
  EXCEL: 'excel',
  EXT_LINK_ALT: 'ext-link-alt'
};
var iconMap = (_iconMap = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_iconMap, IconNames.TIMES, Times), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_iconMap, IconNames.EXCLAMATION_TRIANGLE, ExclamationTriangle), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_iconMap, IconNames.EXCEL, Excel), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_iconMap, IconNames.EXT_LINK_ALT, ExternalLinkAlt), _iconMap);

function Icon(_ref) {
  var name = _ref.name,
      _ref$baseline = _ref.baseline,
      baseline = _ref$baseline === void 0 ? false : _ref$baseline,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  var SelectedComponent = iconMap[name];

  if (!SelectedComponent) {
    return null;
  }

  var classes = className ? className.split(' ') : [];
  classes.push(_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['svg-icon']);

  if (baseline) {
    classes.push(_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['svg-baseline']);
  }

  return __jsx("span", {
    className: classes.join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(SelectedComponent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/icon/icon.module.scss":
/*!******************************************!*\
  !*** ./components/icon/icon.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./icon.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/icon/icon.module.scss");

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
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./icon.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/icon/icon.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./icon.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/icon/icon.module.scss");

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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/icon/icon.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/icon/icon.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".icon_svg-icon__12S81 {\n  display: inline-flex;\n  align-self: center;\n}\n\n.icon_svg-icon__12S81 svg {\n  height: 1em;\n  width: 1em;\n}\n\n.icon_svg-icon__12S81.icon_svg-baseline__32nqL svg {\n  top: 0.125rem;\n  position: relative;\n}", "",{"version":3,"sources":["C:/Users/Josh/repos/blog/components/icon/icon.module.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;EACA,UAAA;AACF;;AAEA;EACE,aAAA;EACA,kBAAA;AACF","file":"icon.module.scss","sourcesContent":[".svg-icon {\r\n  display: inline-flex;\r\n  align-self: center;\r\n}\r\n\r\n.svg-icon svg {\r\n  height: 1em;\r\n  width: 1em;\r\n}\r\n\r\n.svg-icon.svg-baseline svg {\r\n  top: .125rem;\r\n  position: relative;\r\n}"]}]);
// Exports
exports.locals = {
	"svg-icon": "icon_svg-icon__12S81",
	"svg-baseline": "icon_svg-baseline__32nqL"
};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CJosh%5Crepos%5Cblog%5Cpages%5C_error.js!./":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CJosh%5Crepos%5Cblog%5Cpages%5C_error.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_error_view_error_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/error-view/error-view.component */ "./components/error-view/error-view.component.js");
var _jsxFileName = "C:\\Users\\Josh\\repos\\blog\\pages\\_error.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Error() {
  var error = {
    message: 'Oops something went wrong.'
  };
  return __jsx(_components_error_view_error_view_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    error: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 1:
/*!*****************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CJosh%5Crepos%5Cblog%5Cpages%5C_error.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CJosh%5Crepos%5Cblog%5Cpages%5C_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CJosh%5Crepos%5Cblog%5Cpages%5C_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.4243f4802081b00910fb.hot-update.js.map