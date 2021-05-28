/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/code/client/pages/profile.js\";\n // const baseurl= 'http://auth_server:5000'\n\nfunction Profile({\n  accessToken,\n  statusCode\n}) {\n  if (statusCode === 401) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"auth error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 33\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: accessToken\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, this);\n}\n\nasync function getServerSideProps({\n  req,\n  res\n}) {\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res);\n  const accessToken = cookies.get('accessToken');\n  const statusCode = cookies.get('statusCode');\n  console.log(accessToken, statusCode);\n  return {\n    props: {\n      'accessToken': accessToken,\n      'statusCode': statusCode\n    } // will be passed to the page component as props\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvcHJvZmlsZS5qcz81YmUyIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJhY2Nlc3NUb2tlbiIsInN0YXR1c0NvZGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJjb29raWVzIiwiQ29va2llcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztDQUNBOztBQUdBLFNBQVNBLE9BQVQsQ0FBaUI7QUFBQ0MsYUFBRDtBQUFhQztBQUFiLENBQWpCLEVBQTJDO0FBQ3pDLE1BQUdBLFVBQVUsS0FBSyxHQUFsQixFQUF1QixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ3ZCLHNCQUFPO0FBQUEsMkJBQ0g7QUFBQSxnQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7O0FBQ00sZUFBZUUsa0JBQWYsQ0FBa0M7QUFBQ0MsS0FBRDtBQUFLQztBQUFMLENBQWxDLEVBQTZDO0FBQ2xELFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxnREFBSixDQUFZSCxHQUFaLEVBQWdCQyxHQUFoQixDQUFoQjtBQUNBLFFBQU1KLFdBQVcsR0FBR0ssT0FBTyxDQUFDRSxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1OLFVBQVUsR0FBR0ksT0FBTyxDQUFDRSxHQUFSLENBQVksWUFBWixDQUFuQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsV0FBWixFQUF3QkMsVUFBeEI7QUFDQSxTQUFPO0FBQ0xTLFNBQUssRUFBRTtBQUFDLHFCQUFjVixXQUFmO0FBQTJCLG9CQUFhQztBQUF4QyxLQURGLENBQ3NEOztBQUR0RCxHQUFQO0FBR0Q7QUFDRCwrREFBZUYsT0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICdjb29raWVzJ1xuLy8gY29uc3QgYmFzZXVybD0gJ2h0dHA6Ly9hdXRoX3NlcnZlcjo1MDAwJ1xuXG5cbmZ1bmN0aW9uIFByb2ZpbGUoe2FjY2Vzc1Rva2VuLHN0YXR1c0NvZGV9KSB7XG4gIGlmKHN0YXR1c0NvZGUgPT09IDQwMSkgcmV0dXJuIDxkaXY+YXV0aCBlcnJvcjwvZGl2PiBcbiAgcmV0dXJuIDxkaXY+XG4gICAgICA8aDE+e2FjY2Vzc1Rva2VufTwvaDE+XG4gICAgPC9kaXY+XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtyZXEscmVzfSkge1xuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLHJlcylcbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBjb29raWVzLmdldCgnYWNjZXNzVG9rZW4nKVxuICBjb25zdCBzdGF0dXNDb2RlID0gY29va2llcy5nZXQoJ3N0YXR1c0NvZGUnKVxuICBjb25zb2xlLmxvZyhhY2Nlc3NUb2tlbixzdGF0dXNDb2RlKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7J2FjY2Vzc1Rva2VuJzphY2Nlc3NUb2tlbiwnc3RhdHVzQ29kZSc6c3RhdHVzQ29kZX0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookies");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/profile.js"));
module.exports = __webpack_exports__;

})();