/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
const Home_1 = __webpack_require__(/*! ./components/Home */ "./src/components/Home.ts");
const Login_1 = __webpack_require__(/*! ./components/Login */ "./src/components/Login.ts");
class Router {
    constructor() {
        this.mainElement = document.getElementById('main-container');
    }
    getRoute() {
        return window.location.pathname;
    }
    handleRequest() {
        var _a, _b;
        const location = this.getRoute();
        switch (location) {
            case '/login':
                (_a = this.mainElement) === null || _a === void 0 ? void 0 : _a.append(new Login_1.Login().render());
                break;
            default:
                (_b = this.mainElement) === null || _b === void 0 ? void 0 : _b.append(new Home_1.Home().render());
        }
    }
}
exports.Router = Router;


/***/ }),

/***/ "./src/components/Home.ts":
/*!********************************!*\
  !*** ./src/components/Home.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Home = void 0;
class Home {
    constructor() {
        this.container = document.createElement('div');
    }
    render() {
        const pageLabel = document.createElement('label');
        pageLabel.innerText = 'Welcome to home page';
        this.container.append(pageLabel);
        return this.container;
    }
}
exports.Home = Home;


/***/ }),

/***/ "./src/components/Login.ts":
/*!*********************************!*\
  !*** ./src/components/Login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Login = void 0;
class Login {
    constructor() {
        this.container = document.createElement('div');
    }
    render() {
        const pageLabel = document.createElement('label');
        pageLabel.innerText = 'Welcome to Login page';
        this.container.append(pageLabel);
        return this.container;
    }
}
exports.Login = Login;


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/Launcher.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Router_1 = __webpack_require__(/*! ./Router */ "./src/Router.ts");
class Launcher {
    constructor() {
        this.router = new Router_1.Router();
    }
    launchApp() {
        console.log('app started');
        this.router.handleRequest();
    }
}
new Launcher().launchApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBd0M7QUFDeEMsMkZBQTBDO0FBRTFDLE1BQWEsTUFBTTtJQUFuQjtRQU1ZLGdCQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztJQVduRSxDQUFDO0lBZlcsUUFBUTtRQUNaLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRO0lBQ25DLENBQUM7SUFHTSxhQUFhOztRQUNoQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2hDLFFBQU8sUUFBUSxFQUFFLENBQUM7WUFDZCxLQUFLLFFBQVE7Z0JBQ1QsVUFBSSxDQUFDLFdBQVcsMENBQUUsTUFBTSxDQUFDLElBQUksYUFBSyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzlDLE1BQU07WUFDVjtnQkFDSSxVQUFJLENBQUMsV0FBVywwQ0FBRSxNQUFNLENBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztDQUNKO0FBakJELHdCQWlCQzs7Ozs7Ozs7Ozs7Ozs7QUNwQkQsTUFBYSxJQUFJO0lBQWpCO1FBQ1ksY0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBUXJELENBQUM7SUFORyxNQUFNO1FBQ0YsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakQsU0FBUyxDQUFDLFNBQVMsR0FBRyxzQkFBc0I7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVM7SUFDekIsQ0FBQztDQUNKO0FBVEQsb0JBU0M7Ozs7Ozs7Ozs7Ozs7O0FDVEQsTUFBYSxLQUFLO0lBQWxCO1FBQ1ksY0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBUXJELENBQUM7SUFORyxNQUFNO1FBQ0YsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakQsU0FBUyxDQUFDLFNBQVMsR0FBRyx1QkFBdUI7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVM7SUFDekIsQ0FBQztDQUNKO0FBVEQsc0JBU0M7Ozs7Ozs7VUNURDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsd0VBQWlDO0FBRWpDLE1BQU0sUUFBUTtJQUFkO1FBRVksV0FBTSxHQUFXLElBQUksZUFBTSxFQUFFO0lBTXpDLENBQUM7SUFKVSxTQUFTO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7SUFDL0IsQ0FBQztDQUNKO0FBRUQsSUFBSSxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c2Zyb250ZW5kLy4vc3JjL1JvdXRlci50cyIsIndlYnBhY2s6Ly90c2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvSG9tZS50cyIsIndlYnBhY2s6Ly90c2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvTG9naW4udHMiLCJ3ZWJwYWNrOi8vdHNmcm9udGVuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c2Zyb250ZW5kLy4vc3JjL0xhdW5jaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWVcIlxuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luXCJcblxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XG5cbiAgICBwcml2YXRlIGdldFJvdXRlKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpXG4gICAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5nZXRSb3V0ZSgpXG4gICAgICAgIHN3aXRjaChsb2NhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnL2xvZ2luJzpcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5FbGVtZW50Py5hcHBlbmQobmV3IExvZ2luKCkucmVuZGVyKCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMubWFpbkVsZW1lbnQ/LmFwcGVuZChuZXcgSG9tZSgpLnJlbmRlcigpKVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBIb21lIHtcbiAgICBwcml2YXRlIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgcGFnZUxhYmVsLmlubmVyVGV4dCA9ICdXZWxjb21lIHRvIGhvbWUgcGFnZSdcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHBhZ2VMYWJlbClcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gICAgcHJpdmF0ZSBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIHBhZ2VMYWJlbC5pbm5lclRleHQgPSAnV2VsY29tZSB0byBMb2dpbiBwYWdlJ1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQocGFnZUxhYmVsKVxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL1JvdXRlclwiXG5cbmNsYXNzIExhdW5jaGVyIHtcblxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgPSBuZXcgUm91dGVyKClcblxuICAgIHB1YmxpYyBsYXVuY2hBcHAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhcHAgc3RhcnRlZCcpXG4gICAgICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKVxuICAgIH1cbn1cblxubmV3IExhdW5jaGVyKCkubGF1bmNoQXBwKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=