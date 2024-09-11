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

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Orchard-fed-test/./src/sass/main.scss?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n\n\n// Adds the data taken from the ids to the function and puts them in the modal elements\nwindow.updateModal = (imageSrc, text) => {\n    const modalImage = document.getElementById('modalImage');\n    const modalText = document.getElementById('modalText');\n\n    if (modalImage && modalText) {\n        modalImage.src = imageSrc;\n        modalText.textContent = text;\n    } \n};\n\n// Captures the element that was clicked on the navbar\nconst initializeScrollSpyAndHandlers = () => {\n    // Initialize ScrollSpy without changing the hash in the URL\n    new bootstrap.ScrollSpy(document.body, {\n        target: '#navbar-main',\n        offset: 5\n    });\n\n    // Select all target links once\n    const links = document.querySelectorAll('[data-scroll-target]');\n\n    // Customize ScrollSpy behavior to not modify the hash\n    links.forEach(link => {\n        link.addEventListener('click', (event) => {\n            event.preventDefault();\n\n            // Display in the console the element that was clicked\n            console.log(`Anchor clicked element: ${event.target.outerHTML}`);\n\n            // Get the displacement target\n            const targetSelector = link.getAttribute('data-scroll-target');\n            const targetElement = document.querySelector(targetSelector);\n\n            // Check if target exists before moving\n            if (targetElement) {\n                targetElement.scrollIntoView({ behavior: 'smooth' });\n            } else {\n                console.warn('Elemento no encontrado:', targetSelector);\n            }\n        });\n    });\n};\n\n// Execute the functions when the DOM is fully loaded\ndocument.addEventListener('DOMContentLoaded', () => {\n    initializeScrollSpyAndHandlers();\n});\n\n// Add effect and style change in current\ndocument.querySelectorAll('.nav').forEach(nav => {\n    const currentClass = 'nav__item--current';\n    \n    // Optimize the initial selection\n    let currentItem = nav.querySelector(`.${currentClass}`);\n    const navItems = Array.from(nav.querySelectorAll('.nav__item'));\n\n    const setCurrent = newItem => {\n        if (newItem === currentItem) return;\n\n        // Update the current item\n        if (currentItem) currentItem.classList.remove(currentClass);\n        newItem.classList.add(currentClass);\n        currentItem = newItem; \n    };\n    \n    navItems.forEach(item => {\n        item.addEventListener('click', () => setCurrent(item));\n    });\n});\n\n\n//# sourceURL=webpack://Orchard-fed-test/./src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;