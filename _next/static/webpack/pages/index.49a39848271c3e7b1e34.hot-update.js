webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ \"./components/layout/footer.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.js */ \"./components/layout/header.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.js */ \"./components/layout/search.js\");\n/* harmony import */ var _layout_styles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.styles.js */ \"./components/layout/layout.styles.js\");\n\n\nvar _jsxFileName = \"/home/henrik/Projects/rickandmorty/components/layout/layout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      initialSearchValue = _ref.initialSearchValue,\n      onSearch = _ref.onSearch,\n      value = _ref.value,\n      _onChange = _ref.onChange;\n  var classes = Object(_layout_styles_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); // const [value, setSearch] = React.useState(undefined);\n\n  var title = 'Rick and Morty';\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    setSearch(initialSearchValue);\n  }, []);\n\n  if (value === undefined) {\n    return null;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.page,\n    maxWidth: false,\n    disableGutters: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      title: title,\n      searchComponent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_search_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        q: initialSearchValue,\n        onChange: function onChange(_, value) {\n          return _onChange(value);\n        },\n        value: value,\n        onDone: onSearch\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      className: classes.main,\n      container: true,\n      direction: \"column\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Layout, \"OAQf9SHEQQsOOZKjohcuI3tGtQ0=\", false, function () {\n  return [_layout_styles_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzPzg1ZDQiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJpbml0aWFsU2VhcmNoVmFsdWUiLCJvblNlYXJjaCIsInZhbHVlIiwib25DaGFuZ2UiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGl0bGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInNldFNlYXJjaCIsInVuZGVmaW5lZCIsInBhZ2UiLCJfIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FNRztBQUFBOztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLGtCQUlDLFFBSkRBLGtCQUlDO0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsS0FFQyxRQUZEQSxLQUVDO0FBQUEsTUFEREMsU0FDQyxRQUREQSxRQUNDO0FBQ0QsTUFBTUMsT0FBTyxHQUFHQyxpRUFBUyxFQUF6QixDQURDLENBRUQ7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLGdCQUFkO0FBRUFDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsYUFBUyxDQUFDVCxrQkFBRCxDQUFUO0FBQ0QsR0FGRCxFQUVHLEVBRkg7O0FBSUEsTUFBSUUsS0FBSyxLQUFLUSxTQUFkLEVBQXlCO0FBQ3ZCLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLG1FQUFEO0FBQ0UsYUFBUyxFQUFFTixPQUFPLENBQUNPLElBRHJCO0FBRUUsWUFBUSxFQUFFLEtBRlo7QUFHRSxrQkFBYyxNQUhoQjtBQUFBLDRCQUtFLHFFQUFDLGtEQUFEO0FBQ0UsV0FBSyxFQUFFTCxLQURUO0FBRUUscUJBQWUsZUFDYixxRUFBQyxrREFBRDtBQUNFLFNBQUMsRUFBRU4sa0JBREw7QUFFRSxnQkFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQUlWLEtBQUo7QUFBQSxpQkFBY0MsU0FBUSxDQUFDRCxLQUFELENBQXRCO0FBQUEsU0FGWjtBQUdFLGFBQUssRUFBRUEsS0FIVDtBQUlFLGNBQU0sRUFBRUQ7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBaUJFLHFFQUFDLDhEQUFEO0FBQ0UsZUFBUyxFQUFFRyxPQUFPLENBQUNTLElBRHJCO0FBRUUsZUFBUyxNQUZYO0FBR0UsZUFBUyxFQUFDLFFBSFo7QUFBQSxnQkFLR2Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLGVBeUJFLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBaERRRCxNO1VBT1NPLHlEOzs7S0FQVFAsTTtBQWtETUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaC5qcyc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vbGF5b3V0LnN0eWxlcy5qcyc7XG5cbmZ1bmN0aW9uIExheW91dCh7XG4gIGNoaWxkcmVuLFxuICBpbml0aWFsU2VhcmNoVmFsdWUsXG4gIG9uU2VhcmNoLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG59KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgLy8gY29uc3QgW3ZhbHVlLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgdGl0bGUgPSAnUmljayBhbmQgTW9ydHknO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VhcmNoKGluaXRpYWxTZWFyY2hWYWx1ZSk7XG4gIH0sIFtdKTtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMucGFnZX1cbiAgICAgIG1heFdpZHRoPXtmYWxzZX1cbiAgICAgIGRpc2FibGVHdXR0ZXJzXG4gICAgPlxuICAgICAgPEhlYWRlclxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHNlYXJjaENvbXBvbmVudD17XG4gICAgICAgICAgPFNlYXJjaFxuICAgICAgICAgICAgcT17aW5pdGlhbFNlYXJjaFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhfLCB2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25Eb25lPXtvblNlYXJjaH1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAvPlxuXG4gICAgICA8R3JpZFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn1cbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvR3JpZD5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})