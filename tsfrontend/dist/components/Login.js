"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=Login.js.map