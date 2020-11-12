webpackHotUpdate_N_E("pages/products",{

/***/ "./components/layout/search.js":
/*!*************************************!*\
  !*** ./components/layout/search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputBase */ \"./node_modules/@material-ui/core/esm/InputBase/index.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Search */ \"./node_modules/@material-ui/icons/Search.js\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ \"./node_modules/@material-ui/icons/Close.js\");\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ \"./node_modules/@material-ui/icons/ArrowDropDown.js\");\n/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _search_styles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search.styles.js */ \"./components/layout/search.styles.js\");\nvar _jsxFileName = \"/home/henrik/Projects/rickmorty/components/layout/search.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction Search(_ref) {\n  _s();\n\n  var value = _ref.value,\n      _onChange = _ref.onChange,\n      onDone = _ref.onDone,\n      q = _ref.q;\n  var classes = Object(_search_styles_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.paper,\n    elevation: 0,\n    variant: \"outlined\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"contained\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Characters\", __jsx(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    fontSize: \"small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    fullWidth: true,\n    className: classes.input,\n    placeholder: \"Search characters\",\n    value: value,\n    onChange: function onChange(event) {\n      return _onChange(event, event.target.value);\n    },\n    onKeyDown: function onKeyDown(event) {\n      var key = event.key;\n\n      if (key === 'Enter') {\n        event.preventDefault();\n\n        if (value.length >= 3) {\n          onDone(value);\n        }\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), q ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    passHref: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: classes.close,\n    size: \"medium\",\n    disableFocusRipple: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    fontSize: \"small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }))) : false, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.button,\n    variant: \"contained\",\n    disabled: value === q ? true : value.length >= 3 ? false : true,\n    onClick: function onClick(_) {\n      if (value === q) {\n        return;\n      }\n\n      if (value.length >= 3) {\n        onDone(value);\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Search, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [_search_styles_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]];\n});\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvc2VhcmNoLmpzPzAxNzkiXSwibmFtZXMiOlsiU2VhcmNoIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uRG9uZSIsInEiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwicGFwZXIiLCJidXR0b24iLCJpbnB1dCIsImV2ZW50IiwidGFyZ2V0Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJjbG9zZSIsIl8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQThDO0FBQUE7O0FBQUEsTUFBN0JDLEtBQTZCLFFBQTdCQSxLQUE2QjtBQUFBLE1BQXRCQyxTQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFBQSxNQUFKQyxDQUFJLFFBQUpBLENBQUk7QUFDNUMsTUFBTUMsT0FBTyxHQUFHQyxpRUFBUyxFQUF6QjtBQUVBLFNBQ0UsTUFBQywrREFBRDtBQUNFLGFBQVMsRUFBRUQsT0FBTyxDQUFDRSxLQURyQjtBQUVFLGFBQVMsRUFBRSxDQUZiO0FBR0UsV0FBTyxFQUFDLFVBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVGLE9BQU8sQ0FBQ0csTUFEckI7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU1FLE1BQUMsdUVBQUQ7QUFBZSxZQUFRLEVBQUMsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBTEYsRUFhRSxNQUFDLG1FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFFSCxPQUFPLENBQUNJLEtBRnJCO0FBR0UsZUFBVyxFQUFDLG1CQUhkO0FBSUUsU0FBSyxFQUFFUixLQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDUyxLQUFEO0FBQUEsYUFBV1IsU0FBUSxDQUFDUSxLQUFELEVBQVFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhVixLQUFyQixDQUFuQjtBQUFBLEtBTFo7QUFNRSxhQUFTLEVBQUUsbUJBQUNTLEtBQUQsRUFBVztBQUFBLFVBQ2JFLEdBRGEsR0FDTkYsS0FETSxDQUNiRSxHQURhOztBQUdwQixVQUFJQSxHQUFHLEtBQUssT0FBWixFQUFxQjtBQUNuQkYsYUFBSyxDQUFDRyxjQUFOOztBQUVBLFlBQUlaLEtBQUssQ0FBQ2EsTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNyQlgsZ0JBQU0sQ0FBQ0YsS0FBRCxDQUFOO0FBQ0Q7QUFDRjtBQUNGLEtBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWlDUUcsQ0FqQ1IsR0FrQ00sTUFBQyxnREFBRDtBQUNFLFFBQUksRUFBQyxHQURQO0FBRUUsWUFBUSxNQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxFQUFFQyxPQUFPLENBQUNVLEtBRHJCO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxzQkFBa0IsTUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsK0RBQUQ7QUFBVyxZQUFRLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBSkYsQ0FsQ04sR0ErQ00sS0EvQ04sRUFtREUsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRVYsT0FBTyxDQUFDRyxNQURyQjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsWUFBUSxFQUNGUCxLQUFLLEtBQUtHLENBRFIsR0FFSixJQUZJLEdBR0tILEtBQUssQ0FBQ2EsTUFBTixJQUFnQixDQUhyQixHQUlKLEtBSkksR0FNSixJQVROO0FBWUUsV0FBTyxFQUFFLGlCQUFDRSxDQUFELEVBQU87QUFDZCxVQUFJZixLQUFLLEtBQUtHLENBQWQsRUFBaUI7QUFDZjtBQUNEOztBQUVELFVBQUlILEtBQUssQ0FBQ2EsTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNyQlgsY0FBTSxDQUFDRixLQUFELENBQU47QUFDRDtBQUNGLEtBcEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FzQkUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLENBbkRGLENBREY7QUE4RUQ7O0dBakZRRCxNO1VBQ1NNLHlEOzs7S0FEVE4sTTtBQW1GTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9zZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xuaW1wb3J0IEFycm93RG93bkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RHJvcERvd24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vc2VhcmNoLnN0eWxlcy5qcyc7XG5cbmZ1bmN0aW9uIFNlYXJjaCh7dmFsdWUsIG9uQ2hhbmdlLCBvbkRvbmUsIHF9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxQYXBlclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfVxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgPlxuICAgICAgICB7LyogVE9ETyAqL31cbiAgICAgICAgQ2hhcmFjdGVyc1xuICAgICAgICA8QXJyb3dEb3duSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPElucHV0QmFzZVxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBjaGFyYWN0ZXJzXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCwgZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB7a2V5fSA9IGV2ZW50O1xuXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgIG9uRG9uZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAge2RvIHtcbiAgICAgICAgaWYgKHEpIHtcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2V9XG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENsb3NlSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH19XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGRpc2FibGVkPXtkbyB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBxKSB7XG4gICAgICAgICAgICB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17KF8pID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IHEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgIG9uRG9uZSh2YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1BhcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/search.js\n");

/***/ })

})