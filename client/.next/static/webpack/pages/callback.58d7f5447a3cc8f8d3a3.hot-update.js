/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/callback",{

/***/ "./pages/callback.js":
/*!***************************!*\
  !*** ./pages/callback.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _code_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_code_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _code_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/code/client/pages/callback.js\";\n // import { useEffect } from 'react'\n\n\n\n\nfunction callbackHandler(_ref) {\n  var props = _ref.props;\n  console.log(props.data); // const [accessToken, setAccessToken] = useState(\"\");\n  // const [statusCode, setStatusCode] = useState(\"\");\n  // const [isAuthenticated, setAuthenticated] = useState(false);\n  // const router = useRouter()\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: \"accessToken\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 10\n  }, this);\n} //  const res = await axios.post('http://auth_server:5000/callback',\n// {\n//   code:query.code,\n//   state:query.state,\n// }\n// )\n\n\ncallbackHandler.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = (0,_code_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_code_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {\n    var query;\n    return _code_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            return _context.abrupt(\"return\", {\n              data: res\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxlQUFULE9BQWtDO0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQ2hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxJQUFsQixFQURnQyxDQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FKLGVBQWUsQ0FBQ0ssZUFBaEI7QUFBQSwwT0FBa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLGlCQUFSLFNBQVFBLEtBQVI7QUFBQSw2Q0FFekI7QUFBQ0Ysa0JBQUksRUFBRUc7QUFBUCxhQUZ5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFsQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQSwrREFBZVAsZUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbGxiYWNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCx7IHVzZVN0YXRlICx1c2VFZmZlY3R9ICBmcm9tICdyZWFjdCdcblxuXG5mdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoe3Byb3BzfSkge1xuICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKVxuICAvLyBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCBbc3RhdHVzQ29kZSwgc2V0U3RhdHVzQ29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gY29uc3QgW2lzQXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIFxuICByZXR1cm4gPGRpdj5hY2Nlc3NUb2tlbjwvZGl2PlxufVxuLy8gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9hdXRoX3NlcnZlcjo1MDAwL2NhbGxiYWNrJyxcbi8vIHtcbi8vICAgY29kZTpxdWVyeS5jb2RlLFxuLy8gICBzdGF0ZTpxdWVyeS5zdGF0ZSxcbi8vIH1cbi8vIClcbmNhbGxiYWNrSGFuZGxlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSkgPT4ge1xuIFxuICByZXR1cm4ge2RhdGE6IHJlc31cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FsbGJhY2tIYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ })

});