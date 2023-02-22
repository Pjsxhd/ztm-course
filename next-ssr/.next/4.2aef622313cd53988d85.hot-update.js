webpackHotUpdate(4,{

/***/ "./components/image.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = 'D:\\git\\pjs\\ztm\\next-ssr\\components\\image.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var Image = function Image() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://images.ctfassets.net/mivicpf5zews/58QOKTX2GN8Grr2oZme9Uu/c94491d016b61428a13914ef0b68f398/Princess_Seaways.jpg?q=75', __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    });
};

var _default = Image;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Image, 'Image', 'D:/git/pjs/ztm/next-ssr/components/image.js');
    reactHotLoader.register(_default, 'default', 'D:/git/pjs/ztm/next-ssr/components/image.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_image__ = __webpack_require__("./components/image.js");
var _jsxFileName = 'D:\\git\\pjs\\ztm\\next-ssr\\pages\\about.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




var About = function About() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { fontSize: '20px', color: 'blue' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            'About'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                'Back'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_image__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            'I was a magician once'
        )
    );
};

var _default = About;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(About, 'About', 'D:/git/pjs/ztm/next-ssr/pages/about.js');
    reactHotLoader.register(_default, 'default', 'D:/git/pjs/ztm/next-ssr/pages/about.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.2aef622313cd53988d85.hot-update.js.map