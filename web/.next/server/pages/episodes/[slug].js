"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/episodes/[slug]";
exports.ids = ["pages/episodes/[slug]"];
exports.modules = {

/***/ "./pages/episodes/[slug].js":
/*!**********************************!*\
  !*** ./pages/episodes/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_1___default()({\n    projectId: \"7yydvelu\",\n    dataset: \"production\",\n    apiVersion: \"2022-06-01\",\n    useCdn: true\n});\nconst episode = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.episode.coverArt.url + \"?w=200\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\sanity-podcast-app\\\\web\\\\pages\\\\episodes\\\\[slug].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: props.episode.title\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\sanity-podcast-app\\\\web\\\\pages\\\\episodes\\\\[slug].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: props.episode.description\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\sanity-podcast-app\\\\web\\\\pages\\\\episodes\\\\[slug].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.episode.summary\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\sanity-podcast-app\\\\web\\\\pages\\\\episodes\\\\[slug].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: props.episode.file.url\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\sanity-podcast-app\\\\web\\\\pages\\\\episodes\\\\[slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 8\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\sanity-podcast-app\\\\web\\\\pages\\\\episodes\\\\[slug].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code\\\\sanity-podcast-app\\\\web\\\\pages\\\\episodes\\\\[slug].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getStaticPaths() {\n    const pagedata = await client.fetch(`\r\n    *[ _type == \"episode\"] {\"slug\": slug.current}\r\n\r\n  `);\n    const paths = pagedata.map((episode1)=>({\n            params: {\n                slug: episode1.slug\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const slug = params.slug;\n    const pagedata = await client.fetch(`\r\n  *[ _type == \"episode\" && slug.current match $slug ] { \r\n    ..., \r\n    coverArt { \"url\": asset -> url },\r\n    file { \"url\": asset -> url },\r\n  } [0] \r\n\r\n  `, {\n        slug\n    });\n    if (!pagedata) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            episode: pagedata\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (episode);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ3pDLE1BQU1DLE1BQU0sR0FBR0QscURBQVksQ0FBQztJQUMxQkUsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDO0FBRUYsTUFBTUMsT0FBTyxHQUFHQyxDQUFBQSxLQUFLLEdBQUk7SUFDdkIscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxLQUFHO2dCQUFDQyxHQUFHLEVBQUlILEtBQUssQ0FBQ0QsT0FBTyxDQUFDSyxRQUFRLENBQUNDLEdBQUcsR0FBQyxRQUFROzs7Ozt5QkFBSTswQkFDbkQsOERBQUNDLElBQUU7MEJBQUVOLEtBQUssQ0FBQ0QsT0FBTyxDQUFDUSxLQUFLOzs7Ozt5QkFBTTswQkFDOUIsOERBQUNDLElBQUU7MEJBQUVSLEtBQUssQ0FBQ0QsT0FBTyxDQUFDVSxXQUFXOzs7Ozt5QkFBTTswQkFDcEMsOERBQUNDLEdBQUM7MEJBQUVWLEtBQUssQ0FBQ0QsT0FBTyxDQUFDWSxPQUFPOzs7Ozt5QkFBSzswQkFDOUIsOERBQUNDLE9BQUs7Z0JBQUNDLFFBQVE7MEJBQ2QsNEVBQUNDLFFBQU07b0JBQUNYLEdBQUcsRUFBSUgsS0FBSyxDQUFDRCxPQUFPLENBQUNnQixJQUFJLENBQUNWLEdBQUc7Ozs7OzZCQUFJOzs7Ozt5QkFDbEM7Ozs7OztpQkFFSixDQUVQO0NBQ0Y7QUFDTSxlQUFlVyxjQUFjLEdBQUk7SUFDdEMsTUFBTUMsUUFBUSxHQUFHLE1BQU12QixNQUFNLENBQUN3QixLQUFLLENBQUMsQ0FBQztJQUlyQyxNQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csR0FBRyxDQUFDckIsQ0FBQUEsUUFBTyxHQUFJLENBQUM7OzthQUFnQztTQUFFLENBQUM7SUFBQSxDQUFDO0lBRTNFLE9BQU87UUFBRW9COztLQUF3QjtDQUNsQztBQUVELE9BQU8sZUFBZUs7SUFDcEI7O0NBUUtGLElBQUk7S0FBRSxDQUNWO0lBRUQsSUFBSSxDQUFDTCxRQUFRLEVBQUU7UUFDYixPQUFPOztTQUFrQjtLQUMxQjtJQUVEOzs7U0FJRztLQUNGO0NBQ0Y7QUFFRCxlQUFlbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10uanM/NWRkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG5jb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogJzd5eWR2ZWx1JyxcclxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXHJcbiAgYXBpVmVyc2lvbjogJzIwMjItMDYtMDEnLCBcclxuICB1c2VDZG46IHRydWVcclxufSlcclxuXHJcbmNvbnN0IGVwaXNvZGUgPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgc3JjID0ge3Byb3BzLmVwaXNvZGUuY292ZXJBcnQudXJsK1wiP3c9MjAwXCJ9IC8+ICBcclxuICAgICAgPGgxPntwcm9wcy5lcGlzb2RlLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxoMj57cHJvcHMuZXBpc29kZS5kZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICA8cD57cHJvcHMuZXBpc29kZS5zdW1tYXJ5fTwvcD5cclxuICAgICAgPGF1ZGlvIGNvbnRyb2xzPiBcclxuICAgICAgIDxzb3VyY2Ugc3JjID0ge3Byb3BzLmVwaXNvZGUuZmlsZS51cmx9IC8+XHJcbiAgICAgIDwvYXVkaW8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzICgpIHtcclxuICBjb25zdCBwYWdlZGF0YSA9IGF3YWl0IGNsaWVudC5mZXRjaChgXHJcbiAgICAqWyBfdHlwZSA9PSBcImVwaXNvZGVcIl0ge1wic2x1Z1wiOiBzbHVnLmN1cnJlbnR9XHJcblxyXG4gIGApXHJcbiAgY29uc3QgcGF0aHMgPSBwYWdlZGF0YS5tYXAoZXBpc29kZSA9PiAoeyBwYXJhbXM6IHsgc2x1ZzogZXBpc29kZS5zbHVnIH0gfSkpXHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHNsdWcgPSBwYXJhbXMuc2x1Z1xyXG4gIGNvbnN0IHBhZ2VkYXRhID0gYXdhaXQgY2xpZW50LmZldGNoKGBcclxuICAqWyBfdHlwZSA9PSBcImVwaXNvZGVcIiAmJiBzbHVnLmN1cnJlbnQgbWF0Y2ggJHNsdWcgXSB7IFxyXG4gICAgLi4uLCBcclxuICAgIGNvdmVyQXJ0IHsgXCJ1cmxcIjogYXNzZXQgLT4gdXJsIH0sXHJcbiAgICBmaWxlIHsgXCJ1cmxcIjogYXNzZXQgLT4gdXJsIH0sXHJcbiAgfSBbMF0gXHJcblxyXG4gIGAsIHsgc2x1ZyB9XHJcbiAgKVxyXG5cclxuICBpZiAoIXBhZ2VkYXRhKSB7XHJcbiAgICByZXR1cm4geyBub3RGb3VuZDogdHJ1ZSB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZXBpc29kZTogcGFnZWRhdGFcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlcGlzb2RlXHJcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsImVwaXNvZGUiLCJwcm9wcyIsImRpdiIsImltZyIsInNyYyIsImNvdmVyQXJ0IiwidXJsIiwiaDEiLCJ0aXRsZSIsImgyIiwiZGVzY3JpcHRpb24iLCJwIiwic3VtbWFyeSIsImF1ZGlvIiwiY29udHJvbHMiLCJzb3VyY2UiLCJmaWxlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYWdlZGF0YSIsImZldGNoIiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJzbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIm5vdEZvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/episodes/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/episodes/[slug].js"));
module.exports = __webpack_exports__;

})();