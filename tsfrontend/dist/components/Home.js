"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=Home.js.map