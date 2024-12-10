"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const Home_1 = require("./components/Home");
const Login_1 = require("./components/Login");
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
//# sourceMappingURL=Router.js.map