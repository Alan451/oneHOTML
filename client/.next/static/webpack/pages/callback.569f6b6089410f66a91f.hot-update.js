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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n // import { useEffect } from 'react'\n\n\n\n\nfunction callbackHandler(_ref) {\n  _s();\n\n  var prop = _ref.prop;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      accessToken = _useState[0],\n      setAccessToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      statusCode = _useState2[0],\n      setStatusCode = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isAuthenticated = _useState3[0],\n      setAuthenticated = _useState3[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  axios__WEBPACK_IMPORTED_MODULE_1___default().post('http://auth_server:5000/callback', {\n    code: router.query.code,\n    state: router.query.state\n  }).then(function (response) {\n    // console.log(\"1\",response.data.access_token)\n    setStatusCode(response.data.status_code);\n    setAccessToken(response.data.access_token);\n    setAuthenticated(true);\n  })[\"catch\"](function (error) {\n    console.log(error);\n  }); // return <div>{accessToken}</div>\n} // useEffect(()=>{\n//   callbackHandler.getInitialProps = ({query}) => {\n//     return {query}\n//   }\n// },[])\n\n\n_s(callbackHandler, \"9z4BuAK47uAFMA2vkm7nOoiVnLY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJwcm9wIiwidXNlU3RhdGUiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwic3RhdHVzQ29kZSIsInNldFN0YXR1c0NvZGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzZXRBdXRoZW50aWNhdGVkIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXhpb3MiLCJjb2RlIiwicXVlcnkiLCJzdGF0ZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0dXNfY29kZSIsImFjY2Vzc190b2tlbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsZUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTzs7QUFBQSxrQkFDT0MsK0NBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUN4QkMsV0FEd0I7QUFBQSxNQUNYQyxjQURXOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRXhCRyxVQUZ3QjtBQUFBLE1BRVpDLGFBRlk7O0FBQUEsbUJBR2FKLCtDQUFRLENBQUMsS0FBRCxDQUhyQjtBQUFBLE1BR3hCSyxlQUh3QjtBQUFBLE1BR1BDLGdCQUhPOztBQUkvQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0FDLG1EQUFBLENBQVcsa0NBQVgsRUFDRTtBQUNFQyxRQUFJLEVBQUNILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRCxJQURwQjtBQUVFRSxTQUFLLEVBQUNMLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQztBQUZyQixHQURGLEVBS0VDLElBTEYsQ0FNRSxVQUFTQyxRQUFULEVBQWtCO0FBQ2hCO0FBQ0FWLGlCQUFhLENBQUNVLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFmLENBQWI7QUFDQWQsa0JBQWMsQ0FBQ1ksUUFBUSxDQUFDQyxJQUFULENBQWNFLFlBQWYsQ0FBZDtBQUNBWCxvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0QsR0FYSCxXQWFFLFVBQVNZLEtBQVQsRUFBZTtBQUNiQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEdBZkgsRUFMK0IsQ0FzQi9CO0FBQ0QsQyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQTVCU3BCLGU7VUFJUVUsa0Q7Ozs7QUE0Q2pCLCtEQUFlVixlQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FsbGJhY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUgLHVzZUVmZmVjdH0gIGZyb20gJ3JlYWN0J1xuXG5cbmZ1bmN0aW9uIGNhbGxiYWNrSGFuZGxlcih7cHJvcH0pIHtcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXR1c0NvZGUsIHNldFN0YXR1c0NvZGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBheGlvcy5wb3N0KCdodHRwOi8vYXV0aF9zZXJ2ZXI6NTAwMC9jYWxsYmFjaycsXG4gICAge1xuICAgICAgY29kZTpyb3V0ZXIucXVlcnkuY29kZSxcbiAgICAgIHN0YXRlOnJvdXRlci5xdWVyeS5zdGF0ZSxcbiAgICB9XG4gICkudGhlbihcbiAgICBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIjFcIixyZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbilcbiAgICAgIHNldFN0YXR1c0NvZGUocmVzcG9uc2UuZGF0YS5zdGF0dXNfY29kZSlcbiAgICAgIHNldEFjY2Vzc1Rva2VuKHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuKVxuICAgICAgc2V0QXV0aGVudGljYXRlZCh0cnVlKVxuICAgIH1cbiAgKS5jYXRjaChcbiAgICBmdW5jdGlvbihlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIClcbiAgLy8gcmV0dXJuIDxkaXY+e2FjY2Vzc1Rva2VufTwvZGl2PlxufVxuLy8gdXNlRWZmZWN0KCgpPT57XG4vLyAgIGNhbGxiYWNrSGFuZGxlci5nZXRJbml0aWFsUHJvcHMgPSAoe3F1ZXJ5fSkgPT4ge1xuLy8gICAgIHJldHVybiB7cXVlcnl9XG4vLyAgIH1cbi8vIH0sW10pXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zb2xlLmxvZyhjb250ZXh0KVxuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly8uLi5gKVxuICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIC8vIGlmICghZGF0YSkge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICByZWRpcmVjdDoge1xuICAvLyAgICAgICBkZXN0aW5hdGlvbjogJy8nLFxuICAvLyAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAvLyAgICAgfSxcbiAgLy8gICB9XG4gIC8vIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEgOiAnZGF0YSd9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxsYmFja0hhbmRsZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ })

});