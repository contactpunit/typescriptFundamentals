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
var Employe_1;
function displayEmployee(employeeList, element) {
    return function (employeClass) {
        return class extends employeClass {
            constructor(...args) {
                super();
                const reqEl = document.getElementById(element);
                for (const elem of employeeList) {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(elem));
                    reqEl.appendChild(li);
                }
            }
        };
    };
}
let Employe = Employe_1 = class Employe {
    constructor(name, age, salary, department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
        Employe_1.allEmployees.push(this);
    }
    listEmployees() {
        console.log(`All employees of company are ${(Employe_1.allEmployees.map(e => e.name)).join(',')}`);
    }
};
Employe.allEmployees = [];
Employe = Employe_1 = __decorate([
    displayEmployee(['Punit', 'Manu', 'Raj'], 'app'),
    __metadata("design:paramtypes", [String, Number, Number, String])
], Employe);
const empl = new Employe('punit', 33, 1234, 'IT');
empl.listEmployees();
// const emp2 = new Employee('manu', 36, 1111, 'IT')
// emp1.listEmployees()
