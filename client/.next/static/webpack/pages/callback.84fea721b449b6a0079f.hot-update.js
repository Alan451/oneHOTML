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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/code/client/pages/callback.js\",\n    _s = $RefreshSig$();\n\n // import { useEffect } from 'react'\n\n\n\n\nfunction callbackHandler() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      accessToken = _useState[0],\n      setAccessToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      statusCode = _useState2[0],\n      setStatusCode = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      isAuthenticated = _useState3[0],\n      setAuthenticated = _useState3[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (!router.isReady) return;\n    console.log(rot);\n    axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://auth_server:5000/callback', {\n      code: router.query.code,\n      state: router.query.state\n    }).then(function (response) {\n      console.log(\"1\", response.data.access_token);\n      setStatusCode(response.data.status_code);\n      setAccessToken(response.data.access_token);\n      setAuthenticated(true);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: accessToken\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 10\n  }, this);\n} // useEffect(()=>{\n//   callbackHandler.getInitialProps = ({query}) => {\n//     return {query}\n//   }\n// },[])\n\n\n_s(callbackHandler, \"hYeIvA3sXZ0Mjczu8TiV/XRzFnk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJ1c2VTdGF0ZSIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJzdGF0dXNDb2RlIiwic2V0U3RhdHVzQ29kZSIsImlzQXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJpc1JlYWR5IiwiY29uc29sZSIsImxvZyIsInJvdCIsImF4aW9zIiwiY29kZSIsInF1ZXJ5Iiwic3RhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiYWNjZXNzX3Rva2VuIiwic3RhdHVzX2NvZGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBQUEsa0JBQ2FDLCtDQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ2xCQyxXQURrQjtBQUFBLE1BQ0xDLGNBREs7O0FBQUEsbUJBRVdGLCtDQUFRLENBQUMsRUFBRCxDQUZuQjtBQUFBLE1BRWxCRyxVQUZrQjtBQUFBLE1BRU5DLGFBRk07O0FBQUEsbUJBR21CSiwrQ0FBUSxDQUFDLEtBQUQsQ0FIM0I7QUFBQSxNQUdsQkssZUFIa0I7QUFBQSxNQUdEQyxnQkFIQzs7QUFJekIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLFlBQUk7QUFDWixRQUFHLENBQUNGLE1BQU0sQ0FBQ0csT0FBWCxFQUFvQjtBQUNwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDQUMscURBQUEsQ0FBVyxrQ0FBWCxFQUNFO0FBQ0VDLFVBQUksRUFBQ1IsTUFBTSxDQUFDUyxLQUFQLENBQWFELElBRHBCO0FBRUVFLFdBQUssRUFBQ1YsTUFBTSxDQUFDUyxLQUFQLENBQWFDO0FBRnJCLEtBREYsRUFLRUMsSUFMRixDQU1FLFVBQVNDLFFBQVQsRUFBa0I7QUFDaEJSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBZ0JPLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUE5QjtBQUNBakIsbUJBQWEsQ0FBQ2UsUUFBUSxDQUFDQyxJQUFULENBQWNFLFdBQWYsQ0FBYjtBQUNBcEIsb0JBQWMsQ0FBQ2lCLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxZQUFmLENBQWQ7QUFDQWYsc0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNELEtBWEgsV0FhRSxVQUFTaUIsS0FBVCxFQUFlO0FBQ2JaLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVyxLQUFaO0FBQ0QsS0FmSDtBQWtCRCxHQXJCUSxFQXFCUCxFQXJCTyxDQUFUO0FBd0JBLHNCQUFPO0FBQUEsY0FBTXRCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXBDU0YsZTtVQUlRUyxrRDs7O0FBaUNqQiwrREFBZVQsZUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbGxiYWNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCx7IHVzZVN0YXRlICx1c2VFZmZlY3R9ICBmcm9tICdyZWFjdCdcblxuXG5mdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoKSB7XG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXNDb2RlLCBzZXRTdGF0dXNDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZighcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZyhyb3QpXG4gICAgYXhpb3MucG9zdCgnaHR0cDovL2F1dGhfc2VydmVyOjUwMDAvY2FsbGJhY2snLFxuICAgICAge1xuICAgICAgICBjb2RlOnJvdXRlci5xdWVyeS5jb2RlLFxuICAgICAgICBzdGF0ZTpyb3V0ZXIucXVlcnkuc3RhdGUsXG4gICAgICB9XG4gICAgKS50aGVuKFxuICAgICAgZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICBjb25zb2xlLmxvZyhcIjFcIixyZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbilcbiAgICAgICAgc2V0U3RhdHVzQ29kZShyZXNwb25zZS5kYXRhLnN0YXR1c19jb2RlKVxuICAgICAgICBzZXRBY2Nlc3NUb2tlbihyZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbilcbiAgICAgICAgc2V0QXV0aGVudGljYXRlZCh0cnVlKVxuICAgICAgfVxuICAgICkuY2F0Y2goXG4gICAgICBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgIClcbiAgXG4gIH0sW11cbiAgKVxuICBcbiAgcmV0dXJuIDxkaXY+e2FjY2Vzc1Rva2VufTwvZGl2PlxufVxuLy8gdXNlRWZmZWN0KCgpPT57XG4vLyAgIGNhbGxiYWNrSGFuZGxlci5nZXRJbml0aWFsUHJvcHMgPSAoe3F1ZXJ5fSkgPT4ge1xuLy8gICAgIHJldHVybiB7cXVlcnl9XG4vLyAgIH1cbi8vIH0sW10pXG5leHBvcnQgZGVmYXVsdCBjYWxsYmFja0hhbmRsZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ })

});