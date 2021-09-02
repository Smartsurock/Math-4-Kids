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

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Helper {\r\n  getRandomColor() {\r\n    const numbers = \"0123456789abcdef\";\r\n    let background = \"\";\r\n\r\n    for (let i = 0; i < 6; i++) {\r\n      let random = Math.floor(Math.random() * numbers.length);\r\n      background += numbers.substring(random, random + 1);\r\n    }\r\n\r\n    return `#${background}`;\r\n  }\r\n\r\n  getRandomNumber(num1, num2, num3) {\r\n    if (num2) {\r\n      return Math.round(Math.random() * num1 + num2);\r\n    }\r\n    if (num3) {\r\n      return (Math.random() * num1).toFixed(2);\r\n    }\r\n    return Math.round(Math.random() * num1);\r\n  }\r\n\r\n  plusMinus() {\r\n    if (Math.random() <= 0.5) {\r\n      return \"-\";\r\n    } else {\r\n      return \"\";\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helper);\n\n//# sourceURL=webpack:///./helper.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./helper.js\");\n\r\n\r\nclass MathForKids {\r\n  constructor() {\r\n    this.body = document.querySelector(\".body__main\");\r\n    this.helper = new _helper_js__WEBPACK_IMPORTED_MODULE_0__.default();\r\n    this.action = document.querySelector(\".header__link.active\").getAttribute(\"id\");\r\n\r\n    this.addEquation();\r\n    this.addClickEvent();\r\n  }\r\n\r\n  addEquation() {\r\n    let number1 = this.helper.getRandomNumber(10);\r\n    let number2;\r\n\r\n    if (this.action == \"/\") {\r\n      number2 = this.helper.getRandomNumber(10, 1); //exclude division by zero\r\n    } else {\r\n      number2 = this.helper.getRandomNumber(10);\r\n    }\r\n\r\n    this.body.innerHTML = `\r\n      <span style=\"color: ${this.helper.getRandomColor()}\">${number1}</span>\r\n      <span style=\"color: ${this.helper.getRandomColor()}\">${this.action}</span>\r\n      <span style=\"color: ${this.helper.getRandomColor()}\">${number2}</span>\r\n      <span style=\"color: ${this.helper.getRandomColor()}\">=</span>\r\n      <span style=\"color: ${this.helper.getRandomColor()}\">?</span>`;\r\n\r\n    this.result = this.getAnswer(number1, number2);\r\n    this.addAnswers();\r\n  }\r\n\r\n  addClickEvent() {\r\n    this.answerBoxs.forEach(el => {\r\n      el.addEventListener(\"click\", () => {\r\n        setTimeout(() => {\r\n          if (el.innerHTML == this.result) {\r\n            el.parentNode.classList.add(\"active\");\r\n            el.nextElementSibling.innerHTML = \"&#9989;\";\r\n            setTimeout(() => {\r\n              this.addEquation();\r\n            }, 1300)\r\n          } else {\r\n            el.parentNode.classList.add(\"active\");\r\n            el.nextElementSibling.innerHTML = \"&#10060;\";\r\n          }\r\n        }, 200);\r\n        setTimeout(() => {\r\n          el.parentNode.classList.remove(\"active\");\r\n        }, 1500);\r\n      })\r\n    })\r\n  }\r\n\r\n  getAnswer(num1, num2) {\r\n    const result = {\r\n      '+': (a, b) => a + b,\r\n      '-': (a, b) => a - b,\r\n      '*': (a, b) => a * b,\r\n      '/': (a, b) => a / b,\r\n    }\r\n\r\n    let answer = result[this.action](num1, num2);\r\n\r\n    if (answer === 0) {\r\n      return answer;\r\n    }\r\n    if (!Number.isInteger(answer) && this.action == \"/\") {\r\n      answer = answer.toFixed(2);\r\n    }\r\n\r\n    return answer;\r\n  }\r\n\r\n  addAnswers() {\r\n    this.answerBoxs = document.querySelectorAll(\".body__answer\");\r\n\r\n    this.answerBoxs.forEach(el => {\r\n      el.style.backgroundColor = this.helper.getRandomColor();\r\n      switch (this.action) {\r\n        case \"+\":\r\n          return el.innerHTML = this.helper.getRandomNumber(20);\r\n        case \"-\":\r\n          return el.innerHTML = `${this.helper.plusMinus()}${this.helper.getRandomNumber(10)}`;\r\n        case \"*\":\r\n          return el.innerHTML = this.helper.getRandomNumber(90);\r\n        case \"/\":\r\n          return el.innerHTML = this.helper.getRandomNumber(5, false, true);\r\n        default: return;\r\n      }\r\n    })\r\n\r\n    let select = this.helper.getRandomNumber(2);\r\n    this.answerBoxs[select].innerHTML = this.result;\r\n  }\r\n}\r\n\r\nconst math4kids = new MathForKids();\n\n//# sourceURL=webpack:///./script.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;