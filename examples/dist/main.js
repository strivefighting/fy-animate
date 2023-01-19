/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../dist/index.js":
/*!************************!*\
  !*** ../dist/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar tween_1 = __webpack_require__(/*! ./tween */ \"../dist/tween.js\");\r\nvar Animate = /** @class */ (function () {\r\n    function Animate(dom) {\r\n        this.dom = dom; // 进行运动的dom节点\r\n        this.startTime = 0; // 动画开始时间 \r\n        this.startPos = 0; //动画开始时，dom节点的位置，即dom的初始位置\r\n        this.endPos = 0; //动画结束时，dom节点的位置，即dom的目标位置\r\n        this.propertyName = null; // dom节点需要被改变的css属性名\r\n        this.easing = null; // 缓动算法\r\n        this.duration = 0; // 动画持续时间\r\n        this.animateFrameId = null; // requestAnimationFrame Id\r\n        this.unit = ''; // 单位\r\n    }\r\n    Animate.prototype.start = function (propertyName, endPos, duration, easing, unit) {\r\n        if (unit === void 0) { unit = 'px'; }\r\n        this.startTime = +new Date; //动画启动时间\r\n        this.startPos = this.dom.getBoundingClientRect()[propertyName]; // dom节点初始位置\r\n        this.propertyName = propertyName;\r\n        this.endPos = endPos;\r\n        this.duration = duration;\r\n        this.easing = typeof easing === 'string' ? tween_1.tween[easing] : easing;\r\n        this.unit = unit;\r\n        this.animateFrame();\r\n    };\r\n    Animate.prototype.animateFrame = function () {\r\n        if (this.step() === false) {\r\n            this.animateFrameId && cancelAnimationFrame(this.animateFrameId);\r\n            return;\r\n        }\r\n        this.animateFrameId = window.requestAnimationFrame(this.animateFrame.bind(this));\r\n    };\r\n    // 动画每一帧需要做的事\r\n    Animate.prototype.step = function () {\r\n        var t = +new Date;\r\n        if (t >= this.startTime + this.duration) {\r\n            this.update(this.endPos);\r\n            return false;\r\n        }\r\n        var easingFn = this.easing;\r\n        var pos = easingFn(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);\r\n        // pos为当前位置\r\n        this.update(pos);\r\n    };\r\n    Animate.prototype.update = function (pos) {\r\n        this.dom.style.setProperty(this.propertyName, pos + this.unit);\r\n    };\r\n    return Animate;\r\n}());\r\nexports[\"default\"] = Animate;\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://examples/../dist/index.js?");

/***/ }),

/***/ "../dist/tween.js":
/*!************************!*\
  !*** ../dist/tween.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.tween = void 0;\r\n/**\r\n * Flash缓动函数策略对象\r\n * @param {Number} t  动画已消耗时间/ms\r\n * @param {Number} b 小球初始位置\r\n * @param {Number} c 小球运动量\r\n * @param {Number} d 动画持续的总时间/ms\r\n * @returns 动画元素当前应该处在的位置\r\n */\r\nexports.tween = {\r\n    linear: function (t, b, c, d) {\r\n        return c * t / d + b;\r\n    },\r\n    easeIn: function (t, b, c, d) {\r\n        return c * (t /= d) * t + b;\r\n    },\r\n    easeOut: function (t, b, c, d) {\r\n        return -c * (t /= d) * (t - 2) + b;\r\n    },\r\n    easeInOut: function (t, b, c, d) {\r\n        if ((t /= d / 2) < 1) {\r\n            return c / 2 * t * t + b;\r\n        }\r\n        return -c / 2 * ((--t) * (t - 2) - 1) + b;\r\n    },\r\n    strongEaseIn: function (t, b, c, d) {\r\n        return c * (t /= d) * t * t * t * t + b;\r\n    },\r\n    strongEaseOut: function (t, b, c, d) {\r\n        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;\r\n    },\r\n    sineaseIn: function (t, b, c, d) {\r\n        return c * (t /= d) * t * t + b;\r\n    },\r\n    sineaseOut: function (t, b, c, d) {\r\n        return c * ((t = t / d - 1) * t * t + 1) + b;\r\n    }\r\n};\r\n//# sourceMappingURL=tween.js.map\n\n//# sourceURL=webpack://examples/../dist/tween.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/index.js */ \"../dist/index.js\");\n\r\n;(function(){\r\n    const btn = document.querySelector('button');\r\n    btn.addEventListener('click', function() {\r\n        const div = document.querySelector('div');\r\n        const animate1 = new _dist_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](div);\r\n        // const animate2 = new Animate(div);\r\n\r\n        animate1.start('left', 500, 2000, 'easeInOut');\r\n        // animate2.start('top', 400, 2000, 'linear');\r\n    })\r\n})()\n\n//# sourceURL=webpack://examples/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;