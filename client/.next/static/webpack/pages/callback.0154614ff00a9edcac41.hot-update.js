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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n // import { useEffect } from 'react'\n\n\n\n\nfunction callbackHandler(_ref) {\n  _s();\n\n  var query = _ref.query;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      accessToken = _useState[0],\n      setAccessToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      statusCode = _useState2[0],\n      setStatusCode = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isAuthenticated = _useState3[0],\n      setAuthenticated = _useState3[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  axios__WEBPACK_IMPORTED_MODULE_1___default().post('http://auth_server:5000/callback', {\n    code: router.query.code,\n    state: router.query.state\n  }).then(function (response) {\n    // console.log(\"1\",response.data.access_token)\n    setStatusCode(response.data.status_code);\n    setAccessToken(response.data.access_token);\n    setAuthenticated(true);\n  })[\"catch\"](function (error) {\n    console.log(error);\n  }); // return <div>{accessToken}</div>\n} // useEffect(()=>{\n\n\n_s(callbackHandler, \"9z4BuAK47uAFMA2vkm7nOoiVnLY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\ncallbackHandler.getInitialProps = function (_ref2) {\n  var query = _ref2.query;\n  return {\n    query: query\n  };\n}; // },[])\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJxdWVyeSIsInVzZVN0YXRlIiwiYWNjZXNzVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsInN0YXR1c0NvZGUiLCJzZXRTdGF0dXNDb2RlIiwiaXNBdXRoZW50aWNhdGVkIiwic2V0QXV0aGVudGljYXRlZCIsInJvdXRlciIsInVzZVJvdXRlciIsImF4aW9zIiwiY29kZSIsInN0YXRlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1c19jb2RlIiwiYWNjZXNzX3Rva2VuIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxlQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFROztBQUFBLGtCQUNNQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ3pCQyxXQUR5QjtBQUFBLE1BQ1pDLGNBRFk7O0FBQUEsbUJBRUlGLCtDQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFekJHLFVBRnlCO0FBQUEsTUFFYkMsYUFGYTs7QUFBQSxtQkFHWUosK0NBQVEsQ0FBQyxLQUFELENBSHBCO0FBQUEsTUFHekJLLGVBSHlCO0FBQUEsTUFHUkMsZ0JBSFE7O0FBSWhDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsbURBQUEsQ0FBVyxrQ0FBWCxFQUNFO0FBQ0VDLFFBQUksRUFBQ0gsTUFBTSxDQUFDUixLQUFQLENBQWFXLElBRHBCO0FBRUVDLFNBQUssRUFBQ0osTUFBTSxDQUFDUixLQUFQLENBQWFZO0FBRnJCLEdBREYsRUFLRUMsSUFMRixDQU1FLFVBQVNDLFFBQVQsRUFBa0I7QUFDaEI7QUFDQVQsaUJBQWEsQ0FBQ1MsUUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWYsQ0FBYjtBQUNBYixrQkFBYyxDQUFDVyxRQUFRLENBQUNDLElBQVQsQ0FBY0UsWUFBZixDQUFkO0FBQ0FWLG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRCxHQVhILFdBYUUsVUFBU1csS0FBVCxFQUFlO0FBQ2JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsR0FmSCxFQUxnQyxDQXNCaEM7QUFDRCxDLENBQ0Q7OztHQXhCU25CLGU7VUFJUVUsa0Q7OztBQXFCZlYsZUFBZSxDQUFDc0IsZUFBaEIsR0FBa0MsaUJBQWE7QUFBQSxNQUFYckIsS0FBVyxTQUFYQSxLQUFXO0FBQzdDLFNBQU87QUFBQ0EsU0FBSyxFQUFMQTtBQUFELEdBQVA7QUFDRCxDQUZELEMsQ0FHRjs7O0FBRUEsK0RBQWVELGVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYWxsYmFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuLy8gaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSAsdXNlRWZmZWN0fSAgZnJvbSAncmVhY3QnXG5cblxuZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKHtxdWVyeX0pIHtcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXR1c0NvZGUsIHNldFN0YXR1c0NvZGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBheGlvcy5wb3N0KCdodHRwOi8vYXV0aF9zZXJ2ZXI6NTAwMC9jYWxsYmFjaycsXG4gICAge1xuICAgICAgY29kZTpyb3V0ZXIucXVlcnkuY29kZSxcbiAgICAgIHN0YXRlOnJvdXRlci5xdWVyeS5zdGF0ZSxcbiAgICB9XG4gICkudGhlbihcbiAgICBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIjFcIixyZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbilcbiAgICAgIHNldFN0YXR1c0NvZGUocmVzcG9uc2UuZGF0YS5zdGF0dXNfY29kZSlcbiAgICAgIHNldEFjY2Vzc1Rva2VuKHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuKVxuICAgICAgc2V0QXV0aGVudGljYXRlZCh0cnVlKVxuICAgIH1cbiAgKS5jYXRjaChcbiAgICBmdW5jdGlvbihlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIClcbiAgLy8gcmV0dXJuIDxkaXY+e2FjY2Vzc1Rva2VufTwvZGl2PlxufVxuLy8gdXNlRWZmZWN0KCgpPT57XG4gIGNhbGxiYWNrSGFuZGxlci5nZXRJbml0aWFsUHJvcHMgPSAoe3F1ZXJ5fSkgPT4ge1xuICAgIHJldHVybiB7cXVlcnl9XG4gIH1cbi8vIH0sW10pXG5cbmV4cG9ydCBkZWZhdWx0IGNhbGxiYWNrSGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ })

});