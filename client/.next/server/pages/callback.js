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
exports.id = "pages/callback";
exports.ids = ["pages/callback"];
exports.modules = {

/***/ "./pages/callback.js":
/*!***************************!*\
  !*** ./pages/callback.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/code/client/pages/callback.js\";\n\n\n\n\nfunction callbackHandler({\n  accessToken,\n  statusCode\n}) {\n  if (statusCode == 401) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"please try again...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 29\n  }, this); // res.redirect('/profile')\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: accessToken\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 10\n  }, this);\n}\n\nasync function getServerSideProps(context) {\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(context.req, context.res);\n  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://auth_server:5000/callback', {\n    code: context.query.code,\n    state: context.query.state\n  });\n  const data = res.data;\n  if (data.status_code == 401) return {\n    props: {\n      'accessToken': \"\",\n      'statusCode': data.status_code\n    }\n  };\n  cookies.set('accessToken', data.access_token, {\n    httpOnly: true,\n    sameSite: 'lax'\n  });\n  return {\n    props: {\n      'accessToken': data.access_token,\n      'statusCode': data.status_code\n    } // will be passed to the page component as props\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJhY2Nlc3NUb2tlbiIsInN0YXR1c0NvZGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiY29va2llcyIsIkNvb2tpZXMiLCJyZXEiLCJyZXMiLCJheGlvcyIsImNvZGUiLCJxdWVyeSIsInN0YXRlIiwiZGF0YSIsInN0YXR1c19jb2RlIiwicHJvcHMiLCJzZXQiLCJhY2Nlc3NfdG9rZW4iLCJodHRwT25seSIsInNhbWVTaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxlQUFULENBQXlCO0FBQUNDLGFBQUQ7QUFBYUM7QUFBYixDQUF6QixFQUFtRDtBQUNqRCxNQUFHQSxVQUFVLElBQUUsR0FBZixFQUFtQixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQLENBRDhCLENBRWpEOztBQUNBLHNCQUFPO0FBQUEsY0FBTUQ7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFDTSxlQUFlRSxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTUMsT0FBTyxHQUFHLElBQUlDLGdEQUFKLENBQVlGLE9BQU8sQ0FBQ0csR0FBcEIsRUFBd0JILE9BQU8sQ0FBQ0ksR0FBaEMsQ0FBaEI7QUFDQSxRQUFNQSxHQUFHLEdBQUcsTUFBTUMsaURBQUEsQ0FBVyxrQ0FBWCxFQUNoQjtBQUNFQyxRQUFJLEVBQUNOLE9BQU8sQ0FBQ08sS0FBUixDQUFjRCxJQURyQjtBQUVFRSxTQUFLLEVBQUNSLE9BQU8sQ0FBQ08sS0FBUixDQUFjQztBQUZ0QixHQURnQixDQUFsQjtBQU1BLFFBQU1DLElBQUksR0FBR0wsR0FBRyxDQUFDSyxJQUFqQjtBQUVBLE1BQUdBLElBQUksQ0FBQ0MsV0FBTCxJQUFrQixHQUFyQixFQUF5QixPQUFNO0FBQzdCQyxTQUFLLEVBQUU7QUFBQyxxQkFBYyxFQUFmO0FBQW1CLG9CQUFhRixJQUFJLENBQUNDO0FBQXJDO0FBRHNCLEdBQU47QUFHekJULFNBQU8sQ0FBQ1csR0FBUixDQUFZLGFBQVosRUFBMkJILElBQUksQ0FBQ0ksWUFBaEMsRUFBOEM7QUFDNUNDLFlBQVEsRUFBRSxJQURrQztBQUU1Q0MsWUFBUSxFQUFFO0FBRmtDLEdBQTlDO0FBSUEsU0FBTztBQUNMSixTQUFLLEVBQUU7QUFBQyxxQkFBY0YsSUFBSSxDQUFDSSxZQUFwQjtBQUFrQyxvQkFBYUosSUFBSSxDQUFDQztBQUFwRCxLQURGLENBQ21FOztBQURuRSxHQUFQO0FBR0Q7QUFFRCwrREFBZWQsZUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbGxiYWNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnY29va2llcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCx7IHVzZVN0YXRlICx1c2VFZmZlY3R9ICBmcm9tICdyZWFjdCdcblxuXG5mdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoe2FjY2Vzc1Rva2VuLHN0YXR1c0NvZGV9KSB7XG4gIGlmKHN0YXR1c0NvZGU9PTQwMSlyZXR1cm4gPGRpdj5wbGVhc2UgdHJ5IGFnYWluLi4uPC9kaXY+XG4gIC8vIHJlcy5yZWRpcmVjdCgnL3Byb2ZpbGUnKVxuICByZXR1cm4gPGRpdj57YWNjZXNzVG9rZW59PC9kaXY+XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGNvbnRleHQucmVxLGNvbnRleHQucmVzKVxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vYXV0aF9zZXJ2ZXI6NTAwMC9jYWxsYmFjaycsXG4gICAge1xuICAgICAgY29kZTpjb250ZXh0LnF1ZXJ5LmNvZGUsXG4gICAgICBzdGF0ZTpjb250ZXh0LnF1ZXJ5LnN0YXRlLFxuICAgIH1cbiAgKVxuICBjb25zdCBkYXRhID0gcmVzLmRhdGFcbiAgXG4gIGlmKGRhdGEuc3RhdHVzX2NvZGU9PTQwMSlyZXR1cm57XG4gICAgcHJvcHM6IHsnYWNjZXNzVG9rZW4nOlwiXCIsICdzdGF0dXNDb2RlJzpkYXRhLnN0YXR1c19jb2RlfVxuICB9XG4gIGNvb2tpZXMuc2V0KCdhY2Nlc3NUb2tlbicsIGRhdGEuYWNjZXNzX3Rva2VuLCB7XG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2FtZVNpdGU6ICdsYXgnXG4gIH0pICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeydhY2Nlc3NUb2tlbic6ZGF0YS5hY2Nlc3NfdG9rZW4sICdzdGF0dXNDb2RlJzpkYXRhLnN0YXR1c19jb2RlfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxsYmFja0hhbmRsZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/callback.js"));
module.exports = __webpack_exports__;

})();