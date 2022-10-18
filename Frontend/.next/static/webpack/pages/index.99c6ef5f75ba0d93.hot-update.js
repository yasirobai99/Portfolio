"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ExperienceCard.tsx":
/*!***************************************!*\
  !*** ./components/ExperienceCard.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sanity */ \"./sanity.ts\");\n\n\n\n\nfunction ExperienceCard(param) {\n    var experience = param.experience;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                initial: {\n                    y: -100,\n                    opacity: 0\n                },\n                transition: {\n                    duration: 1.2\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center\",\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(experience === null || experience === void 0 ? void 0 : experience.companyImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-4xl font-light\",\n                        children: \"Software Engineer\"\n                    }, void 0, false, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold text-2xl mt-1\",\n                        children: \"Google\"\n                    }, void 0, false, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-2 my-2\",\n                        children: experience.technologies.map(function(technology) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-10 w-10 rounded-full\",\n                                // src={urlFor(technology.image).url()}\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(technology.image).u\n                            }, technology._id, false, {\n                                fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase py-5 text-gray-300\",\n                        children: [\n                            new Date(experience.dateStarted).toDateString(),\n                            \" -\",\n                            \"\",\n                            experience.isCurrentlyWorkingHere ? \"Present\" : new Date(experience.dateStarted).toDateString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-5 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80\",\n                        children: experience.points.map(function(point, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: point\n                            }, i, false, {\n                                fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDYztBQUVKO0FBTXBCLFNBQVNHLGNBQWMsQ0FBQyxLQUFxQixFQUFFO1FBQXZCLFVBQVksR0FBWixLQUFxQixDQUFuQkMsVUFBVTs7SUFDL0MscUJBQ0ksOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFDLDZOQUE2Tjs7MEJBQzVPLDhEQUFDTCxxREFBVTtnQkFDUE8sT0FBTyxFQUFFO29CQUNMQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUNQQyxPQUFPLEVBQUUsQ0FBQztpQkFDYjtnQkFDREMsVUFBVSxFQUFFO29CQUFFQyxRQUFRLEVBQUUsR0FBRztpQkFBRTtnQkFDN0JDLFdBQVcsRUFBRTtvQkFBRUgsT0FBTyxFQUFFLENBQUM7b0JBQUVELENBQUMsRUFBRSxDQUFDO2lCQUFFO2dCQUNqQ0ssUUFBUSxFQUFFO29CQUFFQyxJQUFJLEVBQUUsSUFBSTtpQkFBRTtnQkFDeEJULFNBQVMsRUFBQyw2RUFBNkU7Z0JBQ3ZGVSxHQUFHLEVBQUVkLCtDQUFNLENBQUNFLFVBQVUsYUFBVkEsVUFBVSxXQUFjLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsVUFBVSxDQUFFYSxZQUFZLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO2dCQUFFQyxHQUFHLEVBQUMsRUFBRTs7Ozs7b0JBQ3JEOzBCQUVGLDhEQUFDQyxLQUFHO2dCQUFDZCxTQUFTLEVBQUMsZUFBZTs7a0NBQzFCLDhEQUFDZSxJQUFFO3dCQUFDZixTQUFTLEVBQUMscUJBQXFCO2tDQUFDLG1CQUFpQjs7Ozs7NEJBQUs7a0NBQzFELDhEQUFDZ0IsR0FBQzt3QkFBQ2hCLFNBQVMsRUFBQyx5QkFBeUI7a0NBQUMsUUFBTTs7Ozs7NEJBQUk7a0NBQ2pELDhEQUFDYyxLQUFHO3dCQUFDZCxTQUFTLEVBQUMscUJBQXFCO2tDQUMvQkYsVUFBVSxDQUFDbUIsWUFBWSxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLFVBQVU7aURBQ25DLDhEQUFDbEIsS0FBRztnQ0FFQUQsU0FBUyxFQUFDLHdCQUF3QjtnQ0FDbEMsdUNBQXVDO2dDQUN2Q1UsR0FBRyxFQUFFZCwrQ0FBTSxDQUFDdUIsVUFBVSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsQ0FBQzsrQkFIMUJGLFVBQVUsQ0FBQ0csR0FBRzs7OztxQ0FJckI7eUJBQ0wsQ0FBQzs7Ozs7NEJBQ0E7a0NBQ04sOERBQUNOLEdBQUM7d0JBQUNoQixTQUFTLEVBQUMsOEJBQThCOzs0QkFDdEMsSUFBSXVCLElBQUksQ0FBQ3pCLFVBQVUsQ0FBQzBCLFdBQVcsQ0FBQyxDQUFDQyxZQUFZLEVBQUU7NEJBQUMsSUFBRTs0QkFBQyxFQUFFOzRCQUNyRDNCLFVBQVUsQ0FBQzRCLHNCQUFzQixHQUM1QixTQUFTLEdBQ1QsSUFBSUgsSUFBSSxDQUFDekIsVUFBVSxDQUFDMEIsV0FBVyxDQUFDLENBQUNDLFlBQVksRUFBRTs7Ozs7OzRCQUNyRDtrQ0FFSiw4REFBQ0UsSUFBRTt3QkFBQzNCLFNBQVMsRUFBQyxvSUFBb0k7a0NBQzdJRixVQUFVLENBQUM4QixNQUFNLENBQUNWLEdBQUcsQ0FBQyxTQUFDVyxLQUFLLEVBQUVDLENBQUM7aURBQzVCLDhEQUFDQyxJQUFFOzBDQUFVRixLQUFLOytCQUFUQyxDQUFDOzs7O3FDQUFjO3lCQUMzQixDQUFDOzs7Ozs0QkFDRDs7Ozs7O29CQUNIOzs7Ozs7WUFDQSxDQUNiO0FBQ0wsQ0FBQztBQTNDdUJqQyxLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwZXJpZW5jZUNhcmQudHN4P2Y5ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEV4cGVyaWVuY2UgfSBmcm9tICcuLi90eXBpbmdzJztcbmltcG9ydCB7IHVybEZvciB9IGZyb20gJy4uL3Nhbml0eSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgZXhwZXJpZW5jZTogRXhwZXJpZW5jZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4cGVyaWVuY2VDYXJkKHsgZXhwZXJpZW5jZSB9OiBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC1sZyBpdGVtcy1jZW50ZXIgc3BhY2UteS03IGZsZXgtc2hyaW5rLTAgdy1bNTAwcHhdIG1kOnctWzYwMHB4XSB4bDp3LVs5MDBweF0gc25hcC1jZW50ZXIgYmctWyMyOTI5MjldIHAtMTAgaG92ZXI6b3BhY2l0eS0xMDAgb3BhY2l0eS00MCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMjAwIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgICAgIHk6IC0xMDAsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjIgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMzIgaC0zMiByb3VuZGVkLWZ1bGwgeGw6dy1bMjAwcHhdIHhsOmgtWzIwMHB4XSBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoZXhwZXJpZW5jZT8uY29tcGFueUltYWdlKS51cmwoKX0gYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMCBtZDpweC0xMFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWxpZ2h0XCI+U29mdHdhcmUgRW5naW5lZXI8L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCBtdC0xXCI+R29vZ2xlPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbXktMlwiPlxuICAgICAgICAgICAgICAgICAgICB7ZXhwZXJpZW5jZS50ZWNobm9sb2dpZXMubWFwKHRlY2hub2xvZ3kgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGVjaG5vbG9neS5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3JjPXt1cmxGb3IodGVjaG5vbG9neS5pbWFnZSkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IodGVjaG5vbG9neS5pbWFnZSkudX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBweS01IHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGV4cGVyaWVuY2UuZGF0ZVN0YXJ0ZWQpLnRvRGF0ZVN0cmluZygpfSAte1wiXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtleHBlcmllbmNlLmlzQ3VycmVudGx5V29ya2luZ0hlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJQcmVzZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoZXhwZXJpZW5jZS5kYXRlU3RhcnRlZCkudG9EYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBzcGFjZS15LTUgbWwtNSB0ZXh0LWxnIG1heC1oLTk2IG92ZXJmbG93LXktc2Nyb2xsIHByLTUgc2Nyb2xsYmFyLXRoaW4gc2Nyb2xsYmFyLXRyYWNrLWJsYWNrIHNjcm9sbGJhci10aHVtYi1bI0Y3QUIwQV0vODBcIj5cbiAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2UucG9pbnRzLm1hcCgocG9pbnQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9Pntwb2ludH08L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXJsRm9yIiwiRXhwZXJpZW5jZUNhcmQiLCJleHBlcmllbmNlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImltZyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwic3JjIiwiY29tcGFueUltYWdlIiwidXJsIiwiYWx0IiwiZGl2IiwiaDQiLCJwIiwidGVjaG5vbG9naWVzIiwibWFwIiwidGVjaG5vbG9neSIsImltYWdlIiwidSIsIl9pZCIsIkRhdGUiLCJkYXRlU3RhcnRlZCIsInRvRGF0ZVN0cmluZyIsImlzQ3VycmVudGx5V29ya2luZ0hlcmUiLCJ1bCIsInBvaW50cyIsInBvaW50IiwiaSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});