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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction callbackHandler(_ref) {\n  var accessToken = _ref.accessToken,\n      statusCode = _ref.statusCode;\n  // if(statusCode==401)return <div>please try again...</div>\n  return res.redirect('/profile'); // return <div>{accessToken}</div>\n}\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (callbackHandler);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsbGJhY2suanM/MDRlZSJdLCJuYW1lcyI6WyJjYWxsYmFja0hhbmRsZXIiLCJhY2Nlc3NUb2tlbiIsInN0YXR1c0NvZGUiLCJyZXMiLCJyZWRpcmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUdBLFNBQVNBLGVBQVQsT0FBbUQ7QUFBQSxNQUF6QkMsV0FBeUIsUUFBekJBLFdBQXlCO0FBQUEsTUFBYkMsVUFBYSxRQUFiQSxVQUFhO0FBQ2pEO0FBQ0EsU0FBT0MsR0FBRyxDQUFDQyxRQUFKLENBQWEsVUFBYixDQUFQLENBRmlELENBR2pEO0FBQ0Q7OztBQXVCRCwrREFBZUosZUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbGxiYWNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnY29va2llcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSZWFjdCx7IHVzZVN0YXRlICx1c2VFZmZlY3R9ICBmcm9tICdyZWFjdCdcblxuXG5mdW5jdGlvbiBjYWxsYmFja0hhbmRsZXIoe2FjY2Vzc1Rva2VuLHN0YXR1c0NvZGV9KSB7XG4gIC8vIGlmKHN0YXR1c0NvZGU9PTQwMSlyZXR1cm4gPGRpdj5wbGVhc2UgdHJ5IGFnYWluLi4uPC9kaXY+XG4gIHJldHVybiByZXMucmVkaXJlY3QoJy9wcm9maWxlJylcbiAgLy8gcmV0dXJuIDxkaXY+e2FjY2Vzc1Rva2VufTwvZGl2PlxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhjb250ZXh0LnJlcSxjb250ZXh0LnJlcylcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2F1dGhfc2VydmVyOjUwMDAvY2FsbGJhY2snLFxuICAgIHtcbiAgICAgIGNvZGU6Y29udGV4dC5xdWVyeS5jb2RlLFxuICAgICAgc3RhdGU6Y29udGV4dC5xdWVyeS5zdGF0ZSxcbiAgICB9XG4gIClcbiAgY29uc3QgZGF0YSA9IHJlcy5kYXRhXG4gIFxuICBpZihkYXRhLnN0YXR1c19jb2RlPT00MDEpcmV0dXJue1xuICAgIHByb3BzOiB7J2FjY2Vzc1Rva2VuJzpcIlwiLCAnc3RhdHVzQ29kZSc6ZGF0YS5zdGF0dXNfY29kZX1cbiAgfVxuICBjb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCBkYXRhLmFjY2Vzc190b2tlbiwge1xuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiAnbGF4J1xuICB9KSAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsnYWNjZXNzVG9rZW4nOmRhdGEuYWNjZXNzX3Rva2VuLCAnc3RhdHVzQ29kZSc6ZGF0YS5zdGF0dXNfY29kZX0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FsbGJhY2tIYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ })

});