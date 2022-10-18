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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ExperienceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sanity */ \"./sanity.ts\");\n\n\n\n\nfunction ExperienceCard(param) {\n    var experience = param.experience;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                initial: {\n                    y: -100,\n                    opacity: 0\n                },\n                transition: {\n                    duration: 1.2\n                },\n                whileInView: {\n                    opacity: 1,\n                    y: 0\n                },\n                viewport: {\n                    once: true\n                },\n                className: \"w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center\",\n                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(experience === null || experience === void 0 ? void 0 : experience.companyImage).url(),\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-0 md:px-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-4xl font-light\",\n                        children: \"Software Engineer\"\n                    }, void 0, false, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold text-2xl mt-1\",\n                        children: \"Google\"\n                    }, void 0, false, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-2 my-2\",\n                        children: experience.technologies.map(function(technology) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-10 w-10 rounded-full\",\n                                src: (0,_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(technology.image).url()\n                            }, technology._id, false, {\n                                fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"uppercase py-5 text-gray-300\",\n                        children: [\n                            new Date(experience.dateStarted).toDateString(),\n                            \" -\",\n                            \"\",\n                            experience.isCurrentlyWorkingHere ? \"Present\" : new Date(experience.dateStarted).toDateString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc space-y-5 ml-5 text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 \",\n                        children: experience.points.map(function(point, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: point\n                            }, i, false, {\n                                fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yasir/project/portfolio_web/Frontend/components/ExperienceCard.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = ExperienceCard;\nvar _c;\n$RefreshReg$(_c, \"ExperienceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDYztBQUVKO0FBTXBCLFNBQVNHLGNBQWMsQ0FBQyxLQUFxQixFQUFFO1FBQXZCLFVBQVksR0FBWixLQUFxQixDQUFuQkMsVUFBVTs7SUFDakQscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFDLDZOQUE2Tjs7MEJBQ2hQLDhEQUFDTCxxREFBVTtnQkFDWE8sT0FBTyxFQUFFO29CQUNMQyxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUNOQyxPQUFPLEVBQUUsQ0FBQztpQkFDZDtnQkFDREMsVUFBVSxFQUFFO29CQUFFQyxRQUFRLEVBQUUsR0FBRztpQkFBRTtnQkFDN0JDLFdBQVcsRUFBRTtvQkFBRUgsT0FBTyxFQUFFLENBQUM7b0JBQUVELENBQUMsRUFBRSxDQUFDO2lCQUFFO2dCQUNqQ0ssUUFBUSxFQUFFO29CQUFFQyxJQUFJLEVBQUUsSUFBSTtpQkFBRTtnQkFDeEJULFNBQVMsRUFBQyw2RUFBNkU7Z0JBQ3ZGVSxHQUFHLEVBQUVkLCtDQUFNLENBQUNFLFVBQVUsYUFBVkEsVUFBVSxXQUFjLEdBQXhCQSxLQUFBQSxDQUF3QixHQUF4QkEsVUFBVSxDQUFFYSxZQUFZLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO2dCQUFFQyxHQUFHLEVBQUMsRUFBRTs7Ozs7b0JBQ2pEOzBCQUVGLDhEQUFDQyxLQUFHO2dCQUFDZCxTQUFTLEVBQUMsZUFBZTs7a0NBQzFCLDhEQUFDZSxJQUFFO3dCQUFDZixTQUFTLEVBQUMscUJBQXFCO2tDQUFDLG1CQUFpQjs7Ozs7NEJBQUs7a0NBQzFELDhEQUFDZ0IsR0FBQzt3QkFBQ2hCLFNBQVMsRUFBQyx5QkFBeUI7a0NBQUMsUUFBTTs7Ozs7NEJBQUk7a0NBQ2pELDhEQUFDYyxLQUFHO3dCQUFDZCxTQUFTLEVBQUMscUJBQXFCO2tDQUMvQkYsVUFBVSxDQUFDbUIsWUFBWSxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLFVBQVU7aURBQ25DLDhEQUFDbEIsS0FBRztnQ0FFcEJELFNBQVMsRUFBQyx3QkFBd0I7Z0NBQ2xDVSxHQUFHLEVBQUVkLCtDQUFNLENBQUN1QixVQUFVLENBQUNDLEtBQUssQ0FBQyxDQUFDUixHQUFHLEVBQUU7K0JBRjlCTyxVQUFVLENBQUNFLEdBQUc7Ozs7cUNBR0Q7eUJBQ0wsQ0FBQzs7Ozs7NEJBQ0E7a0NBQ04sOERBQUNMLEdBQUM7d0JBQUNoQixTQUFTLEVBQUMsOEJBQThCOzs0QkFDdEMsSUFBSXNCLElBQUksQ0FBQ3hCLFVBQVUsQ0FBQ3lCLFdBQVcsQ0FBQyxDQUFDQyxZQUFZLEVBQUU7NEJBQUMsSUFBRTs0QkFBQyxFQUFFOzRCQUNyRDFCLFVBQVUsQ0FBQzJCLHNCQUFzQixHQUNoQyxTQUFTLEdBQ1QsSUFBSUgsSUFBSSxDQUFDeEIsVUFBVSxDQUFDeUIsV0FBVyxDQUFDLENBQUNDLFlBQVksRUFBRTs7Ozs7OzRCQUM3QztrQ0FFUiw4REFBQ0UsSUFBRTt3QkFBQzFCLFNBQVMsRUFBQyw0SEFDYjtrQ0FDQUYsVUFBVSxDQUFDNkIsTUFBTSxDQUFDVCxHQUFHLENBQUMsU0FBQ1UsS0FBSyxFQUFFQyxDQUFDO2lEQUM1Qiw4REFBQ0MsSUFBRTswQ0FBVUYsS0FBSzsrQkFBVEMsQ0FBQzs7OztxQ0FBYzt5QkFDM0IsQ0FBQzs7Ozs7NEJBQ0c7Ozs7OztvQkFDSDs7Ozs7O1lBQ0ksQ0FDWDtBQUNILENBQUM7QUEzQ3VCaEMsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGVyaWVuY2VDYXJkLnRzeD9mOWRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBFeHBlcmllbmNlIH0gZnJvbSAnLi4vdHlwaW5ncyc7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICcuLi9zYW5pdHknO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGV4cGVyaWVuY2U6IEV4cGVyaWVuY2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeHBlcmllbmNlQ2FyZCh7IGV4cGVyaWVuY2UgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQtbGcgaXRlbXMtY2VudGVyIHNwYWNlLXktNyBmbGV4LXNocmluay0wIHctWzUwMHB4XSBtZDp3LVs2MDBweF0geGw6dy1bOTAwcHhdIHNuYXAtY2VudGVyIGJnLVsjMjkyOTI5XSBwLTEwIGhvdmVyOm9wYWNpdHktMTAwIG9wYWNpdHktNDAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTIwMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICA8bW90aW9uLmltZ1xuICAgIGluaXRpYWw9e3tcbiAgICAgICAgeTogLTEwMCxcbiAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfX1cbiAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjIgfX1cbiAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgIGNsYXNzTmFtZT1cInctMzIgaC0zMiByb3VuZGVkLWZ1bGwgeGw6dy1bMjAwcHhdIHhsOmgtWzIwMHB4XSBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiIFxuICAgIHNyYz17dXJsRm9yKGV4cGVyaWVuY2U/LmNvbXBhbnlJbWFnZSkudXJsKCl9IGFsdD1cIlwiIFxuICAgIC8+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTAgbWQ6cHgtMTBcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtbGlnaHRcIj5Tb2Z0d2FyZSBFbmdpbmVlcjwvaDQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCBtdC0xXCI+R29vZ2xlPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIG15LTJcIj5cbiAgICAgICAgICAgIHtleHBlcmllbmNlLnRlY2hub2xvZ2llcy5tYXAodGVjaG5vbG9neSA9PiAoXG4gICAgICAgICAgICAgICAgPGltZ1xua2V5PXt0ZWNobm9sb2d5Ll9pZH1cbmNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGxcIlxuc3JjPXt1cmxGb3IodGVjaG5vbG9neS5pbWFnZSkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHB5LTUgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAge25ldyBEYXRlKGV4cGVyaWVuY2UuZGF0ZVN0YXJ0ZWQpLnRvRGF0ZVN0cmluZygpfSAte1wiXCJ9XG4gICAgICAgICAgICB7ZXhwZXJpZW5jZS5pc0N1cnJlbnRseVdvcmtpbmdIZXJlXG4gICAgICAgICAgICA/IFwiUHJlc2VudFwiXG4gICAgICAgICAgICA6IG5ldyBEYXRlKGV4cGVyaWVuY2UuZGF0ZVN0YXJ0ZWQpLnRvRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2Mgc3BhY2UteS01IG1sLTUgdGV4dC1sZyBoLTk2IG92ZXJmbG93LXktc2Nyb2xsIHNjcm9sbGJhci10aGluIHNjcm9sbGJhci10cmFjay1ibGFjayBzY3JvbGxiYXItdGh1bWItWyNGN0FCMEFdLzgwXG4gICAgICAgIFwiPlxuICAgICAgICB7ZXhwZXJpZW5jZS5wb2ludHMubWFwKChwb2ludCwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aX0+e3BvaW50fTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInVybEZvciIsIkV4cGVyaWVuY2VDYXJkIiwiZXhwZXJpZW5jZSIsImFydGljbGUiLCJjbGFzc05hbWUiLCJpbWciLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsInNyYyIsImNvbXBhbnlJbWFnZSIsInVybCIsImFsdCIsImRpdiIsImg0IiwicCIsInRlY2hub2xvZ2llcyIsIm1hcCIsInRlY2hub2xvZ3kiLCJpbWFnZSIsIl9pZCIsIkRhdGUiLCJkYXRlU3RhcnRlZCIsInRvRGF0ZVN0cmluZyIsImlzQ3VycmVudGx5V29ya2luZ0hlcmUiLCJ1bCIsInBvaW50cyIsInBvaW50IiwiaSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExperienceCard.tsx\n"));

/***/ })

});