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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n // import { useEffect } from 'react'\n\n\n\n\nfunction callbackHandler() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      accessToken = _useState[0],\n      setAccessToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      statusCode = _useState2[0],\n      setStatusCode = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isAuthenticated = _useState3[0],\n      setAuthenticated = _useState3[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  axios__WEBPACK_IMPORTED_MODULE_1___default().post('http://auth_server:5000/callback', {\n    code: router.query.code,\n    state: router.query.state\n  }).then(function (response) {\n    // console.log(\"1\",response.data.access_token)\n    setStatusCode(response.data.status_code);\n    setAccessToken(response.data.access_token);\n    setAuthenticated(true);\n  })[\"catch\"](function (error) {\n    console.log(error);\n  }); // return <div>{accessToken}</div>\n} // useEffect(()=>{\n//   callbackHandler.getInitialProps = ({query}) => {\n//     return {query}\n//   }\n// },[])\n\n\n_s(callbackHandler, \"9z4BuAK47uAFMA2vkm7nOoiVnLY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJ1c2VTdGF0ZSIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJzdGF0dXNDb2RlIiwic2V0U3RhdHVzQ29kZSIsImlzQXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsImNvZGUiLCJxdWVyeSIsInN0YXRlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN0YXR1c19jb2RlIiwiYWNjZXNzX3Rva2VuIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBQUEsa0JBQ2FDLCtDQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ2xCQyxXQURrQjtBQUFBLE1BQ0xDLGNBREs7O0FBQUEsbUJBRVdGLCtDQUFRLENBQUMsRUFBRCxDQUZuQjtBQUFBLE1BRWxCRyxVQUZrQjtBQUFBLE1BRU5DLGFBRk07O0FBQUEsbUJBR21CSiwrQ0FBUSxDQUFDLEtBQUQsQ0FIM0I7QUFBQSxNQUdsQkssZUFIa0I7QUFBQSxNQUdEQyxnQkFIQzs7QUFJekIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBQyxtREFBQSxDQUFXLGtDQUFYLEVBQ0U7QUFDRUMsUUFBSSxFQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUQsSUFEcEI7QUFFRUUsU0FBSyxFQUFDTCxNQUFNLENBQUNJLEtBQVAsQ0FBYUM7QUFGckIsR0FERixFQUtFQyxJQUxGLENBTUUsVUFBU0MsUUFBVCxFQUFrQjtBQUNoQjtBQUNBVixpQkFBYSxDQUFDVSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZixDQUFiO0FBQ0FkLGtCQUFjLENBQUNZLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRSxZQUFmLENBQWQ7QUFDQVgsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNELEdBWEgsV0FhRSxVQUFTWSxLQUFULEVBQWU7QUFDYkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQWZILEVBTHlCLENBc0J6QjtBQUNELEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0E1QlNuQixlO1VBSVFTLGtEOzs7O0FBMkNqQiwrREFBZVQsZUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbGxiYWNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCx7IHVzZVN0YXRlICx1c2VFZmZlY3R9ICBmcm9tICdyZWFjdCdcblxuXG5mdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoKSB7XG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXNDb2RlLCBzZXRTdGF0dXNDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgYXhpb3MucG9zdCgnaHR0cDovL2F1dGhfc2VydmVyOjUwMDAvY2FsbGJhY2snLFxuICAgIHtcbiAgICAgIGNvZGU6cm91dGVyLnF1ZXJ5LmNvZGUsXG4gICAgICBzdGF0ZTpyb3V0ZXIucXVlcnkuc3RhdGUsXG4gICAgfVxuICApLnRoZW4oXG4gICAgZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgLy8gY29uc29sZS5sb2coXCIxXCIscmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW4pXG4gICAgICBzZXRTdGF0dXNDb2RlKHJlc3BvbnNlLmRhdGEuc3RhdHVzX2NvZGUpXG4gICAgICBzZXRBY2Nlc3NUb2tlbihyZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbilcbiAgICAgIHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSlcbiAgICB9XG4gICkuY2F0Y2goXG4gICAgZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICApXG4gIC8vIHJldHVybiA8ZGl2PnthY2Nlc3NUb2tlbn08L2Rpdj5cbn1cbi8vIHVzZUVmZmVjdCgoKT0+e1xuLy8gICBjYWxsYmFja0hhbmRsZXIuZ2V0SW5pdGlhbFByb3BzID0gKHtxdWVyeX0pID0+IHtcbi8vICAgICByZXR1cm4ge3F1ZXJ5fVxuLy8gICB9XG4vLyB9LFtdKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vLi4uYClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvJyxcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGxiYWNrSGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ })

});