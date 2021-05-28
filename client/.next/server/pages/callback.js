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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/code/client/pages/callback.js\";\n\n\n\nfunction callbackHandler({\n  accessToken,\n  statusCode\n}) {\n  if (statusCode == 401) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"please try again...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 29\n  }, this); // res.redirect('/profile')\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: accessToken\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, this);\n}\n\nasync function getServerSideProps(context) {\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(context.req, context.res);\n  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://auth_server:5000/callback', {\n    code: context.query.code,\n    state: context.query.state\n  });\n  const data = res.data;\n  if (data.status_code == 401) return {\n    props: {\n      'accessToken': \"\",\n      'statusCode': data.status_code\n    }\n  };\n  cookies.set('accessToken', data.access_token, {\n    httpOnly: true,\n    sameSite: 'lax'\n  });\n  cookies.set('statusCode', data.status_code, {\n    httpOnly: true,\n    sameSite: 'lax'\n  });\n  return {\n    props: {\n      'accessToken': data.access_token,\n      'statusCode': data.status_code\n    } // will be passed to the page component as props\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJhY2Nlc3NUb2tlbiIsInN0YXR1c0NvZGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiY29va2llcyIsIkNvb2tpZXMiLCJyZXEiLCJyZXMiLCJheGlvcyIsImNvZGUiLCJxdWVyeSIsInN0YXRlIiwiZGF0YSIsInN0YXR1c19jb2RlIiwicHJvcHMiLCJzZXQiLCJhY2Nlc3NfdG9rZW4iLCJodHRwT25seSIsInNhbWVTaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUI7QUFBQ0MsYUFBRDtBQUFhQztBQUFiLENBQXpCLEVBQW1EO0FBQ2pELE1BQUdBLFVBQVUsSUFBRSxHQUFmLEVBQW1CLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVAsQ0FEOEIsQ0FFakQ7O0FBQ0Esc0JBQU87QUFBQSxjQUFNRDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUNNLGVBQWVFLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNQyxPQUFPLEdBQUcsSUFBSUMsZ0RBQUosQ0FBWUYsT0FBTyxDQUFDRyxHQUFwQixFQUF3QkgsT0FBTyxDQUFDSSxHQUFoQyxDQUFoQjtBQUNBLFFBQU1BLEdBQUcsR0FBRyxNQUFNQyxpREFBQSxDQUFXLGtDQUFYLEVBQ2hCO0FBQ0VDLFFBQUksRUFBQ04sT0FBTyxDQUFDTyxLQUFSLENBQWNELElBRHJCO0FBRUVFLFNBQUssRUFBQ1IsT0FBTyxDQUFDTyxLQUFSLENBQWNDO0FBRnRCLEdBRGdCLENBQWxCO0FBTUEsUUFBTUMsSUFBSSxHQUFHTCxHQUFHLENBQUNLLElBQWpCO0FBRUEsTUFBR0EsSUFBSSxDQUFDQyxXQUFMLElBQWtCLEdBQXJCLEVBQXlCLE9BQU87QUFDOUJDLFNBQUssRUFBRTtBQUFDLHFCQUFjLEVBQWY7QUFBbUIsb0JBQWFGLElBQUksQ0FBQ0M7QUFBckM7QUFEdUIsR0FBUDtBQUd6QlQsU0FBTyxDQUFDVyxHQUFSLENBQVksYUFBWixFQUEyQkgsSUFBSSxDQUFDSSxZQUFoQyxFQUE4QztBQUM1Q0MsWUFBUSxFQUFFLElBRGtDO0FBRTVDQyxZQUFRLEVBQUU7QUFGa0MsR0FBOUM7QUFJQWQsU0FBTyxDQUFDVyxHQUFSLENBQVksWUFBWixFQUEwQkgsSUFBSSxDQUFDQyxXQUEvQixFQUE0QztBQUMxQ0ksWUFBUSxFQUFFLElBRGdDO0FBRTFDQyxZQUFRLEVBQUU7QUFGZ0MsR0FBNUM7QUFJQSxTQUFPO0FBQ0xKLFNBQUssRUFBRTtBQUFDLHFCQUFjRixJQUFJLENBQUNJLFlBQXBCO0FBQWtDLG9CQUFhSixJQUFJLENBQUNDO0FBQXBELEtBREYsQ0FDbUU7O0FBRG5FLEdBQVA7QUFHRDtBQUVELCtEQUFlZCxlQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FsbGJhY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICdjb29raWVzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5mdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoe2FjY2Vzc1Rva2VuLHN0YXR1c0NvZGV9KSB7XG4gIGlmKHN0YXR1c0NvZGU9PTQwMSlyZXR1cm4gPGRpdj5wbGVhc2UgdHJ5IGFnYWluLi4uPC9kaXY+XG4gIC8vIHJlcy5yZWRpcmVjdCgnL3Byb2ZpbGUnKVxuICByZXR1cm4gPGRpdj57YWNjZXNzVG9rZW59PC9kaXY+XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGNvbnRleHQucmVxLGNvbnRleHQucmVzKVxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vYXV0aF9zZXJ2ZXI6NTAwMC9jYWxsYmFjaycsXG4gICAge1xuICAgICAgY29kZTpjb250ZXh0LnF1ZXJ5LmNvZGUsXG4gICAgICBzdGF0ZTpjb250ZXh0LnF1ZXJ5LnN0YXRlLFxuICAgIH1cbiAgKVxuICBjb25zdCBkYXRhID0gcmVzLmRhdGFcbiAgXG4gIGlmKGRhdGEuc3RhdHVzX2NvZGU9PTQwMSlyZXR1cm4ge1xuICAgIHByb3BzOiB7J2FjY2Vzc1Rva2VuJzpcIlwiLCAnc3RhdHVzQ29kZSc6ZGF0YS5zdGF0dXNfY29kZX1cbiAgfVxuICBjb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCBkYXRhLmFjY2Vzc190b2tlbiwge1xuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiAnbGF4J1xuICB9KVxuICBjb29raWVzLnNldCgnc3RhdHVzQ29kZScsIGRhdGEuc3RhdHVzX2NvZGUsIHtcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzYW1lU2l0ZTogJ2xheCdcbiAgfSkgIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7J2FjY2Vzc1Rva2VuJzpkYXRhLmFjY2Vzc190b2tlbiwgJ3N0YXR1c0NvZGUnOmRhdGEuc3RhdHVzX2NvZGV9IC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGxiYWNrSGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/callback.js"));
module.exports = __webpack_exports__;

})();