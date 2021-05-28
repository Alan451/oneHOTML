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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/code/client/pages/profile.js\";\n\n // const baseurl= 'http://auth_server:5000'\n\nfunction Profile({\n  userData,\n  statusCode\n}) {\n  if (statusCode === 401) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"auth error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 33\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: userData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, this);\n}\n\nasync function getServerSideProps({\n  req,\n  res\n}) {\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res);\n  const accessToken = cookies.get('accessToken');\n  const statusCode = cookies.get('statusCode');\n  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://auth_server:5000/api/userinfo', {\n    headers: {\n      'Authorization': `Bearer ${accessToken}`\n    }\n  });\n  return {\n    props: {\n      'userData': response.data.userData.name,\n      'statusCode': statusCode\n    } // will be passed to the page component as props\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvcHJvZmlsZS5qcz81YmUyIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VyRGF0YSIsInN0YXR1c0NvZGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJyZXMiLCJjb29raWVzIiwiQ29va2llcyIsImFjY2Vzc1Rva2VuIiwiZ2V0IiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJwcm9wcyIsImRhdGEiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUdBLFNBQVNBLE9BQVQsQ0FBaUI7QUFBQ0MsVUFBRDtBQUFVQztBQUFWLENBQWpCLEVBQXdDO0FBQ3RDLE1BQUdBLFVBQVUsS0FBSyxHQUFsQixFQUF1QixvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ3ZCLHNCQUFPO0FBQUEsMkJBQ0g7QUFBQSxnQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7O0FBQ00sZUFBZUUsa0JBQWYsQ0FBa0M7QUFBQ0MsS0FBRDtBQUFLQztBQUFMLENBQWxDLEVBQTZDO0FBQ2xELFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxnREFBSixDQUFZSCxHQUFaLEVBQWdCQyxHQUFoQixDQUFoQjtBQUNBLFFBQU1HLFdBQVcsR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksYUFBWixDQUFwQjtBQUNBLFFBQU1QLFVBQVUsR0FBR0ksT0FBTyxDQUFDRyxHQUFSLENBQVksWUFBWixDQUFuQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxnREFBQSxDQUNyQixzQ0FEcUIsRUFFckI7QUFDRUMsV0FBTyxFQUFFO0FBQ1AsdUJBQW1CLFVBQVNKLFdBQVk7QUFEakM7QUFEWCxHQUZxQixDQUF2QjtBQVFBLFNBQU87QUFDTEssU0FBSyxFQUFFO0FBQUMsa0JBQVdILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjYixRQUFkLENBQXVCYyxJQUFuQztBQUF3QyxvQkFBYWI7QUFBckQsS0FERixDQUNtRTs7QUFEbkUsR0FBUDtBQUdEO0FBQ0QsK0RBQWVGLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnY29va2llcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbi8vIGNvbnN0IGJhc2V1cmw9ICdodHRwOi8vYXV0aF9zZXJ2ZXI6NTAwMCdcblxuXG5mdW5jdGlvbiBQcm9maWxlKHt1c2VyRGF0YSxzdGF0dXNDb2RlfSkge1xuICBpZihzdGF0dXNDb2RlID09PSA0MDEpIHJldHVybiA8ZGl2PmF1dGggZXJyb3I8L2Rpdj4gXG4gIHJldHVybiA8ZGl2PlxuICAgICAgPGgxPnt1c2VyRGF0YX08L2gxPlxuICAgIDwvZGl2PlxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cmVxLHJlc30pIHtcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHJlcSxyZXMpXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gY29va2llcy5nZXQoJ2FjY2Vzc1Rva2VuJylcbiAgY29uc3Qgc3RhdHVzQ29kZSA9IGNvb2tpZXMuZ2V0KCdzdGF0dXNDb2RlJylcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgJ2h0dHA6Ly9hdXRoX3NlcnZlcjo1MDAwL2FwaS91c2VyaW5mbycsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbicgOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgIH1cbiAgICB9XG4gIClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyd1c2VyRGF0YSc6cmVzcG9uc2UuZGF0YS51c2VyRGF0YS5uYW1lLCdzdGF0dXNDb2RlJzpzdGF0dXNDb2RlfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

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