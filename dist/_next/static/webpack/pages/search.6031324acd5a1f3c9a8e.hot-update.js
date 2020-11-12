webpackHotUpdate_N_E("pages/search",{

/***/ "./containers/results.js":
/*!*******************************!*\
  !*** ./containers/results.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lunr */ \"./node_modules/lunr/lunr.js\");\n/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lunr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./components/layout/index.js\");\n/* harmony import */ var _components_results_footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/results/footer.js */ \"./components/results/footer.js\");\n/* harmony import */ var _components_results_main_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/results/main.js */ \"./components/results/main.js\");\n/* harmony import */ var _results_styles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./results.styles.js */ \"./containers/results.styles.js\");\n\n\n\nvar _jsxFileName = \"/home/henrik/Projects/rickmorty/containers/results.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n // the indexed store\n\nvar idx;\n\nfunction Results(_ref) {\n  _s();\n\n  var results = _ref.results;\n  var classes = Object(_results_styles_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      store = _React$useState2[0],\n      setStore = _React$useState2[1];\n\n  var pages = Math.ceil(store.length / 5);\n  var page = Number(router.query.page);\n  var q = router.query.q;\n  var start = page * 5 - 5;\n  var end = page * 5;\n  var items = store.slice(start, end).map(function (_ref2) {\n    var ref = _ref2.ref;\n    return results.find(function (_ref3) {\n      var id = _ref3.id;\n      return id === Number(ref);\n    });\n  }); // create the index store (from all results)\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    idx = lunr__WEBPACK_IMPORTED_MODULE_3___default()(function createIndex() {\n      var _this = this;\n\n      this.ref('id');\n      this.field('name');\n      results.forEach(function (res) {\n        _this.add(res);\n      });\n    });\n  }, [results.length]); // create the state store from the results of the search\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (!q || !idx) {\n      return;\n    }\n\n    var result = idx.search(q);\n    setStore(result);\n  }, [router.query.q]);\n\n  if (!Object.keys(router.query).length) {\n    return null;\n  }\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    initialSearchValue: q,\n    onSearch: function onSearch(query) {\n      return router.push({\n        pathname: '/search',\n        query: {\n          q: query,\n          page: 1\n        }\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.container,\n    maxWidth: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(Results, {\n    results: items,\n    page: page,\n    pages: pages,\n    onChange: function onChange(_evt, page) {\n      return router.push({\n        query: _objectSpread(_objectSpread({}, router.query), {}, {\n          page: page\n        })\n      });\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Results, \"Kr8BT7Am1gvtm6H7RkJ1vpt9UNU=\", false, function () {\n  return [_results_styles_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\n\nvar _c;\n\n$RefreshReg$(_c, \"Results\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9yZXN1bHRzLmpzP2RhMTciXSwibmFtZXMiOlsiaWR4IiwiUmVzdWx0cyIsInJlc3VsdHMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0b3JlIiwic2V0U3RvcmUiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnZSIsIk51bWJlciIsInF1ZXJ5IiwicSIsInN0YXJ0IiwiZW5kIiwiaXRlbXMiLCJzbGljZSIsIm1hcCIsInJlZiIsImZpbmQiLCJpZCIsInVzZUVmZmVjdCIsImx1bnIiLCJjcmVhdGVJbmRleCIsImZpZWxkIiwiZm9yRWFjaCIsInJlcyIsImFkZCIsInJlc3VsdCIsInNlYXJjaCIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwicGF0aG5hbWUiLCJjb250YWluZXIiLCJfZXZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsR0FBSjs7QUFFQSxTQUFTQyxPQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBQzFCLE1BQU1DLE9BQU8sR0FBR0Msa0VBQVMsRUFBekI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUYwQix3QkFHQUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FIQTtBQUFBO0FBQUEsTUFHbkJDLEtBSG1CO0FBQUEsTUFHWkMsUUFIWTs7QUFLMUIsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosS0FBSyxDQUFDSyxNQUFOLEdBQWUsQ0FBekIsQ0FBZDtBQUNBLE1BQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDWCxNQUFNLENBQUNZLEtBQVAsQ0FBYUYsSUFBZCxDQUFuQjtBQUNBLE1BQU1HLENBQUMsR0FBR2IsTUFBTSxDQUFDWSxLQUFQLENBQWFDLENBQXZCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSixJQUFJLEdBQUcsQ0FBUCxHQUFXLENBQXpCO0FBQ0EsTUFBTUssR0FBRyxHQUFHTCxJQUFJLEdBQUcsQ0FBbkI7QUFDQSxNQUFNTSxLQUFLLEdBQUdaLEtBQUssQ0FBQ2EsS0FBTixDQUFZSCxLQUFaLEVBQW1CQyxHQUFuQixFQUF3QkcsR0FBeEIsQ0FBNEIsaUJBQVc7QUFBQSxRQUFUQyxHQUFTLFNBQVRBLEdBQVM7QUFDbkQsV0FBT3RCLE9BQU8sQ0FBQ3VCLElBQVIsQ0FBYTtBQUFBLFVBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLGFBQVVBLEVBQUUsS0FBS1YsTUFBTSxDQUFDUSxHQUFELENBQXZCO0FBQUEsS0FBYixDQUFQO0FBQ0QsR0FGYSxDQUFkLENBVjBCLENBYzFCOztBQUNBakIsOENBQUssQ0FBQ29CLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQjNCLE9BQUcsR0FBRzRCLDJDQUFJLENBQUMsU0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUNoQyxXQUFLTCxHQUFMLENBQVMsSUFBVDtBQUNBLFdBQUtNLEtBQUwsQ0FBVyxNQUFYO0FBRUE1QixhQUFPLENBQUM2QixPQUFSLENBQWdCLFVBQUNDLEdBQUQsRUFBUztBQUN2QixhQUFJLENBQUNDLEdBQUwsQ0FBU0QsR0FBVDtBQUNELE9BRkQ7QUFHRCxLQVBTLENBQVY7QUFRRCxHQVRELEVBU0csQ0FBQzlCLE9BQU8sQ0FBQ1ksTUFBVCxDQVRILEVBZjBCLENBMEIxQjs7QUFDQVAsOENBQUssQ0FBQ29CLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJLENBQUNULENBQUQsSUFBTSxDQUFDbEIsR0FBWCxFQUFnQjtBQUNkO0FBQ0Q7O0FBRUQsUUFBTWtDLE1BQU0sR0FBR2xDLEdBQUcsQ0FBQ21DLE1BQUosQ0FBV2pCLENBQVgsQ0FBZjtBQUNBUixZQUFRLENBQUN3QixNQUFELENBQVI7QUFDRCxHQVBELEVBT0csQ0FBQzdCLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhQyxDQUFkLENBUEg7O0FBU0EsTUFBSSxDQUFDa0IsTUFBTSxDQUFDQyxJQUFQLENBQVloQyxNQUFNLENBQUNZLEtBQW5CLEVBQTBCSCxNQUEvQixFQUF1QztBQUNyQyxXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUNFLE1BQUMsMERBQUQ7QUFDRSxzQkFBa0IsRUFBRUksQ0FEdEI7QUFFRSxZQUFRLEVBQUUsa0JBQUNELEtBQUQsRUFBVztBQUNuQixhQUFPWixNQUFNLENBQUNpQyxJQUFQLENBQVk7QUFDakJDLGdCQUFRLEVBQUUsU0FETztBQUVqQnRCLGFBQUssRUFBRTtBQUNMQyxXQUFDLEVBQUVELEtBREU7QUFFTEYsY0FBSSxFQUFFO0FBRkQ7QUFGVSxPQUFaLENBQVA7QUFPRCxLQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLG1FQUFEO0FBQ0UsYUFBUyxFQUFFWixPQUFPLENBQUNxQyxTQURyQjtBQUVFLFlBQVEsRUFBRSxLQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLE9BQUQ7QUFDRSxXQUFPLEVBQUVuQixLQURYO0FBRUUsUUFBSSxFQUFFTixJQUZSO0FBR0UsU0FBSyxFQUFFSixLQUhUO0FBSUUsWUFBUSxFQUFFLGtCQUFDOEIsSUFBRCxFQUFPMUIsSUFBUCxFQUFnQjtBQUN4QixhQUFPVixNQUFNLENBQUNpQyxJQUFQLENBQVk7QUFDakJyQixhQUFLLGtDQUNBWixNQUFNLENBQUNZLEtBRFA7QUFFSEYsY0FBSSxFQUFKQTtBQUZHO0FBRFksT0FBWixDQUFQO0FBTUQsS0FYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FaRixDQURGO0FBaUNEOztHQXpFUWQsTztVQUNTRywwRCxFQUNERSxxRDs7O0tBRlJMLE87QUEyRU1BLHNFQUFmIiwiZmlsZSI6Ii4vY29udGFpbmVycy9yZXN1bHRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsdW5yIGZyb20gJ2x1bnInO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3VsdHMvZm9vdGVyLmpzJztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdWx0cy9tYWluLmpzJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9yZXN1bHRzLnN0eWxlcy5qcyc7XG5cbi8vIHRoZSBpbmRleGVkIHN0b3JlXG5sZXQgaWR4O1xuXG5mdW5jdGlvbiBSZXN1bHRzKHtyZXN1bHRzfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc3RvcmUsIHNldFN0b3JlXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChzdG9yZS5sZW5ndGggLyA1KTtcbiAgY29uc3QgcGFnZSA9IE51bWJlcihyb3V0ZXIucXVlcnkucGFnZSk7XG4gIGNvbnN0IHEgPSByb3V0ZXIucXVlcnkucTtcbiAgY29uc3Qgc3RhcnQgPSBwYWdlICogNSAtIDU7XG4gIGNvbnN0IGVuZCA9IHBhZ2UgKiA1O1xuICBjb25zdCBpdGVtcyA9IHN0b3JlLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcCgoe3JlZn0pID0+IHtcbiAgICByZXR1cm4gcmVzdWx0cy5maW5kKCh7aWR9KSA9PiBpZCA9PT0gTnVtYmVyKHJlZikpO1xuICB9KTtcblxuICAvLyBjcmVhdGUgdGhlIGluZGV4IHN0b3JlIChmcm9tIGFsbCByZXN1bHRzKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlkeCA9IGx1bnIoZnVuY3Rpb24gY3JlYXRlSW5kZXgoKSB7XG4gICAgICB0aGlzLnJlZignaWQnKTtcbiAgICAgIHRoaXMuZmllbGQoJ25hbWUnKTtcblxuICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5hZGQocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbcmVzdWx0cy5sZW5ndGhdKTtcblxuICAvLyBjcmVhdGUgdGhlIHN0YXRlIHN0b3JlIGZyb20gdGhlIHJlc3VsdHMgb2YgdGhlIHNlYXJjaFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcSB8fCAhaWR4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gaWR4LnNlYXJjaChxKTtcbiAgICBzZXRTdG9yZShyZXN1bHQpO1xuICB9LCBbcm91dGVyLnF1ZXJ5LnFdKTtcblxuICBpZiAoIU9iamVjdC5rZXlzKHJvdXRlci5xdWVyeSkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIGluaXRpYWxTZWFyY2hWYWx1ZT17cX1cbiAgICAgIG9uU2VhcmNoPXsocXVlcnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogJy9zZWFyY2gnLFxuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuICAgICAgICBtYXhXaWR0aD17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxSZXN1bHRzXG4gICAgICAgICAgcmVzdWx0cz17aXRlbXN9XG4gICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgb25DaGFuZ2U9eyhfZXZ0LCBwYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIC4uLnJvdXRlci5xdWVyeSxcbiAgICAgICAgICAgICAgICBwYWdlLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/results.js\n");

/***/ })

})