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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/code/client/pages/callback.js\";\n\n\n\n\n\nasync function callbackHandler() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    code,\n    state\n  } = router.query;\n\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:5000/callback', {\n      code: code,\n      state: state\n    });\n    const {\n      access_token,\n      status_code\n    } = JSON.parse(res);\n    if (status_code == 401) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"Error in authentication\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 32\n    }, this);\n    console.log(access_token);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: access_token\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 12\n    }, this);\n  } catch (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 12\n    }, this);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb2RlIiwic3RhdGUiLCJxdWVyeSIsInJlcyIsImF4aW9zIiwiYWNjZXNzX3Rva2VuIiwic3RhdHVzX2NvZGUiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxlQUFlQSxlQUFmLEdBQWlDO0FBQy9CLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUNDLFFBQUQ7QUFBTUM7QUFBTixNQUFlSCxNQUFNLENBQUNJLEtBQTVCOztBQUNBLE1BQUc7QUFDRCxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsaURBQUEsQ0FBVyxnQ0FBWCxFQUE0QztBQUFDSixVQUFJLEVBQUNBLElBQU47QUFBV0MsV0FBSyxFQUFDQTtBQUFqQixLQUE1QyxDQUFsQjtBQUNBLFVBQU07QUFBQ0ksa0JBQUQ7QUFBY0M7QUFBZCxRQUE2QkMsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEdBQVgsQ0FBbkM7QUFDQSxRQUFHRyxXQUFXLElBQUUsR0FBaEIsRUFBb0Isb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNwQkcsV0FBTyxDQUFDQyxHQUFSLENBQVlMLFlBQVo7QUFDQSx3QkFBTztBQUFBLGdCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNELEdBTkQsQ0FPQSxPQUFNTSxLQUFOLEVBQVk7QUFDVix3QkFBTztBQUFBLGdCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEO0FBRUY7O0FBR0QsK0RBQWVkLGVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYWxsYmFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBDb29raWVzIGZyb20gJ2Nvb2tpZXMnXG5cblxuXG5hc3luYyBmdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHtjb2RlLHN0YXRlfSA9IHJvdXRlci5xdWVyeVxuICB0cnl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NhbGxiYWNrJyx7Y29kZTpjb2RlLHN0YXRlOnN0YXRlfSlcbiAgICBjb25zdCB7YWNjZXNzX3Rva2VuLHN0YXR1c19jb2RlfSA9IEpTT04ucGFyc2UocmVzKVxuICAgIGlmKHN0YXR1c19jb2RlPT00MDEpcmV0dXJuIDxkaXY+RXJyb3IgaW4gYXV0aGVudGljYXRpb248L2Rpdj5cbiAgICBjb25zb2xlLmxvZyhhY2Nlc3NfdG9rZW4pXG4gICAgcmV0dXJuIDxkaXY+e2FjY2Vzc190b2tlbn08L2Rpdj5cbiAgfVxuICBjYXRjaChlcnJvcil7XG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yfTwvZGl2PlxuICB9XG4gIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNhbGxiYWNrSGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

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

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("isomorphic-unfetch");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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