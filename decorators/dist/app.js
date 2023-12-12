"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function LogValidation(target, propertyName) {
    console.log('class attribute descriptor');
    console.log(target, ' ' + propertyName);
}
function isAuthenticatedCheck(target, name, descriptor) {
    console.log('apply decorator to isAuthenticated descriptor');
    console.log('target: ' + JSON.stringify(target));
    console.log('name: ' + name);
    console.log('descriptor: ' + JSON.stringify(descriptor));
}
class User {
    constructor(name, username) {
        this.userAuthenticated = false;
        this.name = name;
        this.username = username;
        this.password = (Math.random() + 1).toString(36).substring(7);
    }
    get isAthenticated() {
        return this.userAuthenticated;
    }
    set isAuthenticated(pass) {
        if (this.password === pass)
            this.userAuthenticated = true;
        else
            this.userAuthenticated = false;
    }
}
__decorate([
    LogValidation,
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    isAuthenticatedCheck,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "isAuthenticated", null);
