module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/mainLayout.js":
/*!*****************************************!*\
  !*** ./components/Layout/mainLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar/index */ "./components/Navbar/index.js");



var main = function main(props) {
  if (props.load) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "loading...");
  }

  if (props.data.length == 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "icon2",
      src: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "phoneScreen"
    }, "No Posts Found!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_index__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n                    \n                    html{\n                      height:100%;\n                      width:100%;\n                    }\n                    \n                    @import url('https://fonts.googleapis.com/css?family=Roboto');\n                    \n                    *{\n                      font-family: 'Roboto', sans-serif;\n                    }\n    \n                    .mainContainer {\n                      width: 400px;\n                      background-color: white;\n                      display: flex;\n                      flex-direction: column;\n                    }\n    \n                    .titlePrice{\n                      padding-left: 0.5%;\n                      color: white;\n                    }\n                    .phoneScreen{\n                      height: 523px;\n                      overflow: scroll;\n                      overflow-x: hidden;\n                      display: flex;\n                      flex-direction:column;\n                      \n                    }\n                    \n                    .subBody{\n                      background: black;\n                    }\n                    .icon1{\n                      width:8%;\n                    }\n                    .icon2{\n                      width:25%;\n                      margin: auto;\n                    }\n                    .icon3{\n                      width:8%;\n                    }\n                    .maindisplay{\n                      border-bottom: 2px solid #a4a4a496;\n                      display:flex;\n                      flex-direction:column;\n                      height:100%;\n                      box-shadow: 0 2px 5px 0px #ddd;\n                    }\n                    .namedisplay{\n                      display: flex;\n                      align-items:center;\n                      padding:0px 10px;\n                      justify-content:space-between;\n                    }\n                    .name{\n                      display: flex;\n                      justify-content:flex-start;\n                    }\n    \n                    .mainName{\n                      display: flex;\n                      justify-content:flex-start;\n                      padding-top: 4px;\n                    padding-bottom: 4px;\n                    }\n                    \n                    \n                    .pfp{\n                      border-collapse: separate;\n                      border-radius:50%;\n                      width:10%;\n                      height:10%;\n                    \n                    }\n                    .username{\n                      padding-left:5px;\n                      font-weight:bold;\n                      font-size:0.8em;\n                    }\n                    .title{\n                      font-size: 1.0em;\n                      \n                      \n                    }\n                    .icon3circ{\n                      width:5%;\n                      \n                    }\n                    .imagepost{\n                      text-align: center;\n                      \n                    }\n                    .actualimage{\n                      max-height: 300px;\n                      \n                    }\n                    .likesrow{\n                      display:flex;\n                      flex-direction:row;\n                      align-items:center;\n                      padding: 5px 5px;\n                    }\n                    .icon5{\n                      width:8%;\n                      padding-right:5px;\n                    }\n                    .icon6{\n                      width:8%;\n                      padding-right:5px;\n                    }\n                    .icon7{\n                      width:8%;\n                    }\n                    .icon8{\n                      width: 22px;\n                    }\n                    .likescounter{\n                      margin-top: -1%;\n                      display: flex;\n                      align-items:center;\n                      padding-right:10px;\n                    }\n                    \n                    .likesdisplay{\n                      padding-top: 1%;\n                      width: 100%;\n                      font-size:1.0em;\n                      margin-left:5px;\n                      font-weight:bold;\n                    }\n    \n                    .likeButton{\n                      text-align: right;\n                      border: none;\n                      background: transparent;\n                    } \n                    \n                    .bold{\n                      font-weight:bold;\n                    }\n                    .priceContainer{\n                      padding-bottom: 5px;\n                      margin-top: -12px;\n                      font-size: 0.7em;\n                      margin-left: 10px;\n                    }\n                    \n                    .price{\n                      font-weight: bold;\n                      font-size: 1.5em;\n                    }\n                    .captioncounter{\n                      display:flex;\n                      align-items:center;\n                      padding-right:10px;\n                      margin-top:-15px;\n                    }\n                    .captiondisplay{\n                      font-size: 0.7em;\n                    }\n                    .sub2 {\n                      margin-left:10px;\n                    }\n                    .commentcounter{\n                      display:flex;\n                      align-items:center;\n                      padding-right:10px;\n                      margin-top:-15px;\n                    }\n                    .commentdisplay{\n                      font-size: 0.7em;\n                      color: grey;\n                    }\n    \n                    .header{\n                      display:flex;\n                      align-items:flex-start;\n                      flex-direction: row;;\n                      padding:10px 10px;\n                      justify-content:space-between;\n                      background-color: #eaeaea;\n                      box-shadow:0 2px 5px 0px #ddd;\n                    }\n    \n                    .footer{\n                      display:flex;\n                      align-items:flex-end;\n                      padding:10px 10px;\n                      justify-content:space-between;\n                      background-color: #eaeaea;\n                      box-shadow:0 -2px 5px 0px #ddd;\n                    \n                    }\n                    \n                    .bottomicons{\n                      opacity: 0.2;\n                      width:8%;\n                    }\n                    .bottomicon1{\n                      opacity:1;\n                      width:20px;\n                    }\n      \n      \n          \n          \n    "));
  }

  var dataList = props.data.map(function (test) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: test.id,
      className: "maindisplay"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "namedisplay"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainName"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: test.userImage,
      width: "10%",
      height: "10%",
      className: "pfp"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "username"
    }, test.userName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "icon3circ",
      src: "https://image.flaticon.com/icons/svg/149/149947.svg"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subBody"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "imagepost"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "actualimage",
      src: test.coverImage
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "titlePrice"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "namedisplay"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "name"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "title"
    }, test.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        return props.button(test.id, test.userName, test.userImage, test.coverImage, test.title, test.price, test.description, test.likes, test.tags);
      }
    }, props.butStatus)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "priceContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "price"
    }, "AED ", test.price)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sub2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "likescounter"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "icon3circ",
      src: "https://image.flaticon.com/icons/svg/60/60993.svg"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "likesdisplay"
    }, test.likes, " Likes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "captioncounter"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "captiondisplay"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bold"
    }), test.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "captioncounter"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "captiondisplay"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bold"
    }), test.tags)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "commentcounter"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "commentdisplay"
    }, " View all 200 comments "))));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mainContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "icon2",
    src: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "phoneScreen"
  }, dataList), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_index__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n                \n                html{\n                  height:100%;\n                  width:100%;\n                }\n                \n                @import url('https://fonts.googleapis.com/css?family=Roboto');\n                \n                *{\n                  font-family: 'Roboto', sans-serif;\n                }\n\n                .mainContainer {\n                  width: 400px;\n                  background-color: white;\n                  display: flex;\n                  flex-direction: column;\n                }\n\n                .titlePrice{\n                  padding-left: 0.5%;\n                  color: white;\n                }\n                .phoneScreen{\n                  height: 523px;\n                  overflow: scroll;\n                  overflow-x: hidden;\n                  display: flex;\n                  flex-direction:column;\n                  \n                }\n                \n                .subBody{\n                  background: black;\n                }\n                .icon1{\n                  width:8%;\n                }\n                .icon2{\n                  width:25%;\n                  margin: auto;\n                }\n                .icon3{\n                  width:8%;\n                }\n                .maindisplay{\n                  border-bottom: 2px solid #a4a4a496;\n                  display:flex;\n                  flex-direction:column;\n                  height:100%;\n                  box-shadow: 0 2px 5px 0px #ddd;\n                }\n                .namedisplay{\n                  display: flex;\n                  align-items:center;\n                  padding:0px 10px;\n                  justify-content:space-between;\n                }\n                .name{\n                  display: flex;\n                  justify-content:flex-start;\n                }\n\n                .mainName{\n                  display: flex;\n                  justify-content:flex-start;\n                  padding-top: 4px;\n                padding-bottom: 4px;\n                }\n                \n                \n                .pfp{\n                  border-collapse: separate;\n                  border-radius:50%;\n                  width:10%;\n                  height:10%;\n                \n                }\n                .username{\n                  padding-left:5px;\n                  font-weight:bold;\n                  font-size:0.8em;\n                }\n                .title{\n                  font-size: 1.0em;\n                  \n                  \n                }\n                .icon3circ{\n                  width:5%;\n                  \n                }\n                .imagepost{\n                  text-align: center;\n                  \n                }\n                .actualimage{\n                  max-height: 300px;\n                  \n                }\n                .likesrow{\n                  display:flex;\n                  flex-direction:row;\n                  align-items:center;\n                  padding: 5px 5px;\n                }\n                .icon5{\n                  width:8%;\n                  padding-right:5px;\n                }\n                .icon6{\n                  width:8%;\n                  padding-right:5px;\n                }\n                .icon7{\n                  width:8%;\n                }\n                .icon8{\n                  width: 22px;\n                }\n                .likescounter{\n                  margin-top: -1%;\n                  display: flex;\n                  align-items:center;\n                  padding-right:10px;\n                }\n                \n                .likesdisplay{\n                  padding-top: 1%;\n                  width: 100%;\n                  font-size:1.0em;\n                  margin-left:5px;\n                  font-weight:bold;\n                }\n\n                .likeButton{\n                  text-align: right;\n                  border: none;\n                  background: transparent;\n                } \n                \n                .bold{\n                  font-weight:bold;\n                }\n                .priceContainer{\n                  padding-bottom: 5px;\n                  margin-top: -12px;\n                  font-size: 0.7em;\n                  margin-left: 10px;\n                }\n                \n                .price{\n                  font-weight: bold;\n                  font-size: 1.5em;\n                }\n                .captioncounter{\n                  display:flex;\n                  align-items:center;\n                  padding-right:10px;\n                  margin-top:-15px;\n                }\n                .captiondisplay{\n                  font-size: 0.7em;\n                }\n                .sub2 {\n                  margin-left:10px;\n                }\n                .commentcounter{\n                  display:flex;\n                  align-items:center;\n                  padding-right:10px;\n                  margin-top:-15px;\n                }\n                .commentdisplay{\n                  font-size: 0.7em;\n                  color: grey;\n                }\n\n                .header{\n                  display:flex;\n                  align-items:flex-start;\n                  flex-direction: row;;\n                  padding:10px 10px;\n                  justify-content:space-between;\n                  background-color: #eaeaea;\n                  box-shadow:0 2px 5px 0px #ddd;\n                }\n\n                .footer{\n                  display:flex;\n                  align-items:flex-end;\n                  padding:10px 10px;\n                  justify-content:space-between;\n                  background-color: #eaeaea;\n                  box-shadow:0 -2px 5px 0px #ddd;\n                \n                }\n                \n                .bottomicons{\n                  opacity: 0.2;\n                  width:8%;\n                }\n                .bottomicon1{\n                  opacity:1;\n                  width:20px;\n                }\n  \n  \n      \n      \n"));
};

/* harmony default export */ __webpack_exports__["default"] = (main);

/***/ }),

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_6__);








var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).call(this, props));
    _this.props = props;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        className: "likeButton"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "bottomicon1",
        src: "https://image.flaticon.com/icons/svg/271/271218.svg"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        className: "likeButton"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "bottomicon1",
        src: "https://image.flaticon.com/icons/svg/20/20176.svg"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/favourites",
        className: "likeButton"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "bottomicon1",
        src: "https://image.flaticon.com/icons/svg/60/60993.svg"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", null, "\n                .footer{\n                    display:flex;\n                    align-items:flex-end;\n                    padding:10px 10px;\n                    justify-content:space-between;\n                    background-color:#F57280;\n                    box-shadow:0 -2px 5px 0px #ddd;\n                  \n                  }\n\n                  .bottomicon1{\n                    opacity:1;\n                    width:20px;\n                  }\n\n                  .likeButton{\n                    text-align: right;\n                    border: none;\n                    background: transparent;\n                  } \n\n            "));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_mainLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/mainLayout */ "./components/Layout/mainLayout.js");










var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.state = {
      data: [{
        id: 1,
        userName: "appleInc",
        userImage: "https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png",
        coverImage: "https://www.att.com/catalog/en/idse/Apple/Apple%20Watch%20Series%204%20-%2040mm/Space%20Gray%20Aluminum%20-%20Black%20Sport%20Band-hero-zoom.png",
        title: "Apple Watch 4",
        price: 400,
        description: "Space Black Stainless Steel Case with Black Sport Band",
        likes: 300,
        tags: "#Apple #AppleWatch #luxury #fitness"
      }, {
        id: 2,
        userName: "microsoft",
        userImage: "https://cdn3.iconfinder.com/data/icons/picons-social/57/57-windows-512.png",
        coverImage: "https://c.s-microsoft.com/en-us/CMSImages/SurfaceHome_HL_ImagePanel_1_V4.png?version=64622b0d-b501-b3e0-08d1-1038b35a9e3c",
        title: "Surface Pro 6",
        price: 800,
        description: "Stand out from the ordinary",
        likes: 200,
        tags: "#microsoft #surfacePro #tablet #notebook"
      }],
      loading: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "favourited",
    value: function favourited(id, userName, userImage, coverImage, title, price, description, likes, tags) {
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('http://localhost:3000/favourites', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          id: id,
          userName: userName,
          userImage: userImage,
          coverImage: coverImage,
          title: title,
          price: price,
          description: description,
          likes: likes + 1,
          tags: tags
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout_mainLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: this.state.data,
        button: this.favourited,
        load: this.state.loading,
        butStatus: "Favourite"
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Extreme\Desktop\work\client\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map