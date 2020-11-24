webpackHotUpdate_N_E("pages/products/[id]",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ \"./components/layout/footer.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.js */ \"./components/layout/header.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.js */ \"./components/layout/search.js\");\n/* harmony import */ var _layout_styles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.styles.js */ \"./components/layout/layout.styles.js\");\n\n\nvar _jsxFileName = \"/home/henrik/Projects/rickandmorty/components/layout/layout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      initialSearchValue = _ref.initialSearchValue,\n      onSearch = _ref.onSearch,\n      value = _ref.value,\n      _onChange = _ref.onChange;\n  var classes = Object(_layout_styles_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  var title = 'Rick and Morty'; //React.useEffect(() => {\n  //setSearch(initialSearchValue);\n  //}, []);\n\n  if (value === undefined) {\n    return null;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.page,\n    maxWidth: false,\n    disableGutters: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      title: title,\n      searchComponent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_search_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        q: initialSearchValue,\n        onChange: function onChange(_, value) {\n          return _onChange(value);\n        },\n        value: value,\n        onDone: onSearch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      className: classes.main,\n      container: true,\n      direction: \"column\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Layout, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [_layout_styles_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzPzg1ZDQiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJpbml0aWFsU2VhcmNoVmFsdWUiLCJvblNlYXJjaCIsInZhbHVlIiwib25DaGFuZ2UiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGl0bGUiLCJ1bmRlZmluZWQiLCJwYWdlIiwiXyIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BTUc7QUFBQTs7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFBQSxNQUpEQyxrQkFJQyxRQUpEQSxrQkFJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLEtBRUMsUUFGREEsS0FFQztBQUFBLE1BRERDLFNBQ0MsUUFEREEsUUFDQztBQUNELE1BQU1DLE9BQU8sR0FBR0MsaUVBQVMsRUFBekI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsZ0JBQWQsQ0FGQyxDQUlEO0FBQ0U7QUFDRjs7QUFFQSxNQUFJSixLQUFLLEtBQUtLLFNBQWQsRUFBeUI7QUFDdkIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsbUVBQUQ7QUFDRSxhQUFTLEVBQUVILE9BQU8sQ0FBQ0ksSUFEckI7QUFFRSxZQUFRLEVBQUUsS0FGWjtBQUdFLGtCQUFjLE1BSGhCO0FBQUEsNEJBS0UscUVBQUMsa0RBQUQ7QUFDRSxXQUFLLEVBQUVGLEtBRFQ7QUFFRSxxQkFBZSxlQUNiLHFFQUFDLGtEQUFEO0FBQ0UsU0FBQyxFQUFFTixrQkFETDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNTLENBQUQsRUFBSVAsS0FBSjtBQUFBLGlCQUFjQyxTQUFRLENBQUNELEtBQUQsQ0FBdEI7QUFBQSxTQUZaO0FBR0UsYUFBSyxFQUFFQSxLQUhUO0FBSUUsY0FBTSxFQUFFRDtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFpQkUscUVBQUMsOERBQUQ7QUFDRSxlQUFTLEVBQUVHLE9BQU8sQ0FBQ00sSUFEckI7QUFFRSxlQUFTLE1BRlg7QUFHRSxlQUFTLEVBQUMsUUFIWjtBQUFBLGdCQUtHWDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUF5QkUscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7R0EvQ1FELE07VUFPU08seUQ7OztLQVBUUCxNO0FBaURNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIuanMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLmpzJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9sYXlvdXQuc3R5bGVzLmpzJztcblxuZnVuY3Rpb24gTGF5b3V0KHtcbiAgY2hpbGRyZW4sXG4gIGluaXRpYWxTZWFyY2hWYWx1ZSxcbiAgb25TZWFyY2gsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbn0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0aXRsZSA9ICdSaWNrIGFuZCBNb3J0eSc7XG5cbiAgLy9SZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vc2V0U2VhcmNoKGluaXRpYWxTZWFyY2hWYWx1ZSk7XG4gIC8vfSwgW10pO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdlfVxuICAgICAgbWF4V2lkdGg9e2ZhbHNlfVxuICAgICAgZGlzYWJsZUd1dHRlcnNcbiAgICA+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgc2VhcmNoQ29tcG9uZW50PXtcbiAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICBxPXtpbml0aWFsU2VhcmNoVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KF8sIHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkRvbmU9e29uU2VhcmNofVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIDxHcmlkXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufVxuICAgICAgICBjb250YWluZXJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n");

/***/ })

})